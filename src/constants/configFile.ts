const DEFAULT_RUN_CONFIG = {
  gameName: 'Hollow Knight Category Extensions',
  endTriggeringAutosplit: 'True',
}

export const CONFIG_RUN: SplitConfig = {
  allmaskshards: {
    ...DEFAULT_RUN_CONFIG,
    category: '16 Mask Shards Random Mask Shards Order',
  },
  allstagstations: {
    ...DEFAULT_RUN_CONFIG,
    category: 'All Stag Stations Random Stag Order',
  },
  elegy: {
    ...DEFAULT_RUN_CONFIG,
    category: 'Elegy% Random Grub Order',
  },
  worldsoul: {
    ...DEFAULT_RUN_CONFIG,
    category: 'Worldsoul Random Fragment Order',
  },
  allmasksallvessels: {
    ...DEFAULT_RUN_CONFIG,
    category: 'All Masks All Vessels Random Fragment And Shard Order',
  },
  allcharmnotches: {
    ...DEFAULT_RUN_CONFIG,
    category: 'All Charm Notches Random Notch Order',
  },
  allwhisperingroots: {
    ...DEFAULT_RUN_CONFIG,
    category: 'All Whispering Roots Random Roots Order',
  },
  lordofthekeys: {
    ...DEFAULT_RUN_CONFIG,
    category: 'Lord Of The Keys Random Keys Order',
  },
}

export const LIVE_SPLIT_CONFIG = {
  HEADER_BASE64:
    'AAEAAAD/////AQAAAAAAAAAMAgAAAFFTeXN0ZW0uRHJhd2luZywgVmVyc2lvbj00LjAuMC4wLCBDdWx0dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPWIwM2Y1ZjdmMTFkNTBhM2EFAQAAABVTeXN0ZW0uRHJhd2luZy5CaXRtYXABAAAABERhdGEHAgIAAAAJAwAAAA8DAAAAOw8A',
  ICON_PREFIX: new Uint8Array([0, 2]),
  TARGET_SIZE: 32,
}
