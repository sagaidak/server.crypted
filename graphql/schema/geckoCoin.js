const geckoCoinSchema = `
  type GeckoCoin {
    _id: ID
    id: String
    symbol: String
    name: String
    image: String
    current_price: Float
    market_cap: Float
    market_cap_rank: Int
    fully_diluted_valuation: Float
    total_volume: Float
    high_24h: Float
    low_24h: Float
    price_change_24h: Float
    price_change_percentage_24h: Float
    market_cap_change_24h: Float
    market_cap_change_percentage_24h: Float
    circulating_supply: Float
    total_supply: Float
    max_supply: Float
    ath: Float
    ath_change_percentage: Float
    ath_date: String
    atl: Float
    atl_change_percentage: Float
    atl_date: String
    roi: Float
    last_updated: String
    price_change_percentage_24h_in_currency: Float
    price_change_percentage_30d_in_currency: Float
    price_change_percentage_7d_in_currency: Float
  }

  input GeckoCoinInput {
    id: String
    symbol: String
    name: String
    image: String
    current_price: Float
    market_cap: Float
    market_cap_rank: Int
    fully_diluted_valuation: Float
    total_volume: Float
    high_24h: Float
    low_24h: Float
    price_change_24h: Float
    price_change_percentage_24h: Float
    market_cap_change_24h: Float
    market_cap_change_percentage_24h: Float
    circulating_supply: Float
    total_supply: Float
    max_supply: Float
    ath: Float
    ath_change_percentage: Float
    ath_date: String
    atl: Float
    atl_change_percentage: Float
    atl_date: String
    roi: Float
    last_updated: String
    price_change_percentage_24h_in_currency: Float
    price_change_percentage_30d_in_currency: Float
    price_change_percentage_7d_in_currency: Float
  }
`

module.exports = geckoCoinSchema