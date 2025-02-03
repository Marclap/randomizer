import { House } from 'lucide-react'

interface SplitInfo {
  [key: string]: { name: string; img: string; split: string }
}

interface SplitConfig {
  [key: string]: {
    gameName: string
    endTriggeringAutosplit: string
    category: string
  }
}

const PATHS = {
  icons: {
    elegy: '/assets/hollowKnight/icons/charms/GrubberflysElegy.png',
    grub: '/assets/hollowKnight/icons/misc/Grub.png',
  },
}

export const SIDEBAR = [
  {
    title: 'Home',
    url: '/',
    icon: House,
  },
  {
    title: 'elegy',
    url: '/runs/elegy',
    icon: PATHS.icons.elegy,
  },
]

export const ELEGY = [
  'GrubBasinDive',
  'GrubBasinWings',
  'GrubCityBelowLoveTower',
  'GrubCityBelowSanctum',
  'GrubCityCollectorAll',
  'GrubCityGuardHouse',
  'GrubCitySanctum',
  'GrubCitySpire',
  'GrubCliffsBaldurShell',
  'GrubCrossroadsAcid',
  'GrubCrossroadsGuarded',
  'GrubCrossroadsSpikes',
  'GrubCrossroadsVengefly',
  'GrubCrossroadsWall',
  'GrubCrystalPeaksBottomLever',
  'GrubCrystalPeaksCrown',
  'GrubCrystalPeaksCrushers',
  'GrubCrystalPeaksCrystalHeart',
  'GrubCrystalPeaksMimics',
  'GrubCrystalPeaksMound',
  'GrubCrystalPeaksSpikes',
  'GrubDeepnestBeastsDen',
  'GrubDeepnestDark',
  'GrubDeepnestMimics',
  'GrubDeepnestNosk',
  'GrubDeepnestSpikes',
  'GrubFogCanyonArchives',
  'GrubFungalBouncy',
  'GrubFungalSporeShroom',
  'GrubGreenpathCornifer',
  'GrubGreenpathHunter',
  'GrubGreenpathMossKnight',
  'GrubGreenpathVesselFragment',
  'GrubHiveExternal',
  'GrubHiveInternal',
  'GrubKingdomsEdgeCenter',
  'GrubKingdomsEdgeOro',
  'GrubQueensGardensBelowStag',
  'GrubQueensGardensUpper',
  'GrubQueensGardensWhiteLady',
  'GrubRestingGroundsCrypts',
  'GrubWaterwaysCenter',
  'GrubWaterwaysHwurmps',
  'GrubWaterwaysIsma',
]

