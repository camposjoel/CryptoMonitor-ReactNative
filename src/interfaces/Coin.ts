export interface CoinsResponse {
  data: Coin[],
  timestamp: number
}

export interface Coin {
  id: string,
  rank: string,
  symbol: string,
  name: string,
  supply: string,
  maxSupply: string,
  marketCapUsd: string,
  volumeUsd24Hr: string,
  priceUsd: string,
  changePercent24Hr: string,
  vwap24Hr: string,
  explorer: string
}

export interface CoinHistoryResponse {
  data: CoinTimepoint[],
  timestamp: number
}

export interface CoinTimepoint {
  priceUsd: string,
  time: number
}