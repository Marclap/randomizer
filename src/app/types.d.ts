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

interface CombinatorialComplexityConfig {
  [key: string]: React.ReactElement
}
