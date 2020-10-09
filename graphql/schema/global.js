const globalSchema = `
  type BtcFees {
    fastestFee: Float
    halfHourFee: Float
    hourFee: Float
  }

  type EthFees {
    fast: Float
    fastest: Float
    safeLow: Float
    average: Float
    fastWait: Float
    fastestWait: Float
    safeLowWait: Float
    avgWait: Float
  }

  type Defi {
    defi_market_cap: Float
    eth_market_cap: Float
    defi_to_eth_ratio: Float
    trading_volume_24h: Float
    defi_dominance: Float
    top_coin_name: String 
    top_coin_defi_dominance: Float
  }

  type MarketCapPercentage {
    btc: Float
    eth: Float
    usdt: Float
  }

  type Global {
    _id: ID!
    btc_tx_24h: Float
    eth_tx_24h: Float
    btc_fees: BtcFees
    eth_fees: EthFees
    fng: Float
    defi: Defi
    total_market_cap: Float
    total_volume_24h: Float
    market_cap_percentage: MarketCapPercentage
    market_cap_change_percentage_24h_usd: Float
    updatedAt: String
  }

  input BtcFeesInput {
    fastestFee: Float
    halfHourFee: Float
    hourFee: Float
  }

  input EthFeesInput {
    fast: Float
    fastest: Float
    safeLow: Float
    average: Float
    fastWait: Float
    fastestWait: Float
    safeLowWait: Float
    avgWait: Float
  }

  input DefiInput {
    defi_market_cap: Float
    eth_market_cap: Float
    defi_to_eth_ratio: Float
    trading_volume_24h: Float
    defi_dominance: Float
    top_coin_name: String 
    top_coin_defi_dominance: Float
  }

  input MarketCapPercentageInput {
    btc: Float
    eth: Float
    usdt: Float
  }

  input GlobalInput {
    btc_tx_24h: Float
    eth_tx_24h: Float
    btc_fees: BtcFeesInput
    eth_fees: EthFeesInput
    fng: Float
    defi: DefiInput
    total_market_cap: Float
    total_volume_24h: Float
    market_cap_percentage: MarketCapPercentageInput
    market_cap_change_percentage_24h_usd: Float
    updatedAt: String
  }
`

module.exports = globalSchema
