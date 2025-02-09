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
