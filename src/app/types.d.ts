interface SplitInfo {
  name: string
  img: string
  split: string
}

interface SplitConfig {
  [key: string]: {
    gameName: string
    endTriggeringAutosplit: string
    category: string
  }
}

interface PathConfig {
  [key: string]: { [key: string]: string }
}

interface CombiantorialComplexityConfig {
  [key: string]: {
    title: string
    description: string
    formula: string
    specialNote: string
    result: string
    comparisons: string[]
    additionalInfo?: React.ReactElement
  }
}
