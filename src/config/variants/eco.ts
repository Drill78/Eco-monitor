// Eco variant - China ecological environment monitoring
import type { PanelConfig, MapLayers } from '@/types';
import type { VariantConfig } from './base';

// Re-export base config
export * from './base';

// Re-export feeds infrastructure
export {
  SOURCE_TIERS,
  getSourceTier,
  SOURCE_TYPES,
  getSourceType,
  getSourcePropagandaRisk,
  type SourceRiskProfile,
  type SourceType,
} from '../feeds';

// Eco-specific FEEDS configuration
import type { Feed } from '@/types';
import { rssProxyUrl } from '@/utils';

const rss = rssProxyUrl;

export const FEEDS: Record<string, Feed[]> = {
  official: [
    { name: '[ECO:权威] UNEP 联合国环境署', url: rss('https://www.unep.org/news-and-stories/rss.xml') },
    { name: '[ECO:权威] NASA Climate', url: rss('https://climate.nasa.gov/news/rss.xml') },
  ],
  media: [
    { name: '[ECO:媒体] Inside Climate News', url: rss('https://insideclimatenews.org/feed') },
    { name: '[ECO:媒体] Climate Home News', url: rss('https://climatechangenews.com/feed') },
  ],
  international: [
    { name: '[ECO:国际] Carbon Brief', url: rss('https://www.carbonbrief.org/feed') },
    { name: '[ECO:国际] The Guardian Environment', url: rss('https://www.theguardian.com/environment/rss') },
  ],
  cn_official: [
    { name: '[ECO:中国] 生态环境部 · 环境要闻', url: rss('https://rsshub.rssforever.com/gov/mee/ywdt/hjywnews') },
    { name: '[ECO:中国] 应急管理部 · 事故通报', url: rss('https://rsshub.rssforever.com/gov/mem/gk/sgcc/tbzdsgdcbg') },
  ],
  cn_media: [
    { name: '[ECO:中国] 澎湃 · 绿政公署', url: rss('https://rsshub.rssforever.com/thepaper/channel/25950') },
  ],
  cn_ecology: [
    { name: '[ECO:中国] China Dialogue 中文', url: rss('https://chinadialogue.net/zh/feed/') },
  ],
};

// Panel configuration for eco monitoring
export const DEFAULT_PANELS: Record<string, PanelConfig> = {
  map: { name: 'Eco Map', enabled: true, priority: 1 },
  official: { name: '[ECO] 官方通报', enabled: true, priority: 1 },
  media: { name: '[ECO] 媒体报道', enabled: true, priority: 1 },
  international: { name: '[ECO] 国际视角', enabled: true, priority: 1 },
  cn_official: { name: '[ECO] 中国官方', enabled: true, priority: 1 },
  cn_media: { name: '[ECO] 中国媒体', enabled: true, priority: 1 },
  cn_ecology: { name: '[ECO] 中国生态', enabled: true, priority: 1 },
  'bilibili-live': { name: '实时监控', enabled: true, priority: 1 },
};

// Eco-focused map layers — only weather, natural, fires, climate, outages enabled
export const DEFAULT_MAP_LAYERS: MapLayers = {
  weather: true,
  natural: true,
  fires: true,
  climate: true,
  outages: true,
  // All other layers disabled
  gpsJamming: false,
  satellites: false,
  conflicts: false,
  bases: false,
  cables: false,
  pipelines: false,
  hotspots: false,
  ais: false,
  nuclear: false,
  irradiators: false,
  sanctions: false,
  economic: false,
  waterways: false,
  cyberThreats: false,
  datacenters: false,
  protests: false,
  flights: false,
  military: false,
  spaceports: false,
  minerals: false,
  ucdpEvents: false,
  displacement: false,
  startupHubs: false,
  cloudRegions: false,
  accelerators: false,
  techHQs: false,
  techEvents: false,
  stockExchanges: false,
  financialCenters: false,
  centralBanks: false,
  commodityHubs: false,
  gulfInvestments: false,
  positiveEvents: false,
  kindness: false,
  happiness: false,
  speciesRecovery: false,
  renewableInstallations: false,
  tradeRoutes: false,
  iranAttacks: false,
  ciiChoropleth: false,
  dayNight: false,
  miningSites: false,
  processingPlants: false,
  commodityPorts: false,
  webcams: false,
  weatherRadar: false,
};

// Mobile defaults — same as desktop for eco variant
export const MOBILE_DEFAULT_MAP_LAYERS: MapLayers = { ...DEFAULT_MAP_LAYERS };

export const VARIANT_CONFIG: VariantConfig = {
  name: 'eco',
  description: '中国生态环境监测',
  panels: DEFAULT_PANELS,
  mapLayers: DEFAULT_MAP_LAYERS,
  mobileMapLayers: MOBILE_DEFAULT_MAP_LAYERS,
};
