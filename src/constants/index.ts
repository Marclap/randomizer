export const PATHS: PathConfig = {
  icons: {
    allStag: '/assets/hollowKnight/icons/achievements/AllStagStations.png',
    elegy: '/assets/hollowKnight/icons/charms/GrubberflysElegy.png',
    grub: '/assets/hollowKnight/icons/misc/Grub.png',
    home: '/assets/icon.png',
    maskShard0: '/assets/hollowKnight/icons/fragment/maskShard0.png',
    maskShard1: '/assets/hollowKnight/icons/fragment/maskShard1.png',
    maskShard2: '/assets/hollowKnight/icons/fragment/maskShard2.png',
    maskShard3: '/assets/hollowKnight/icons/fragment/maskShard3.png',
    stag: '/assets/hollowKnight/icons/misc/Stag.png',
    vesselFrag0: '/assets/hollowKnight/icons/fragment/VesselFrag0.png',
    vesselFrag1: '/assets/hollowKnight/icons/fragment/VesselFrag1.png',
    vesselFrag2: '/assets/hollowKnight/icons/fragment/VesselFrag2.png',
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
    icon: PATHS.icons.maskShard3,
  },
  {
    title: 'All Stag Stations',
    url: '/runs/allstagstations',
    icon: PATHS.icons.allStag,
  },
  {
    title: 'Elegy%',
    url: '/runs/elegy',
    icon: PATHS.icons.elegy,
  },
  {
    title: 'Worldsoul',
    url: '/runs/worldsoul',
    icon: PATHS.icons.vesselFrag2,
  },
]

export const TITLES: { [key: string]: string } = {
  '': 'Home',
  elegy: 'Elegy%',
  worldsoul: 'Worldsoul',
  allstagstations: 'All Stag Stations',
  allmaskshards: '16 Mask Shards',
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
}

export const LIVE_SPLIT_CONFIG = {
  HEADER_BASE64:
    'AAEAAAD/////AQAAAAAAAAAMAgAAAFFTeXN0ZW0uRHJhd2luZywgVmVyc2lvbj00LjAuMC4wLCBDdWx0dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPWIwM2Y1ZjdmMTFkNTBhM2EFAQAAABVTeXN0ZW0uRHJhd2luZy5CaXRtYXABAAAABERhdGEHAgIAAAAJAwAAAA8DAAAAOw8A',
  ICON_PREFIX: new Uint8Array([0, 2]),
  TARGET_SIZE: 32,
}
