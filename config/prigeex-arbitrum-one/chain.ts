import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

// PLACEHOLDER — PrigeeX V2 Factory on Arbitrum One is not deployed yet.
// Replace with V2_FACTORY_ADDRESS from DeployV2.s.sol before deploying this subgraph.
export const FACTORY_ADDRESS = '0x000000000000000000000000000000000000b001'

// Canonical WETH on Arbitrum One
export const REFERENCE_TOKEN = '0x82af49447d8a07e3bd95bd0d56f35241523fbab1'

// PLACEHOLDER — PrigeeX-owned WETH/USDC v2 pair used as the pricing reference.
// Not deployed yet (Uniswap's pool won't reflect PrigeeX prices). Replace once
// the PrigeeX V2 WETH/USDC pair is created on Arbitrum One.
export const STABLE_TOKEN_PAIRS = ['0x000000000000000000000000000000000000b002']

// token where amounts should contribute to tracked volume and liquidity
export const WHITELIST: string[] = [
  '0x82af49447d8a07e3bd95bd0d56f35241523fbab1', // WETH
  '0xaf88d065e77c8cc2239327c5edb3a432268e5831', // USDC (native)
  '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8', // USDC.e
  '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1', // DAI
  '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9', // USDT
]

export const STABLECOINS = [
  '0xaf88d065e77c8cc2239327c5edb3a432268e5831', // USDC (native)
  '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8', // USDC.e
  '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1', // DAI
  '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9', // USDT
]

// Lowered from Uniswap's defaults (10000 USD / 1 ETH): a brand-new low-liquidity DEX
// would otherwise show no USD prices until pools reach Uniswap-scale liquidity.
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('100')

export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('0.01')

export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = []

export const SKIP_TOTAL_SUPPLY: string[] = []
