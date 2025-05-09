import { ICONS } from '@/constants/paths'
import {
  CHARM_NOTCH_RESTRICTIONS,
  GRIMMCHILD_RESTRICTIONS,
  LORD_OF_THE_KEYS_RESTRICTIONS,
  MASK_AND_VESSEL_RESTRICTIONS,
  MASK_SHARD_RESTRICTIONS,
  WORLD_SOUL_RESTRICTIONS,
} from '@/constants/restrictions'
import {
  ALL_CHARM_NOTCHES,
  ALL_GREAT_KNIGHTS,
  ALL_MASK_SHARDS,
  ALL_MASKS_ALL_VESSELS,
  ALL_STAG_STATIONS,
  ALL_WHISPERING_ROOTS,
  ELEGY,
  LORD_OF_THE_KEYS,
  WORLDSOUL,
} from '@/constants/runs'
import { SPLIT_DATA } from '@/constants/splits'

const getRandomInt = (max: number) => Math.floor(Math.random() * max)

const swap = (arr: string[], first: number, second: number) =>
  ([arr[first], arr[second]] = [arr[second], arr[first]])

const shuffleArray = (array: string[]) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--)
    swap(shuffled, i, getRandomInt(i + 1))
  return shuffled
}

const generateSplitInfo = (
  splits: {
    key: string
    name: string
    iconType: string | { type: string }
    split?: string
  }[],
  extraParams?: Record<string, string | number>
): Record<string, SplitInfo> => {
  return splits.reduce((acc, { key, name, iconType, split }) => {
    const imgPath =
      typeof iconType === 'string'
        ? ICONS[iconType]
        : extraParams && key in extraParams
        ? ICONS[`${iconType.type}${extraParams[key]}`]
        : ICONS[iconType.type]

    acc[key] = {
      name,
      img: imgPath,
      split: split || key,
    }
    return acc
  }, {} as Record<string, SplitInfo>)
}

const processSplits = (
  shuffled: string[],
  extraParams?: Record<string, number>,
  additionalSplit?: string
) => {
  if (additionalSplit) shuffled.push(additionalSplit)
  const data = generateSplitInfo(SPLIT_DATA, extraParams)
  return shuffled.map((split) => data[split])
}

const getCorrectOrderWithRestrictions = (
  shuffled: string[],
  restrictions: string[][]
) => {
  restrictions.forEach((restriction) => {
    const restrictionPosition = restriction
      .map((res) => shuffled.indexOf(res))
      .filter((pos) => pos !== -1)
    restrictionPosition.sort((a, b) => a - b)
    restriction.forEach((res, index) => {
      const currentPos = shuffled.indexOf(res)
      const targetPos = restrictionPosition[index]
      if (currentPos !== targetPos) swap(shuffled, currentPos, targetPos)
    })
  })
}

export const getRandomizerSplits = (category: string) => {
  switch (category) {
    case 'elegy': {
      const shuffled = shuffleArray(ELEGY)
      return processSplits(shuffled, undefined, 'GrubberflysElegy')
    }
    case 'worldsoul': {
      const shuffled = shuffleArray(WORLDSOUL)
      getCorrectOrderWithRestrictions(shuffled, [WORLD_SOUL_RESTRICTIONS])
      const vesselIndexes = shuffled.reduce((acc, split, index) => {
        acc[split] = index % 3
        return acc
      }, {} as Record<string, number>)
      return processSplits(shuffled, vesselIndexes)
    }
    case 'allstagstations': {
      const shuffled = shuffleArray(ALL_STAG_STATIONS)
      return processSplits(shuffled, undefined, 'StagnestStation')
    }
    case 'allmaskshards': {
      const shuffled = shuffleArray(ALL_MASK_SHARDS)
      getCorrectOrderWithRestrictions(shuffled, [MASK_SHARD_RESTRICTIONS])
      const maskIndexes = shuffled.reduce((acc, split, index) => {
        acc[split] = index % 4
        return acc
      }, {} as Record<string, number>)
      return processSplits(shuffled, maskIndexes)
    }
    case 'allmasksallvessels': {
      const shuffled = shuffleArray(ALL_MASKS_ALL_VESSELS)
      getCorrectOrderWithRestrictions(shuffled, [
        MASK_SHARD_RESTRICTIONS,
        WORLD_SOUL_RESTRICTIONS,
        MASK_AND_VESSEL_RESTRICTIONS,
      ])
      let maskShardIndex = 0
      let veselFragIndex = 0
      const maskIndexes = shuffled.reduce((acc, split) => {
        if (split.startsWith('MaskShard')) acc[split] = maskShardIndex++ % 4
        else acc[split] = veselFragIndex++ % 3
        return acc
      }, {} as Record<string, number>)
      return processSplits(shuffled, maskIndexes)
    }
    case 'allcharmnotches': {
      const shuffled = shuffleArray(ALL_CHARM_NOTCHES)
      getCorrectOrderWithRestrictions(shuffled, [
        CHARM_NOTCH_RESTRICTIONS,
        GRIMMCHILD_RESTRICTIONS,
      ])
      return processSplits(shuffled)
    }
    case 'allwhisperingroots': {
      const shuffled = shuffleArray(ALL_WHISPERING_ROOTS)
      return processSplits(shuffled)
    }
    case 'lordofthekeys': {
      const shuffled = shuffleArray(LORD_OF_THE_KEYS)
      getCorrectOrderWithRestrictions(shuffled, [LORD_OF_THE_KEYS_RESTRICTIONS])
      return processSplits(shuffled)
    }
    case 'allgreatknights': {
      const shuffled = shuffleArray(ALL_GREAT_KNIGHTS)
      return processSplits(shuffled)
    }
    default:
      return []
  }
}