export const INFO_SPLITS: SplitInfo = {
  GrubCrossroadsWall: {
    name: 'Grub Crossroads Wall',
    img: PATHS.icons.grub,
    split: 'GrubCrossroadsWall',
  },
  GrubCrossroadsSpikes: {
    name: 'Grub Crossroads Spikes',
    img: PATHS.icons.grub,
    split: 'GrubCrossroadsSpikes',
  },
  GrubGreenpathMossKnight: {
    name: 'Grub Greenpath Moss Knight',
    img: PATHS.icons.grub,
    split: 'GrubGreenpathMossKnight',
  },
  GrubCitySanctum: {
    name: 'Grub City Sanctum',
    img: PATHS.icons.grub,
    split: 'GrubCitySanctum',
  },
  GrubCrossroadsGuarded: {
    name: 'Grub Crossroads Guarded',
    img: PATHS.icons.grub,
    split: 'GrubCrossroadsGuarded',
  },
  GrubCrystalPeaksSpikes: {
    name: 'Grub Crystal Peak Spikes',
    img: PATHS.icons.grub,
    split: 'GrubCrystalPeaksSpikes',
  },
  GrubCrystalPeaksCrown: {
    name: 'Grub Crystal Peak Crown',
    img: PATHS.icons.grub,
    split: 'GrubCrystalPeaksCrown',
  },
  GrubCrystalPeaksCrystalHeart: {
    name: 'Grub Crystal Peak Crystal Heart',
    img: PATHS.icons.grub,
    split: 'GrubCrystalPeaksCrystalHeart',
  },
  GrubCrystalPeaksCrushers: {
    name: 'Grub Crystal Peak Crushers',
    img: PATHS.icons.grub,
    split: 'GrubCrystalPeaksCrushers',
  },
  GrubCrystalPeaksBottomLever: {
    name: 'Grub Crystal Peak Bottom Lever',
    img: PATHS.icons.grub,
    split: 'GrubCrystalPeaksBottomLever',
  },
  GrubCrystalPeaksMound: {
    name: 'Grub Crystal Peak Mound',
    img: PATHS.icons.grub,
    split: 'GrubCrystalPeaksMound',
  },
  GrubRestingGroundsCrypts: {
    name: 'Grub Resting Grounds Crypts',
    img: PATHS.icons.grub,
    split: 'GrubRestingGroundsCrypts',
  },
  GrubCityBelowSanctum: {
    name: 'Grub City Below Sanctum',
    img: PATHS.icons.grub,
    split: 'GrubCityBelowSanctum',
  },
  GrubWaterwaysCenter: {
    name: 'Grub Waterways Center',
    img: PATHS.icons.grub,
    split: 'GrubWaterwaysCenter',
  },
  GrubWaterwaysIsma: {
    name: 'Grub Waterways Isma',
    img: PATHS.icons.grub,
    split: 'GrubWaterwaysIsma',
  },
  GrubFungalBouncy: {
    name: 'Grub Fungal Bouncy',
    img: PATHS.icons.grub,
    split: 'GrubFungalBouncy',
  },
  GrubFungalSporeShroom: {
    name: 'Grub Fungal Spore Shroom',
    img: PATHS.icons.grub,
    split: 'GrubFungalSporeShroom',
  },
  GrubDeepnestMimics: {
    name: 'Grub Deepnest Mimics',
    img: PATHS.icons.grub,
    split: 'GrubDeepnestMimics',
  },
  GrubDeepnestNosk: {
    name: 'Grub Deepnest Nosk',
    img: PATHS.icons.grub,
    split: 'GrubDeepnestNosk',
  },
  GrubDeepnestSpikes: {
    name: 'Grub Deepnest Spikes',
    img: PATHS.icons.grub,
    split: 'GrubDeepnestSpikes',
  },
  GrubBasinDive: {
    name: 'Grub Basin Dive',
    img: PATHS.icons.grub,
    split: 'GrubBasinDive',
  },
  GrubBasinWings: {
    name: 'Grub Basin Wings',
    img: PATHS.icons.grub,
    split: 'GrubBasinWings',
  },
  GrubHiveInternal: {
    name: 'Grub Hive Internal',
    img: PATHS.icons.grub,
    split: 'GrubHiveInternal',
  },
  GrubWaterwaysHwurmps: {
    name: 'Grub Waterways Hwurmps',
    img: PATHS.icons.grub,
    split: 'GrubWaterwaysHwurmps',
  },
  GrubHiveExternal: {
    name: 'Grub Hive External',
    img: PATHS.icons.grub,
    split: 'GrubHiveExternal',
  },
  GrubKingdomsEdgeOro: {
    name: 'Grub Kingdom&apos;s Edge Oro',
    img: PATHS.icons.grub,
    split: 'GrubKingdomsEdgeOro',
  },
  GrubKingdomsEdgeCenter: {
    name: 'Grub Kingdom&apos;s Edge Center',
    img: PATHS.icons.grub,
    split: 'GrubKingdomsEdgeCenter',
  },
  GrubCityBelowLoveTower: {
    name: 'Grub City Below Love Tower',
    img: PATHS.icons.grub,
    split: 'GrubCityBelowLoveTower',
  },
  GrubCityGuardHouse: {
    name: 'Grub City Guard House',
    img: PATHS.icons.grub,
    split: 'GrubCityGuardHouse',
  },
  GrubCitySpire: {
    name: 'Grub City Spire',
    img: PATHS.icons.grub,
    split: 'GrubCitySpire',
  },
  GrubCrystalPeaksMimics: {
    name: 'Grub Crystal Peak Mimic',
    img: PATHS.icons.grub,
    split: 'GrubCrystalPeaksMimics',
  },
  GrubCrossroadsVengefly: {
    name: 'Grub Crossroads Vengefly',
    img: PATHS.icons.grub,
    split: 'GrubCrossroadsVengefly',
  },
  GrubCrossroadsAcid: {
    name: 'Grub Crossroads Acid',
    img: PATHS.icons.grub,
    split: 'GrubCrossroadsAcid',
  },
  GrubFogCanyonArchives: {
    name: 'Grub Fog Canyon Archives',
    img: PATHS.icons.grub,
    split: 'GrubFogCanyonArchives',
  },
  GrubDeepnestDark: {
    name: 'Grub Fog Canyon Archives',
    img: PATHS.icons.grub,
    split: 'GrubDeepnestDark',
  },
  GrubDeepnestBeastsDen: {
    name: 'Grub Deepnest Beast&apos;s Den',
    img: PATHS.icons.grub,
    split: 'GrubDeepnestBeastsDen',
  },
  GrubQueensGardensBelowStag: {
    name: 'Grub Queen&apos;s Gardens Below Stag',
    img: PATHS.icons.grub,
    split: 'GrubQueensGardensBelowStag',
  },
  GrubQueensGardensWhiteLady: {
    name: 'Grub Queen&apos;s Gardens White Lady',
    img: PATHS.icons.grub,
    split: 'GrubQueensGardensWhiteLady',
  },
  GrubQueensGardensUpper: {
    name: 'Grub Queen&apos;s Gardens Upper',
    img: PATHS.icons.grub,
    split: 'GrubQueensGardensUpper',
  },
  GrubCliffsBaldurShell: {
    name: 'Grub Cliffs Baldur Shell',
    img: PATHS.icons.grub,
    split: 'GrubCliffsBaldurShell',
  },
  GrubGreenpathHunter: {
    name: 'Grub Greenpath Hunter',
    img: PATHS.icons.grub,
    split: 'GrubGreenpathHunter',
  },
  GrubGreenpathCornifer: {
    name: 'Grub Greenpath Cornifer',
    img: PATHS.icons.grub,
    split: 'GrubGreenpathCornifer',
  },
  GrubGreenpathVesselFragment: {
    name: 'Grub Greenpath Vessel Fragment',
    img: PATHS.icons.grub,
    split: 'GrubGreenpathVesselFragment',
  },
  GrubCityCollectorAll: {
    name: 'Grub City Collector All',
    img: PATHS.icons.grub,
    split: 'GrubCityCollectorAll',
  },
  GrubberflysElegy: {
    name: 'Grubberfly&apos;s Elegy',
    img: PATHS.icons.elegy,
    split: 'GrubberflysElegy',
  },
}

export const CONFIG_RUN: SplitConfig = {
  elegy: {
    gameName: 'Hollow Knight Category Extensions',
    endTriggeringAutosplit: 'True',
    category: 'Elegy%',
  },
}

export const LIVE_SPLIT_CONFIG = {
  HEADER_BASE64:
    'AAEAAAD/////AQAAAAAAAAAMAgAAAFFTeXN0ZW0uRHJhd2luZywgVmVyc2lvbj00LjAuMC4wLCBDdWx0dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPWIwM2Y1ZjdmMTFkNTBhM2EFAQAAABVTeXN0ZW0uRHJhd2luZy5CaXRtYXABAAAABERhdGEHAgIAAAAJAwAAAA8DAAAAOw8A',
  ICON_PREFIX: new Uint8Array([0, 2]),
  TARGET_SIZE: 32,
}
