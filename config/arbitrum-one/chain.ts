import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

// PrigeeXV2Factory on Arbitrum One (release 1.0.0, created at block 511345156)
export const FACTORY_ADDRESS = '0xe2e3e4ac1ecbf4caf90d32641ba09e625e6238ef'

// Canonical WETH on Arbitrum One
export const REFERENCE_TOKEN = '0x82af49447d8a07e3bd95bd0d56f35241523fbab1'

// PrigeeX V2 WETH/USDC (native) pair used as the pricing reference. Not created yet:
// this is its CREATE2 address (factory + pair init code hash 0x1edb3e24…431aa8), so USD
// pricing starts as soon as the pair is created and seeded.
export const STABLE_TOKEN_PAIRS = ['0x06c98b073a0ecf2d06ff0d0c828d1ed76537e317']

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
