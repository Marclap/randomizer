import { PATHS } from '@/constants'
import { ELEGY, WORLDSOUL } from '@/constants/runs'
import { SPLIT_DATA } from '@/constants/splits'

const getRandomInt = (max: number) => Math.floor(Math.random() * max)

const swap = (arr: string[], first: number, second: number) =>
  ([arr[first], arr[second]] = [arr[second], arr[first]])

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

export const getRandomizerSplits = (category: string) => {
  const shuffleArray = (array: string[]) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = getRandomInt(i + 1)
      swap(shuffled, i, j)
    }
    return shuffled
  }

  switch (category) {
    case 'elegy': {
      const shuffled = shuffleArray(ELEGY)
      shuffled.push('GrubberflysElegy')
      const data = generateSplitInfo(SPLIT_DATA, {})
      return shuffled.map((split) => data[split])
    }
    case 'worldsoul':
      const shuffled = shuffleArray(WORLDSOUL)
      const sly1Pos = shuffled.indexOf('VesselFragSly1')
      const sly2Pos = shuffled.indexOf('VesselFragSly2')
      if (sly1Pos > sly2Pos) swap(shuffled, sly1Pos, sly2Pos)
      const vesselIndexes = shuffled.reduce((acc, split, index) => {
        acc[split] = index % 3
        return acc
      }, {} as Record<string, number>)
      const data = generateSplitInfo(SPLIT_DATA, vesselIndexes)
      return shuffled.map((split) => data[split])
    default:
      return []
  }
}
