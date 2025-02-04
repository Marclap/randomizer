export const PATHS: PathConfig = {
  icons: {
    elegy: '/assets/hollowKnight/icons/charms/GrubberflysElegy.png',
    grub: '/assets/hollowKnight/icons/misc/Grub.png',
    vesselFrag0: '/assets/hollowKnight/icons/fragment/VesselFrag0.png',
    vesselFrag1: '/assets/hollowKnight/icons/fragment/VesselFrag1.png',
    vesselFrag2: '/assets/hollowKnight/icons/fragment/VesselFrag2.png',
    home: '/assets/icon.png',
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
    title: 'elegy',
    url: '/runs/elegy',
    icon: PATHS.icons.elegy,
  },
  {
    title: 'worldsoul',
    url: '/runs/worldsoul',
    icon: PATHS.icons.vesselFrag2,
  },
]

export const CONFIG_RUN: SplitConfig = {
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
