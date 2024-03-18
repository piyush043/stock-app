export interface Stock {
  id: number,
  name: string,
  symbol: string,
  last_price: number,
  market_cap: number,
  tag: string,
  selected?: boolean
}
