import { PATHS } from '@/constants'
import { ELEGY, WORLDSOUL, ALL_STAG_STATIONS } from '@/constants/runs'
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
        ? PATHS.icons[iconType]
        : extraParams && key in extraParams
        ? PATHS.icons[`${iconType.type}${extraParams[key]}`]
        : PATHS.icons[iconType.type]

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

export const getRandomizerSplits = (category: string) => {
  switch (category) {
    case 'elegy': {
      const shuffled = shuffleArray(ELEGY)
      return processSplits(shuffled, undefined, 'GrubberflysElegy')
    }
    case 'worldsoul': {
      const shuffled = shuffleArray(WORLDSOUL)
      const sly1Pos = shuffled.indexOf('VesselFragSly1')
      const sly2Pos = shuffled.indexOf('VesselFragSly2')
      if (sly1Pos > sly2Pos) swap(shuffled, sly1Pos, sly2Pos)
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
    default:
      return []
  }
}
