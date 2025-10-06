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

interface SidebarItem {
  title: string
  url: string
  icon: string
}

interface Restriction {
  description: string
  factor: number
  explanation: string
}

interface RunData {
  title: string
  description: string
  totalItems: number
  unrestrictedPermutations: string
  restrictions?: Restriction[]
  finalPermutations: string
  notes?: string[]
}
