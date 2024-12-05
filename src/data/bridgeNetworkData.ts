import type { BridgeNetwork } from "./types";

// TODO: FIX need to control chain naming here
export default [
  {
    id: 1,
    displayName: "Polygon PoS Bridge",
    bridgeDbName: "polygon",
    iconLink: "chain:polygon",
    largeTxThreshold: 10000,
    url: "https://portal.polygon.technology/",
    chains: ["Ethereum", "Polygon"],
    destinationChain: "Polygon",
  },
  {
    id: 2,
    displayName: "Arbitrum Bridge",
    bridgeDbName: "arbitrum",
    iconLink: "chain:arbitrum",
    largeTxThreshold: 10000,
    url: "https://bridge.arbitrum.io/",
    chains: ["Ethereum", "Arbitrum"],
    destinationChain: "Arbitrum",
  },
  {
    id: 3,
    displayName: "Avalanche Bridge",
    bridgeDbName: "avalanche",
    iconLink: "chain:avalanche",
    largeTxThreshold: 10000,
    url: "https://core.app/",
    chains: ["Ethereum", "Avalanche"],
    destinationChain: "Avalanche",
  },
  {
    id: 4,
    displayName: "Optimism Gateway",
    bridgeDbName: "optimism",
    iconLink: "chain:optimism",
    largeTxThreshold: 10000,
    url: "https://app.optimism.io/bridge/deposit",
    chains: ["Ethereum", "Optimism"],
    destinationChain: "Optimism",
  },

  // {
  //   id: 5,
  //   displayName: "Multichain",
  //   bridgeDbName: "multichain",
  //   iconLink: "icons:multichain",
  //   largeTxThreshold: 10000,
  //   url: "",
  //   chains: [
  //     "Ethereum",
  //     "Polygon",
  //     "Fantom",
  //     "Avalanche",
  //     "Arbitrum",
  //     "Optimism",
  //     // "Gnosis",
  //     // "Celo",
  //     "BSC",
  //   ],
  //   chainMapping: {
  //     avalanche: "avax", // this is needed temporarily, need to fix and remove
  //     gnosis: "xdai",
  //   },
  // },
  // {
  //   id: 6,
  //   displayName: "Poly Network",
  //   bridgeDbName: "polynetwork",
  //   iconLink: "icons:poly-network",
  //   largeTxThreshold: 10000,
  //   url: "",
  //   chains: [
  //     "Ethereum",
  //     "Polygon",
  //     "Fantom",
  //     "Avalanche",
  //     "Arbitrum",
  //     "Optimism",
  //     "Gnosis",
  //     // "Celo",
  //     "BSC",
  //   ],
  //   chainMapping: {
  //     avalanche: "avax",
  //     gnosis: "xdai",
  //   },
  // },
  // {
  //   id: 7,
  //   displayName: "Orbit Bridge",
  //   bridgeDbName: "orbitbridge",
  //   iconLink: "icons:orbit-bridge",
  //   largeTxThreshold: 10000,
  //   url: "",
  //   chains: [
  //     "Ethereum",
  //     "Polygon",
  //     "Fantom",
  //     "Avalanche",
  //     "Klaytn",
  //     "BSC",
  //     // "Celo" (disabled)
  //   ],
  //   chainMapping: {
  //     avalanche: "avax",
  //     gnosis: "xdai",
  //   },
  // },
  //  {
  //   id: 8,
  //  displayName: "ChainPort",
  //  bridgeDbName: "chainport",
  //  iconLink: "icons:chainport",
  // largeTxThreshold: 10000,
  //  url: "",
  // chains: ["Ethereum", "Polygon", "Fantom", "Avalanche", "Aurora", "BSC"],
  //  chainMapping: {
  //  avalanche: "avax",
  //  },
  // },

  {
    id: 10,
    displayName: "Celer cBridge",
    bridgeDbName: "celer",
    iconLink: "icons:cbridge",
    largeTxThreshold: 10000,
    url: "https://cbridge.celer.network/",
    chains: [
      "Ethereum",
      "Polygon",
      "Fantom",
      "Avalanche",
      "Arbitrum",
      "Optimism",
      // "Gnosis",
      // "Aurora",
      // "Celo",
      // "Klaytn",
      "BSC",
      "Manta",
      "Base",
      "ZKsync Era",
      "Polygon zkEVM",
      "Linea",
      "Scroll",
      "Moonbeam",
      "Flow",
    ],
    chainMapping: {
      avalanche: "avax",
      gnosis: "xdai",
      "zksync era": "era",
      "polygon zkevm": "polygon_zkevm",
    },
  },
  {
    id: 11,
    displayName: "Synapse",
    bridgeDbName: "synapse",
    iconLink: "icons:synapse",
    largeTxThreshold: 10000,
    url: "https://synapseprotocol.com/",
    chains: [
      "Ethereum",
      "Polygon",
      "Fantom",
      "Avalanche",
      "Arbitrum",
      "Optimism",
      "Aurora",
      // "Klaytn",
      "BSC",
      "Metis",
      "Moonbeam",
      "Moonriver",
      "Base",
      "Blast",
      "Scroll",
      "Linea",
      // "Harmony",
      // "Dogechain",
      // "DFK Chain",
      // "Cronos",
      // "Canto",
      // "Boba",
    ],
    chainMapping: {
      avalanche: "avax",
    },
  },
  {
    id: 12,
    displayName: "Stargate",
    bridgeDbName: "stargate",
    iconLink: "icons:stargate",
    largeTxThreshold: 10000,
    url: "https://stargate.finance/",
    chains: [
      "Ethereum",
      "Polygon",
      "Fantom",
      "Avalanche",
      "Arbitrum",
      "Optimism",
      "BSC",
      "Aurora",
      "Base",
      "Kava",
      "Klaytn",
      "Linea",
      "Metis",
      "Linea",
      "Mantle",
      "Scroll",
    ],
    chainMapping: {
      avalanche: "avax", // this is needed temporarily, need to fix and remove
    },
  },
  {
    id: 13,
    displayName: "Hop",
    bridgeDbName: "hop",
    iconLink: "icons:hop-protocol",
    largeTxThreshold: 10000,
    url: "https://hop.exchange/",
    chains: ["Ethereum", "Polygon", "Arbitrum", "Optimism", "Gnosis", "Base", "Arbitrum Nova", "Polygon zkEVM"],
    chainMapping: {
      gnosis: "xdai", // this is needed temporarily, need to fix and remove
      "arbitrum nova": "arbitrum_nova",
      "polygon zkevm": "polygon_zkevm",
    },
  },
  /* breaking running adapters, disable temporarily
  {
    id: 14,
    displayName: "Binance-Peg Tokens",
    bridgeDbName: "binancepeg",
    iconLink: "chain:bsc",
    largeTxThreshold: 10000,
    url: "",
    chains: ["BSC"],
    destinationChain: "-",
  },
  */
  {
    id: 15,
    displayName: "Core Bitcoin Bridge",
    bridgeDbName: "avalanche-c",
    iconLink: "chain:avalanche",
    largeTxThreshold: 10000,
    url: "https://core.app/",
    chains: ["Avalanche", "Bitcoin"],
    destinationChain: "Bitcoin", // not sure the effect this will have, need to double-check everything works
    chainMapping: {
      avalanche: "avax", // this is needed temporarily, need to fix and remove
    },
  },
  {
    id: 16,
    displayName: "Gnosis Bridge",
    bridgeDbName: "xdai",
    iconLink: "chain:xdai",
    largeTxThreshold: 10000,
    url: "https://bridge.gnosischain.com/",
    chains: ["Ethereum", "Gnosis"],
    // destinationChain: "Gnosis",
    chainMapping: {
      gnosis: "xdai", // this is needed temporarily, need to fix and remove
    },
  },
  // {
  //   id: 17,
  //   displayName: "Axelar",
  //   bridgeDbName: "axelar",
  //   iconLink: "icons:axelar",
  //   largeTxThreshold: 10000,
  //   url: "",
  //   chains: ["Ethereum", "Polygon", "Avalanche", "BSC", "Fantom", "Arbitrum"],
  //   chainMapping: {
  //     avalanche: "avax", // this is needed temporarily, need to fix and remove
  //   },
  // },
  {
    id: 18,
    displayName: "Rainbow Bridge",
    bridgeDbName: "rainbowbridge",
    iconLink: "chain:aurora",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "Aurora"],
    destinationChain: "Aurora",
  },
  {
    id: 19,
    displayName: "Across",
    bridgeDbName: "across",
    iconLink: "icons:across",
    largeTxThreshold: 10000,
    url: "https://across.to/",
    chains: ["Ethereum", "Polygon", "Optimism", "ZKsync Era", "Base", "Arbitrum", "Linea", "Mode", "Blast", "Scroll"],
    chainMapping: {
      "zksync era": "era",
    },
  },

  {
    id: 20,
    displayName: "deBridge",
    bridgeDbName: "debridgedln",
    iconLink: "icons:debridge",
    largeTxThreshold: 10000,
    url: "https://debridge.finance/",
    chains: ["Ethereum", "Polygon", "Arbitrum", "Avalanche", "BSC", "Fantom", "Optimism", "Linea", "Base", "Solana"],
    chainMapping: {
      avalanche: "avax", // this is needed temporarily, need to fix and remove
    },
  },

  // {
  //   id: 21,
  //   displayName: "Optics",
  //   bridgeDbName: "optics",
  //   iconLink: "chain:celo",
  //   largeTxThreshold: 10000,
  //   url: "",
  //   chains: ["Ethereum", "Polygon", "Celo"],
  // },
  {
    id: 22,
    displayName: "Allbridge Classic",
    bridgeDbName: "allbridge",
    iconLink: "icons:allbridge",
    largeTxThreshold: 10000,
    url: "https://app.allbridge.io/bridge",
    chains: ["Ethereum", "BSC", "Avalanche", "Fantom", "Polygon"],
    chainMapping: {
      avalanche: "avax", // this is needed temporarily, need to fix and remove
    },
  },

  {
    id: 23,
    displayName: "Polygon zkEVM Bridge",
    bridgeDbName: "polygon_zkevm",
    iconLink: "chain:polygon zkevm",
    largeTxThreshold: 10000,
    url: "https://portal.polygon.technology/",
    chainMapping: { "polygon zkevm": "polygon_zkevm" },
    chains: ["Ethereum", "Polygon zkEVM"],
    destinationChain: "Polygon zkEVM",
  },
  {
    id: 24,
    displayName: "IBC",
    bridgeDbName: "ibc",
    iconLink: "icons:ibc",
    largeTxThreshold: 10000,
    url: "https://mapofzones.com/",
    chains: [
      "agoric",
      "akash",
      "andromeda",
      "archway",
      "assetmantle",
      "aura network",
      "axelar",
      "band",
      "bitcanna",
      "bitsong",
      "bluzelle",
      "bostrom",
      "canto",
      "carbon",
      "celestia",
      "cheqd",
      "chihuahua",
      "comdex",
      "composable",
      "coreum",
      "cosmos hub",
      "crescent network",
      "cronos pos chain",
      "cudos",
      "decentr",
      "desmos",
      "dydx protocol",
      "dymension hub",
      "echelon",
      "e-money",
      "empowerchain",
      "evmos",
      "fetch.ai",
      "firmachain",
      "function x",
      "gitopia",
      "gravity bridge",
      "haqq network",
      "impacthub",
      "injective",
      "iris",
      "jackal",
      "juno",
      "kava",
      "kichain",
      "konstellation",
      "kujira",
      "kyve",
      "likecoin",
      "lum network",
      "mars",
      "medibloc",
      "migaloo",
      "neutron",
      "noble",
      "nois",
      "nolus",
      "nym",
      "omniflix",
      "onomy",
      "oraichain",
      "osmosis",
      "passage",
      "persistence",
      "planq",
      "provenance",
      "quasar",
      "quicksilver",
      "qwoyn",
      "realio network",
      "regen",
      "rizon",
      "saga",
      "scorum network",
      "secret",
      "sei",
      "sentinel",
      "sge",
      "shentu",
      "sifchain",
      "sommelier",
      "source",
      "stargaze",
      "starname",
      "stride",
      "teritori",
      "terra",
      "terra classic",
      "uptick",
      "ux chain",
      "vidulum",
      "xpla",
    ],
    chainMapping: {
      agoric: "agoric-3",
      akash: "akashnet-2",
      andromeda: "andromeda-1",
      archway: "archway-1",
      assetmantle: "mantle-1",
      "aura network": "xstaxy-1",
      axelar: "axelar-dojo-1",
      band: "laozi-mainnet",
      bitcanna: "bitcanna-1",
      bitsong: "bitsong-2b",
      bluzelle: "bluzelle-9",
      bostrom: "bostrom",
      canto: "canto_7700-1",
      carbon: "carbon-1",
      celestia: "celestia",
      cheqd: "cheqd-mainnet-1",
      chihuahua: "chihuahua-1",
      comdex: "comdex-1",
      composable: "centauri-1",
      coreum: "coreum-mainnet-1",
      "cosmos hub": "cosmoshub-4",
      "crescent network": "crescent-1",
      "cronos pos chain": "crypto-org-chain-mainnet-1",
      cudos: "cudos-1",
      decentr: "mainnet-3",
      desmos: "desmos-mainnet",
      "dydx protocol": "dydx-mainnet-1",
      "dymension hub": "dymension_1100-1",
      echelon: "echelon_3000-3",
      "e-money": "emoney-3",
      empowerchain: "empowerchain-1",
      evmos: "evmos_9001-2",
      "fetch.ai": "fetchhub-4",
      firmachain: "colosseum-1",
      "function x": "fxcore",
      gitopia: "gitopia",
      "gravity bridge": "gravity-bridge-3",
      "haqq network": "haqq_11235-1",
      impacthub: "ixo-5",
      injective: "injective-1",
      iris: "irishub-1",
      jackal: "jackal-1",
      juno: "juno-1",
      kava: "kava_2222-10",
      kichain: "kichain-2",
      konstellation: "darchub",
      kujira: "kaiyo-1",
      kyve: "kyve-1",
      likecoin: "likecoin-mainnet-2",
      "lum network": "lum-network-1",
      mars: "mars-1",
      medibloc: "panacea-3",
      migaloo: "migaloo-1",
      neutron: "neutron-1",
      noble: "noble-1",
      nois: "nois-1",
      nolus: "pirin-1",
      nym: "nyx",
      omniflix: "omniflixhub-1",
      onomy: "onomy-mainnet-1",
      oraichain: "Oraichain",
      osmosis: "osmosis-1",
      passage: "passage-2",
      persistence: "core-1",
      planq: "planq_7070-2",
      provenance: "pio-mainnet-1",
      quasar: "quasar-1",
      quicksilver: "quicksilver-2",
      qwoyn: "qwoyn-1",
      "realio network": "realionetwork_3301-1",
      regen: "regen-1",
      rizon: "titan-1",
      saga: "ssc-1",
      "scorum network": "scorum-1",
      secret: "secret-4",
      sei: "pacific-1",
      sentinel: "sentinelhub-2",
      sge: "sgenet-1",
      shentu: "shentu-2.2",
      sifchain: "sifchain-1",
      sommelier: "sommelier-3",
      source: "source-1",
      stargaze: "stargaze-1",
      starname: "iov-mainnet-ibc",
      stride: "stride-1",
      teritori: "teritori-1",
      terra: "phoenix-1",
      "terra classic": "columbus-5",
      uptick: "uptick_117-1",
      "ux chain": "umee-1",
      vidulum: "vidulum-1",
      xpla: "dimension_37-1",
    },
  },
  // {
  //   id: 24,
  //   displayName: "Meter Passport",
  //   bridgeDbName: "meter",
  //   iconLink: "icons:meter-passport",
  //   largeTxThreshold: 10000,
  //   url: "",
  //   chains: ["Ethereum", "BSC"],
  // },
  // {
  //   id: 25,
  //   displayName: "Beamer Bridge",
  //   bridgeDbName: "beamer",
  //   iconLink: "",
  //   largeTxThreshold: 10000,
  //   url: "",
  //   chains: ["Ethereum", "Arbitrum", "Optimism"]
  // },
  {
    id: 26,
    displayName: "ZKsync Era Bridge",
    bridgeDbName: "zksync",
    iconLink: "chain:zksync era",
    largeTxThreshold: 10000,
    url: "https://portal.zksync.io/bridge/",
    chains: ["Ethereum", "ZKsync Era"],
    destinationChain: "ZKsync Era",
  },
  {
    id: 27,
    displayName: "Symbiosis",
    bridgeDbName: "symbiosis",
    iconLink: "icons:symbiosis",
    largeTxThreshold: 10000,
    url: "https://symbiosis.finance/",
    chains: [
      "Ethereum",
      "BSC",
      "Avalanche",
      "Polygon",
      "Telos",
      "Kava",
      "Boba",
      "Boba BNB",
      "ZKsync Era",
      "Arbitrum",
      "Arbitrum Nova",
      "Optimism",
      "Polygon zkEVM",
      "Linea",
      "Base",
      "Mantle",
      "Metis",
      "Mode",
      "Rootstock",
      "Blast",
      "Scroll",
      "ZKLink",
    ],
    chainMapping: {
      avalanche: "avax", // this is needed temporarily, need to fix and remove
      "boba bnb": "boba_bnb",
      "zksync era": "era",
      "arbitrum nova": "arbitrum_nova",
      "polygon zkevm": "polygon_zkevm",
      rootstock: "rsk",
    },
  },
  {
    id: 28,
    displayName: "Meson",
    bridgeDbName: "meson",
    iconLink: "icons:meson",
    largeTxThreshold: 10000,
    url: "https://meson.fi/",
    chains: [
      "Ethereum",
      "Polygon",
      "Fantom",
      "Avalanche",
      "Arbitrum",
      "Optimism",
      "Aurora",
      "BSC",
      "ZKsync Era",
      "Kava",
      "Moonbeam",
      "Moonriver",
      "Cronos",
      "Polygon zkEVM",
      "Linea",
      "Base",
      "Metis",
      "Manta",
      "Mantle",
      "Scroll",
      "Celo",
      "Gnosis",
      "Merlin",
      "Zkfair",
      "BSquared",
      "BTR",
    ],
    chainMapping: {
      avalanche: "avax",
      "zksync era": "era",
      "polygon zkevm": "polygon_zkevm",
      gnosis: "xdai",
      bsquared: "b2-mainnet",
    },
  },
  {
    id: 29,
    displayName: "Base Bridge",
    bridgeDbName: "base",
    iconLink: "chain:base",
    largeTxThreshold: 10000,
    url: "https://bridge.base.org/deposit",
    chains: ["Ethereum", "Base"],
    destinationChain: "Base",
  },
  {
    id: 30,
    displayName: "Mantle Bridge",
    bridgeDbName: "mantle",
    iconLink: "chain:mantle",
    largeTxThreshold: 10000,
    url: "https://bridge.mantle.xyz/",
    chains: ["Ethereum", "Mantle"],
    destinationChain: "Mantle",
  },
  {
    id: 34,
    displayName: "Satellite (Powered by Axelar)",
    bridgeDbName: "axelarsatellite",
    iconLink: "icons:axelar",
    largeTxThreshold: 10000,
    url: "https://axelar.network/",
    chains: [
      "Ethereum",
      "BSC",
      "Polygon",
      "Avalanche",
      "Fantom",
      "Arbitrum",
      "Optimism",
      "Base",
      "Linea",
      "Moonbeam",
      "Celo",
      "Kava",
      "Filecoin",
      "Mantle",
    ],
    chainMapping: {
      avalanche: "avax",
    },
  },
  {
    id: 37,
    displayName: "Manta Pacific Bridge",
    bridgeDbName: "manta",
    iconLink: "icons:manta-pacific-bridge",
    largeTxThreshold: 10000,
    url: "https://pacific-bridge.manta.network/",
    chains: ["Ethereum", "Manta"],
    destinationChain: "Manta",
  },

  // {
  //   id: 31,
  //   displayName: "neuron🧠",
  //   bridgeDbName: "neuron",
  //   iconLink: "protocols:neuron",
  //   largeTxThreshold: 10000,
  //   url: "",
  //   chains: ["Arbitrum", "Linea", "Optimism", "Base"],
  // },
  {
    id: 32,
    displayName: "Squid (Powered by Axelar)",
    bridgeDbName: "squidrouter",
    iconLink: "icons:squid",
    largeTxThreshold: 10000,
    url: "https://www.squidrouter.com/",
    chains: [
      "Ethereum",
      "Polygon",
      "Avalanche",
      "BSC",
      "Fantom",
      "Arbitrum",
      "Base",
      "Linea",
      "Celo",
      "Moonbeam",
      "Kava",
      "Optimism",
      "Mantle",
      "Scroll",
      "Blast",
      "Fraxtal",
    ],
    chainMapping: {
      avalanche: "avax",
      // Add any other necessary mappings here
    },
  },
  {
    id: 35,
    displayName: "Eywa",
    bridgeDbName: "eywa",
    iconLink: "icons:eywa",
    largeTxThreshold: 10000,
    url: "https://crosscurve.fi/",
    chains: [
      "Ethereum",
      "Polygon",
      "Fantom",
      "Avalanche",
      "Arbitrum",
      "Optimism",
      "BSC",
      "Base",
      "Gnosis",
      "Blast",
      "Linea",
      "Mantle",
      "Taiko",
      "Celo",
      "Kava",
      "Fraxtal",
    ],
    chainMapping: {
      avalanche: "avax",
      gnosis: "xdai",
    },
  },
  {
    id: 39,
    displayName: "rhino.fi",
    bridgeDbName: "rhinofi",
    iconLink: "icons:rhino.fi",
    largeTxThreshold: 10000,
    url: "https://app.rhino.fi/bridge",
    chains: [
      "Arbitrum",
      "Arbitrum Nova",
      "BSC",
      "Polygon",
      "Optimism",
      "Base",
      "ZKsync Era",
      "Polygon zkEVM",
      "Linea",
      "Manta",
      "opBNB",
      "Scroll",
      "Avalanche",
      "Solana",
      "Mantle",
      "Mode",
      "Blast",
      "X Layer",
      "Taiko",
    ],
    chainMapping: {
      "arbitrum nova": "arbitrum_nova",
      "zksync era": "era",
      "polygon zkevm": "polygon_zkevm",
      opbnb: "op_bnb",
      avalanche: "avax",
      "x layer": "xlayer",
    },
  },
  {
    id: 41,
    displayName: "WanBridge",
    bridgeDbName: "wanbridge",
    iconLink: "icons:wanbridge",
    largeTxThreshold: 10000,
    url: "https://bridge.wanchain.org",
    chains: [
      "Bitcoin",
      "Ethereum",
      "Polygon",
      "Fantom",
      "Optimism",
      "Moonbeam",
      "Moonriver",
      "Telos",
      "Metis",
      // "Astar",
      "Vinuchain",
      "XDC",
      "Arbitrum",
      "BSC",
      "Gather",

      "Avalanche",
      "FunctionX",

      // "Okexchain",
      // "Horizen",
      // "Tron",
      // "Clover",
      "Wanchain",
    ],
    chainMapping: {
      wanchain: "wan",
      avalanche: "avax",
      vinuchain: "vinu",
      clover: "clv",
      gather: "gth",
    },
  },
  {
    id: 42,
    displayName: "pNetwork",
    bridgeDbName: "pnetwork",
    iconLink: "icons:pnetwork",
    largeTxThreshold: 10000,
    url: "https://p.network",
    chains: ["Ethereum", "BSC"],
  },
  // {
  //   id: 43,
  //   displayName: "PepeTeam Bridge",
  //   bridgeDbName: "pepeteam_bridge",
  //   iconLink: "protocols:pepeteam-bridge",
  //   largeTxThreshold: 10000,
  //   url: "https://bridge.pepe.team",
  //   chains: ["Ethereum", "BSC", "Polygon"],
  //   destinationChain: "Waves",
  // },
  {
    id: 44,
    displayName: "Interport Finance",
    bridgeDbName: "interport",
    iconLink: "icons:interport-finance",
    largeTxThreshold: 10000,
    url: "https://app.interport.fi",
    chains: [
      "Ethereum",
      "Arbitrum",
      "BSC",
      "ZKsync Era",
      "Base",
      "Scroll",
      "Linea",
      "Polygon",
      "Polygon zkEVM",
      "Optimism",
      "opBNB",
      "Avalanche",
      "EON",
      "Fantom",
    ],
    chainMapping: {
      "zksync era": "era",
      "polygon zkevm": "polygon_zkevm",
      avalanche: "avax",
      opbnb: "op_bnb",
    },
  },
  {
    id: 45,
    displayName: "Shimmer Bridge",
    bridgeDbName: "shimmerbridge",
    iconLink: "chain:shimmerevm",
    largeTxThreshold: 10000,
    url: "https://shimmerbridge.org/bridge",
    chains: ["Ethereum", "BSC", "Polygon", "Avalanche", "Arbitrum", "Optimism", "Base", "Fantom", "ShimmerEVM"],
    chainMapping: {
      avalanche: "avax", // this is needed temporarily, need to fix and remove
    },
    destinationChain: "ShimmerEVM",
  },
  {
    id: 46,
    displayName: "yBridge by xSync Network",
    bridgeDbName: "xy",
    iconLink: "protocols:xy-finance",
    largeTxThreshold: 10000,
    url: "https://app.xy.finance",
    chains: [
      "Ethereum",
      "Scroll",
      "Mantle",
      "Linea",
      "Base",
      "Arbitrum",
      "ZKsync Era",
      "BSC",
      "Polygon",
      "Klaytn",
      "Polygon zkEVM",
      "Avalanche",
      "Optimism",
      "Cronos",
      "Fantom",
      "Astar",
      "KCC",
      "Moonriver",
      "ThunderCore",
      "Blast",
      "X Layer",
      // "Numbers",
      "Taiko",
      "Cronos zkEVM",
    ],
    chainMapping: {
      "zksync era": "era",
      "polygon zkevm": "polygon_zkevm",
      avalanche: "avax",
      "x layer": "xlayer",
      "cronos zkevm": "cronos_zkevm",
    },
  },
  // {
  //   id: 47,
  //   displayName: "Butter Network",
  //   bridgeDbName: "butternetwork",
  //   iconLink: "icons:butternetwork",
  //   largeTxThreshold: 10000,
  //   url: "",
  //   chains: ["Ethereum", "Polygon", "BSC", "MAP Relay Chain"],
  //   chainMapping: {
  //     "map relay chain": "map",
  //   },
  //   destinationChain: "MAP Relay Chain",
  // },

  {
    id: 48,
    displayName: "Rootstock Powpeg Bridge",
    bridgeDbName: "rootstock",
    iconLink: "chain:rootstock",
    largeTxThreshold: 10000,
    url: "https://rootstock.io/",
    chains: ["Rootstock", "Bitcoin"],
    chainMapping: {
      rootstock: "rsk",
    },
    destinationChain: "Bitcoin",
  },
  {
    id: 49,
    displayName: "Garden",
    bridgeDbName: "garden",
    iconLink: "protocols:garden",
    largeTxThreshold: 10000,
    url: "https://garden.finance",
    chains: ["Ethereum", "Arbitrum", "Bitcoin"],
    destinationChain: "Bitcoin",
  },
  {
    id: 50,
    displayName: "Mode Network",
    bridgeDbName: "mode",
    iconLink: "chain:mode",
    largeTxThreshold: 10000,
    url: "https://app.mode.network/",
    chains: ["Ethereum", "Mode"],
    destinationChain: "Mode",
  },
  {
    id: 51,
    displayName: "Circle CCTP",
    bridgeDbName: "circle",
    iconLink: "protocols:circle_cctp",
    largeTxThreshold: 10000,
    url: "https://www.circle.com/en/cross-chain-transfer-protocol",
    chains: ["Ethereum", "Optimism", "Polygon", "Base", "Arbitrum", "Avalanche"],
    chainMapping: {
      avalanche: "avax",
    },
  },

  {
    id: 53,
    displayName: "Rootstock Token Bridge",
    bridgeDbName: "tokenbridge",
    iconLink: "chain:rootstock",
    largeTxThreshold: 10000,
    url: "https://tokenbridge.rsk.co/",
    chains: ["Rootstock", "Ethereum"],
    chainMapping: {
      rootstock: "rsk",
    },
    destinationChain: "Ethereum",
  },
  {
    id: 54,
    displayName: "Nitro (by Router Protocol)",
    bridgeDbName: "router",
    iconLink: "protocols:nitro",
    url: "https://www.routerprotocol.com/",
    largeTxThreshold: 10000,
    chains: [
      "Ethereum",
      "Arbitrum",
      "Optimism",
      "Base",
      "Polygon",
      "Linea",
      // "Blast",
      // "Arbitrum Nova",
      "Scroll",
      "ZKsync Era",
      // "Manta",
      "Mantle",
      // "Rootstock",
      "Scroll",
    ],
    chainMapping: {
      "arbitrum nova": "arbitrum_nova",
      "zksync era": "era",
      "polygon zkevm": "polygon_zkevm",
    },
  },
  {
    id: 55,
    displayName: "Fuse Bridge",
    bridgeDbName: "fuse",
    iconLink: "chain:fuse",
    largeTxThreshold: 10000,
    url: "https://console.fuse.io/bridge",
    chains: ["Ethereum", "BSC", "Polygon", "Arbitrum", "Optimism", "Fuse"],
    destinationChain: "Fuse",
  },
  {
    id: 56,
    displayName: "MES Protocol",
    bridgeDbName: "mesprotocol",
    iconLink: "icons:mes-protocol",
    url: "https://www.mesprotocol.com/",
    largeTxThreshold: 10000,
    chains: ["Ethereum", "Arbitrum", "Optimism", "Manta", "ZKsync Era", "Base", "Linea"],
    chainMapping: {
      "zksync era": "era",
    },
  },
  // {
  //   id: 57,
  //   displayName: "Butter Swap",
  //   bridgeDbName: "butterswap",
  //   iconLink: "protocols:butter-swap",
  //   largeTxThreshold: 10000,
  //   url: "https://www.butterswap.io/swap",
  //   chains: ["Ethereum", "Polygon", "BSC", "MAP Relay Chain"],
  //   chainMapping: {
  //     "map relay chain": "map",
  //   },
  //   destinationChain: "MAP Relay Chain",
  // },
  {
    id: 58,
    displayName: "Orbiter Finance",
    bridgeDbName: "orbiter",
    iconLink: "icons:orbiter",
    url: "https://www.orbiter.finance/?utm_source=defillama",
    largeTxThreshold: 10000,
    chains: [
      "Ethereum",
      "Arbitrum",
      "Optimism",
      "Base",
      "Polygon",
      "Linea",
      "Blast",
      "Arbitrum Nova",
      "Scroll",
      "ZKsync Era",
      "Polygon zkEVM",
      "Merlin",
      "Bitlayer",
      "ZkLink",
      "BSC",
      "Taiko",
      "Mantle",
      // "Zkfair",
      // "BSquared",
      // "Bouncebit",
      // "X Layer",
      // "opBNB",
      // "Mode",
      // "Manta",
    ],
    chainMapping: {
      "arbitrum nova": "arbitrum_nova",
      "zksync era": "era",
      "polygon zkevm": "polygon_zkevm",
      bitlayer: "btr",
      // bsquared: "b2-mainnet",
      // "x layer": "xlayer",
      // bouncebit: "bouncebit-mainnet",
      // opbnb: "op_bnb",
    },
  },
  {
    id: 59,
    displayName: "Connext",
    bridgeDbName: "connext",
    iconLink: "icons:connext",
    url: "https://connext.network",
    largeTxThreshold: 10000,
    chains: ["Ethereum", "Optimism", "Polygon", "Arbitrum", "BSC", "Gnosis", "Linea", "Base", "Metis", "Mode"],
    chainMapping: {
      gnosis: "xdai",
    },
  },
  {
    id: 60,
    displayName: "Allbridge Core",
    bridgeDbName: "allbridge-core",
    iconLink: "icons:allbridge-core",
    largeTxThreshold: 10000,
    url: "https://core.allbridge.io/",
    chains: ["Arbitrum", "Avalanche", "BSC", "Base", "Ethereum", "Optimism", "Polygon", "Solana"],
    chainMapping: {
      avalanche: "avax",
    },
  },
  {
    id: 61,
    displayName: "XSwap",
    bridgeDbName: "xswap",
    iconLink: "icons:xswap",
    largeTxThreshold: 10000,
    url: "https://xswap.link/",
    chains: ["Ethereum", "Polygon", "Avalanche", "Arbitrum", "Optimism", "Base"],
    chainMapping: {
      avalanche: "avax",
    },
  },

  {
    id: 62,
    displayName: "Owlto",
    bridgeDbName: "owlto",
    iconLink: "icons:owlto",
    largeTxThreshold: 10000,
    url: "https://owlto.finance",
    chains: [
      "Ethereum",
      "Arbitrum",
      "Optimism",
      "Base",
      "Polygon",
      "Linea",
      "Blast",
      "Arbitrum Nova",
      "Scroll",
      "BSC",
      "Mode",
      "Manta",
      "Metis",
      "Mantle",
      "Zkfair",
      "Merlin",
      "BSquared",
      "Bitlayer",
      "X Layer",
      "Taiko",
      "ZkLink",
      "Bouncebit",
      "opBNB",
      "Mint",

      "ZKsync Era",
      "Polygon zkEVM",
    ],
    chainMapping: {
      "arbitrum nova": "arbitrum_nova",
      "zksync era": "era",
      "polygon zkevm": "polygon_zkevm",
      bsquared: "b2-mainnet",
      "x layer": "xlayer",
      bouncebit: "bouncebit-mainnet",
      opbnb: "op_bnb",
      bitlayer: "btr",
    },
  },
  {
    id: 9999,
    displayName: "zkBridge",
    bridgeDbName: "zkbridge111",
    iconLink: "icons:zkbridge",
    largeTxThreshold: 10000,
    url: "https://www.zkbridge.com/token",
    chains: [
      "Ethereum",
      "BSC",
      "Polygon",
      "Optimism",
      "Arbitrum",
      "Linea",
      "Mantle",
      "Base",
      "Scroll",
      "opBNB",
      "Combo",
      "Bouncebit",
      "Bitlayer",
    ],
    chainMapping: {
      combo: "combo-mainnet",
      bouncebit: "bouncebit-mainnet",
      opbnb: "op_bnb",
      bitlayer: "btr",
    },
  },
  {
    id: 64,
    displayName: "Helixbox",
    bridgeDbName: "helixbridge",
    iconLink: "icons:helixbridge",
    largeTxThreshold: 10000,
    url: "https://helix.box",
    chains: [
      "Arbitrum",
      "Darwinia",
      "Polygon",
      "BSC",
      "Linea",
      "Mantle",
      "Scroll",
      "Optimism",
      "Gnosis",
      "Blast",
      "Moonbeam",
      "Base",
      "Avalanche",
      "Morph",
    ],
    chainMapping: {
      gnosis: "xdai",
      avalanche: "avax",
    },
  },
  {
    id: 65,
    displayName: "MeMeBridge",
    bridgeDbName: "memebridge",
    iconLink: "icons:memebridge",
    largeTxThreshold: 10000,
    url: "https://memebridge.xyz/#/bridge?utm_source=defillama",
    chains: [
      "Ethereum",
      "Arbitrum",
      "Optimism",
      "Base",
      "Linea",
      "Blast",
      "Scroll",
      "BSC",
      "X Layer",
      "Taiko",
      "ZkLink",
      "opBNB",
      "Polygon",
      "ZKsync Era",
      "Polygon zkEVM",
    ],
    chainMapping: {
      "zksync era": "era",
      "polygon zkevm": "polygon_zkevm",
      "x layer": "xlayer",
      opbnb: "op_bnb",
      bitlayer: "btr",
    },
  },
  {
    id: 66,
    displayName: "oooo",
    bridgeDbName: "oooo",
    iconLink: "icons:oooo",
    largeTxThreshold: 10000,
    url: "https://oooo.money",
    chains: [
      "Arbitrum",
      "BSC",
      "Merlin",
      "BSquared",
      "Bitlayer",
      "Rootstock",
      "Scroll",
      "zkSync Era",
      "ZkLink",
      "Linea",
      "Blast",
      "Base",
      "Optimism",
      "Polygon",
      "Taiko",
      "Fantom",
      "Ethereum",
      "X Layer",
    ],
    chainMapping: {
      bsquared: "b2-mainnet",
      bitlayer: "btr",
      rootstock: "rsk",
      "zksync era": "era",
      "x layer": "xlayer",
    },
  },
  {
    id: 67,
    displayName: "Bunnyfi",
    bridgeDbName: "bunnyfi",
    iconLink: "icons:bunnyfi",
    largeTxThreshold: 10000,
    url: "https://bunnyfi.network",
    chains: [
      "Ethereum",
      "Arbitrum",
      "Optimism",
      "Base",
      "Linea",
      "Blast",
      "Scroll",
      "BSC",
      "Mode",
      "Manta",
      "Zkfair",
      "Merlin",
      "BSquared",
      "Bitlayer",
      "X Layer",
      "Taiko",
      "ZkLink",
      "ZKsync Era",
      "Polygon zkEVM",
    ],
    chainMapping: {
      "zksync era": "era",
      "polygon zkevm": "polygon_zkevm",
      bsquared: "b2-mainnet",
      "x layer": "xlayer",
      bitlayer: "btr",
    },
  },
  {
    id: 68,
    displayName: "MiniBridge",
    bridgeDbName: "minibridge",
    iconLink: "icons:minibridge",
    largeTxThreshold: 10000,
    url: "https://minibridge.chaineye.tools/",
    chains: [
      "Ethereum",
      "Arbitrum",
      "Optimism",
      "Base",
      "Polygon",
      "Linea",
      "Blast",
      "Avalanche",
      "Scroll",
      "BSC",
      "Mode",
      "Manta",
      "Metis",
      "Mantle",
      "Zkfair",
      "Merlin",
      "BSquared",
      "Bitlayer",
      "X Layer",
      "Taiko",
      "ZkLink",
      "opBNB",
      "Telos",
      "ZKsync Era",
      "Polygon zkEVM",
    ],
    chainMapping: {
      "zksync era": "era",
      "polygon zkevm": "polygon_zkevm",
      "x layer": "xlayer",
      opbnb: "op_bnb",
      bitlayer: "btr",
    },
  },
  {
    id: 69,
    displayName: "CometBridge",
    bridgeDbName: "cometbridge",
    iconLink: "icons:comet",
    largeTxThreshold: 10000,
    url: "https://cometbridge.app",
    chains: [
      "Ethereum",
      "Arbitrum",
      "Optimism",
      "Base",
      "Linea",
      "Blast",
      "Scroll",
      "BSC",
      "X Layer",
      "Taiko",
      "ZkLink",
      "ZKsync Era",
      "Merlin",
      "BSquared",
      "Bitlayer",
      "Mode",
      "Manta",
    ],
    chainMapping: {
      "zksync era": "era",
      "x layer": "xlayer",
    },
  },
  {
    id: 70,
    displayName: "FastBTC",
    bridgeDbName: "fastbtc",
    iconLink: "icons:sovryn",
    largeTxThreshold: 10000,
    url: "https://sovryn.com/",
    chains: ["Rootstock", "Bitcoin"],
    chainMapping: {
      rootstock: "rsk",
    },
    destinationChain: "Bitcoin",
  },
  {
    id: 71,
    displayName: "Crowdswap",
    bridgeDbName: "crowdswap",
    iconLink: "icons:crowdswap",
    largeTxThreshold: 10000,
    url: "https://scanner.crowdswap.org/",
    chains: ["Ethereum", "Arbitrum", "Optimism", "BSC", "Polygon", "DeFi", "RootStock"],
  },
  {
    id: 72,
    displayName: "Mint",
    bridgeDbName: "mint",
    iconLink: "icons:mint",
    largeTxThreshold: 10000,
    url: "https://bridge.mintchain.io/",
    chains: ["Ethereum", "Mint"],
    destinationChain: "Mint",
  },
  {
    id: 73,
    displayName: "Sui Bridge",
    bridgeDbName: "suibridge",
    iconLink: "icons:sui",
    largeTxThreshold: 10000,
    url: "https://bridge.sui.io/",
    chains: ["Ethereum", "Sui"],
    destinationChain: "Sui",
  },
  {
    id: 74,
    displayName: "RetroBridge",
    bridgeDbName: "retrobridge",
    iconLink: "icons:retrobridge",
    largeTxThreshold: 10000,
    url: "https://retrobridge.io/",
    chains: [
      "Ethereum",
      "Arbitrum",
      "Arbitrum Nova",
      "Optimism",
      "Base",
      "Linea",
      "Blast",
      "Scroll",
      "BSC",
      "X Layer",
      "Taiko",
      "ZkLink",
      "ZKsync Era",
      "Merlin",
      "BSquared",
      "Bitlayer",
      "Mode",
      "Manta",
      "Polygon zkEVM",
      "Polygon",
      "Metis",
      "Avalanche",
      "opBNB",
      "Gravity",
      "Mint",
      "BOB",
      "Mantle",
      "Zora",
      "Kroma",
    ],
    chainMapping: {
      "arbitrum nova": "arbitrum_nova",
      "zksync era": "era",
      "polygon zkevm": "polygon_zkevm",
      bitlayer: "btr",
      bsquared: "b2-mainnet",
      "x layer": "xlayer",
      opbnb: "op_bnb",
      avalanche: "avax",
    },
  },
  {
    id: 75,
    displayName: "Layerswap",
    bridgeDbName: "layerswap",
    iconLink: "icons:layerswap",
    url: "https://layerswap.io/app",
    largeTxThreshold: 10000,
    chains: [
      "Ethereum",
      "Arbitrum",
      "Arbitrum Nova",
      "Optimism",
      "Base",
      "Linea",
      "Blast",
      "Scroll",
      "BSC",
      "X Layer",
      "Taiko",
      "ZKsync Era",
      "Merlin",
      "Mode",
      "Manta",
      "Polygon zkEVM",
      "Polygon",
      "Avalanche",
      "opBNB",
      "Gravity",
      "Mint",
      "BOB",
      "Mantle",
      "Zora",
      "Kroma",
      "Fraxtal",
      "Sei",
      "KCC",
      "Fuse",
      "Metis",
      "Astar",
      "Gnosis",
    ],
    chainMapping: {
      "arbitrum nova": "arbitrum_nova",
      "zksync era": "era",
      "polygon zkevm": "polygon_zkevm",
      bsquared: "b2-mainnet",
      "x layer": "xlayer",
      bouncebit: "bouncebit-mainnet",
      opbnb: "op_bnb",
      bitlayer: "btr",
    },
  },
  {
    id: 76,
    displayName: "Hyperlane",
    bridgeDbName: "hyperlane",
    iconLink: "icons:hyperlane",
    largeTxThreshold: 10000,
    url: "https://hyperlane.xyz/",
    chains: [
      "Aleph Zero EVM",
      "Ancient8",
      "Arbitrum",
      "Arthera",
      "Astar",
      "Astar zkEVM",
      "Avalanche",
      "Base",
      "Bitlayer",
      "Blast",
      "BOB",
      "BSC",
      "Celo",
      // "CheeseChain",
      "Chiliz",
      "Core",
      "Cyber",
      "Degen",
      "Dogechain",
      "Endurance",
      "Ethereum",
      "Everclear",
      "Flare",
      "Forma",
      "Fraxtal",
      "Fuse",
      "Gnosis",
      "Immutable zkEVM",
      "Injective EVM",
      "KalyChain",
      "Kroma",
      "Linea",
      "Lisk",
      "LUKSO",
      // "Lumia Prism",
      "Manta",
      "Mantle",
      "Merlin",
      "Metis",
      "Mint",
      "Mode",
      "Molten",
      "Moonbeam",
      "Oort",
      "Optimism",
      "Polygon",
      "Polygon zkEVM",
      "Proof of Play Apex",
      "PulseChain",
      "RARI Chain",
      "re.al",
      "Redstone",
      "Rootstock",
      "Sanko",
      "Scroll",
      "Sei",
      "Shibarium",
      "Superposition",
      "Taiko",
      "Tangle",
      "Viction",
      "World Chain",
      "Xai",
      "X Layer",
      "ZetaChain",
      "Zircuit",
      "Zora",
    ],
    chainMapping: {
      avalanche: "avax",
    },
  },
  {
    id: 77,
    displayName: "Wormhole",
    bridgeDbName: "wormhole",
    iconLink: "icons:wormhole",
    largeTxThreshold: 10000,
    url: "https://portalbridge.com/",
    chains: [
      "Ethereum",
      "Polygon",
      "Fantom",
      "Avalanche",
      "Aurora",
      "Celo",
      "Klaytn",
      "BSC",
      "Moonbeam",
      "Optimism",
      "Arbitrum",
      "Base",
      "Solana",
      "Near",
      "Aptos",
      "Sui",
      "Sei",
      "Karura",
      "Acala",
      "Algorand",
      "Terra",
      "Terra Classic",
      "Oasis",
      "Celo",
      "Kaia",
      "Wormchain",
    ],
    chainMapping: {
      avalanche: "avax",
    },
  },
  {
    id: 78,
    displayName: "Zircuit Bridge",
    bridgeDbName: "zircuit",
    iconLink: "chain:zircuit",
    largeTxThreshold: 10000,
    url: "https://bridge.zircuit.com/",
    chains: ["Ethereum", "Zircuit"],
    destinationChain: "Zircuit",
  },
] as BridgeNetwork[];
