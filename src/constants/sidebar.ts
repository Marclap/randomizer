import { ICONS } from '@/constants/paths'

export const SIDEBAR: SidebarItem[] = [
  {
    title: 'Home',
    url: '/',
    icon: ICONS.home,
  },
  {
    title: 'Elegy%',
    url: '/runs/elegy',
    icon: ICONS.elegy,
  },
  {
    title: 'Worldsoul',
    url: '/runs/worldsoul',
    icon: ICONS.allVessels,
  },
  {
    title: 'All Stag Stations',
    url: '/runs/allstagstations',
    icon: ICONS.allStags,
  },
  {
    title: '16 Mask Shards',
    url: '/runs/allmaskshards',
    icon: ICONS.allMasks,
  },
  {
    title: 'All Masks All Vessels',
    url: '/runs/allmasksallvessels',
    icon: ICONS.allMasksAllVessels,
  },
  {
    title: 'All Charm Notches',
    url: '/runs/allcharmnotches',
    icon: ICONS.charmNotch,
  },
  {
    title: 'All Whispering Roots',
    url: '/runs/allwhisperingroots',
    icon: ICONS.whisperingRoots,
  },
  {
    title: 'Lord of the Keys',
    url: '/runs/lordofthekeys',
    icon: ICONS.simpleKey,
  },
  {
    title: 'All Great Knights',
    url: '/runs/allgreatknights',
    icon: ICONS.allGreatKnights,
  },
].sort((a, b) => {
  if (a.title === 'Home') return -1
  if (b.title === 'Home') return 1
  return a.title.localeCompare(b.title)
})
