import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const FACTORY_ADDRESS = '0x000000000000000000000000000000000000d001'

export const REFERENCE_TOKEN = '0x980b62da83eff3d4576c647993b0c1d7faf17c73'
export const STABLE_TOKEN_POOL = '0x000000000000000000000000000000000000d002'

export const TVL_MULTIPLIER_THRESHOLD = '2'
export const MATURE_MARKET = '1000000'
export const MINIMUM_NATIVE_LOCKED = BigDecimal.fromString('0.01')

export const ROLL_DELETE_HOUR = 768
export const ROLL_DELETE_MINUTE = 1680

export const ROLL_DELETE_HOUR_LIMITER = BigInt.fromI32(500)
export const ROLL_DELETE_MINUTE_LIMITER = BigInt.fromI32(1000)

// token where amounts should contribute to tracked volume and liquidity
// usually tokens that many tokens are paired with s
export const WHITELIST_TOKENS: string[] = [
  '0x980b62da83eff3d4576c647993b0c1d7faf17c73', // WETH
  '0x000000000000000000000000000000000000a003', // USDC
]

export const STABLE_COINS: string[] = [
  '0x000000000000000000000000000000000000a003', // USDC
]

export const SKIP_POOLS: string[] = []

export const POOL_MAPINGS: Array<Address[]> = []

export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = [
  {
    address: Address.fromString(REFERENCE_TOKEN),
    symbol: 'WETH',
    name: 'Wrapped Ethereum',
    decimals: BigInt.fromI32(18),
  },
  {
    address: Address.fromString('0x000000000000000000000000000000000000a003'),
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: BigInt.fromI32(6),
  },
]
