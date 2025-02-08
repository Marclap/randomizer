export const PATHS: PathConfig = {
  icons: {
    allMasks: '/assets/hollowKnight/icons/achievements/AllMask.png',
    allMasksAllVessels:
      '/assets/hollowKnight/icons/achievements/AllMaskAllVessels.png',
    allStags: '/assets/hollowKnight/icons/achievements/AllStagStations.png',
    allVessels: '/assets/hollowKnight/icons/achievements/AllVessels.png',
    whisperingRoots: '/assets/hollowKnight/icons/misc/WhisperingRoot.png',
    charmNotch: '/assets/hollowKnight/icons/items/CharmNotch.png',
    charmNotchGrimm: '/assets/hollowKnight/icons/items/CharmNotchGrimm.png',
    colosseumBronze:
      '/assets/hollowKnight/icons/achievements/ColosseumBronze.png',
    elegy: '/assets/hollowKnight/icons/charms/GrubberflysElegy.png',
    grimmchild: '/assets/hollowKnight/icons/charms/Grimmchild.png',
    grimmchild2: '/assets/hollowKnight/icons/charms/Grimmchild2.png',
    grub: '/assets/hollowKnight/icons/misc/Grub.png',
    home: '/assets/icon.png',
    maskShard0: '/assets/hollowKnight/icons/fragments/MaskShard0.png',
    maskShard1: '/assets/hollowKnight/icons/fragments/MaskShard1.png',
    maskShard2: '/assets/hollowKnight/icons/fragments/MaskShard2.png',
    maskShard3: '/assets/hollowKnight/icons/fragments/MaskShard3.png',
    stag: '/assets/hollowKnight/icons/misc/Stag.png',
    vesselFrag0: '/assets/hollowKnight/icons/fragments/VesselFrag0.png',
    vesselFrag1: '/assets/hollowKnight/icons/fragments/VesselFrag1.png',
    vesselFrag2: '/assets/hollowKnight/icons/fragments/VesselFrag2.png',
  },
  logos: {
    home: '/assets/hollowKnight/logos/home.png',
  },
}

export const SIDEBAR = [
  {
    title: 'Home',
    url: '/',
    icon: PATHS.icons.home,
  },
  {
    title: '16 Mask Shards',
    url: '/runs/allmaskshards',
    icon: PATHS.icons.allMasks,
  },
  {
    title: 'All Charm Notches',
    url: '/runs/allcharmnotches',
    icon: PATHS.icons.charmNotch,
  },
  {
    title: 'All Masks All Vessels',
    url: '/runs/allmasksallvessels',
    icon: PATHS.icons.allMasksAllVessels,
  },
  {
    title: 'All Stag Stations',
    url: '/runs/allstagstations',
    icon: PATHS.icons.allStags,
  },
  {
    title: 'All Whispering Roots',
    url: '/runs/allwhisperingroots',
    icon: PATHS.icons.whisperingRoots,
  },
  {
    title: 'Elegy%',
    url: '/runs/elegy',
    icon: PATHS.icons.elegy,
  },
  {
    title: 'Worldsoul',
    url: '/runs/worldsoul',
    icon: PATHS.icons.allVessels,
  },
]

export const TITLES: { [key: string]: string } = {
  '': 'Home',
  elegy: 'Elegy%',
  worldsoul: 'Worldsoul',
  allstagstations: 'All Stag Stations',
  allmaskshards: '16 Mask Shards',
  allmasksallvessels: 'All Masks All Vessels',
  allcharmnotches: 'All Charm Notches',
  allwhisperingroots: 'All Whispering Roots',
}

export const CONFIG_RUN: SplitConfig = {
  allmaskshards: {
    gameName: 'Hollow Knight Category Extensions',
    endTriggeringAutosplit: 'True',
    category: '16 Mask Shards Random Mask Shards Order',
  },
  allstagstations: {
    gameName: 'Hollow Knight Category Extensions',
    endTriggeringAutosplit: 'True',
    category: 'All Stag Stations Random Stag Order',
  },
  elegy: {
    gameName: 'Hollow Knight Category Extensions',
    endTriggeringAutosplit: 'True',
    category: 'Elegy% Random Grub Order',
  },
  worldsoul: {
    gameName: 'Hollow Knight Category Extensions',
    endTriggeringAutosplit: 'True',
    category: 'Worldsoul Random Fragment Order',
  },
  allmasksallvessels: {
    gameName: 'Hollow Knight Category Extensions',
    endTriggeringAutosplit: 'True',
    category: 'All Masks All Vessels Random Fragment And Shard Order',
  },
  allcharmnotches: {
    gameName: 'Hollow Knight Category Extensions',
    endTriggeringAutosplit: 'True',
    category: 'All Charm Notches Random Notch Order',
  },
  allwhisperingroots: {
    gameName: 'Hollow Knight Category Extensions',
    endTriggeringAutosplit: 'True',
    category: 'All Whispering Roots Random Roots Order',
  },
}

export const LIVE_SPLIT_CONFIG = {
  HEADER_BASE64:
    'AAEAAAD/////AQAAAAAAAAAMAgAAAFFTeXN0ZW0uRHJhd2luZywgVmVyc2lvbj00LjAuMC4wLCBDdWx0dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPWIwM2Y1ZjdmMTFkNTBhM2EFAQAAABVTeXN0ZW0uRHJhd2luZy5CaXRtYXABAAAABERhdGEHAgIAAAAJAwAAAA8DAAAAOw8A',
  ICON_PREFIX: new Uint8Array([0, 2]),
  TARGET_SIZE: 32,
}
