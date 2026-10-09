import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const FACTORY_ADDRESS = '0xacbff1d4e38968e8a3e37f3fdad2b45c4283279f'

export const REFERENCE_TOKEN = '0x980b62da83eff3d4576c647993b0c1d7faf17c73'
// tUSDC/WETH 0.30% pool - prices WETH (and everything routed through it) in USD.
export const STABLE_TOKEN_POOL = '0xdb6d10846fc2f9585fc627d60dc556975914f7e7'

export const TVL_MULTIPLIER_THRESHOLD = '2'
export const MATURE_MARKET = '1000000'
export const MINIMUM_NATIVE_LOCKED = BigDecimal.fromString('0.01')

export const ROLL_DELETE_HOUR = 768
export const ROLL_DELETE_MINUTE = 1680

export const ROLL_DELETE_HOUR_LIMITER = BigInt.fromI32(500)
export const ROLL_DELETE_MINUTE_LIMITER = BigInt.fromI32(1000)

export const WHITELIST_TOKENS: string[] = [
  '0x980b62da83eff3d4576c647993b0c1d7faf17c73', // WETH
  '0x828b8faf6c38eb666dfa8c1f22b106ca1fcecf0c', // tUSDC
  '0xdd8a20b1abbd84a52d02dc623e756e880fb13b6b', // tDAI
  '0x1f3f0ce32ddca29dc1861796e71c9d4530666aa4', // PGX
]

export const STABLE_COINS: string[] = [
  '0x828b8faf6c38eb666dfa8c1f22b106ca1fcecf0c', // tUSDC
  '0xdd8a20b1abbd84a52d02dc623e756e880fb13b6b', // tDAI
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
    name: 'Wrapped Ether',
    decimals: BigInt.fromI32(18),
  },
  {
    address: Address.fromString('0x828b8faf6c38eb666dfa8c1f22b106ca1fcecf0c'),
    symbol: 'tUSDC',
    name: 'Test USD Coin',
    decimals: BigInt.fromI32(6),
  },
  {
    address: Address.fromString('0xdd8a20b1abbd84a52d02dc623e756e880fb13b6b'),
    symbol: 'tDAI',
    name: 'Test Dai',
    decimals: BigInt.fromI32(18),
  },
  {
    address: Address.fromString('0x1f3f0ce32ddca29dc1861796e71c9d4530666aa4'),
    symbol: 'PGX',
    name: 'PrigeeX',
    decimals: BigInt.fromI32(18),
  },
]
