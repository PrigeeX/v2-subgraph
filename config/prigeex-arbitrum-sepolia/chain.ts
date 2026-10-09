import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

export const FACTORY_ADDRESS = '0xe2c7552726753a55ab2032c43b526ff788c52a77'
export const REFERENCE_TOKEN = '0x980b62da83eff3d4576c647993b0c1d7faf17c73'
// tUSDC/WETH V2 pair - prices WETH in USD.
export const STABLE_TOKEN_PAIRS = ['0x994aee556140893ebbf4dba7a1ea9393401d1a5b']

export const WHITELIST: string[] = [
  '0x980b62da83eff3d4576c647993b0c1d7faf17c73', // WETH
  '0x828b8faf6c38eb666dfa8c1f22b106ca1fcecf0c', // tUSDC
  '0xdd8a20b1abbd84a52d02dc623e756e880fb13b6b', // tDAI
  '0x1f3f0ce32ddca29dc1861796e71c9d4530666aa4', // PGX
]

export const STABLECOINS = [
  '0x828b8faf6c38eb666dfa8c1f22b106ca1fcecf0c', // tUSDC
  '0xdd8a20b1abbd84a52d02dc623e756e880fb13b6b', // tDAI
]

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
