import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

// PLACEHOLDER — PrigeeX V2 Factory on Arbitrum Sepolia is not deployed yet.
// Replace with V2_FACTORY_ADDRESS from DeployV2.s.sol before deploying this subgraph.
export const FACTORY_ADDRESS = '0x000000000000000000000000000000000000a001'

// Canonical WETH on Arbitrum Sepolia
export const REFERENCE_TOKEN = '0x980b62da83eff3d4576c647993b0c1d7faf17c73'

// PLACEHOLDER — PrigeeX-owned WETH/<stable> v2 pair used as the pricing reference.
// Not deployed yet. Replace once a PrigeeX V2 WETH/USDC pair exists on Sepolia.
export const STABLE_TOKEN_PAIRS = ['0x000000000000000000000000000000000000a002']

// token where amounts should contribute to tracked volume and liquidity
export const WHITELIST: string[] = [
  '0x980b62da83eff3d4576c647993b0c1d7faf17c73', // WETH (Arbitrum Sepolia)
  '0x000000000000000000000000000000000000a003', // PLACEHOLDER — test USDC on Sepolia, not deployed yet
]

export const STABLECOINS = [
  '0x000000000000000000000000000000000000a003', // PLACEHOLDER — test USDC on Sepolia, not deployed yet
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
