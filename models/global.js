const mongoose = require('mongoose')

const Schema = mongoose.Schema

const globalSchema = new Schema({
  btc_tx_24h: { type: Number },
  eth_tx_24h: { type: Number },
  btc_fees: {
    fastestFee: { type: Number },
    halfHourFee: { type: Number },
    hourFee: { type: Number }
  },
  eth_fees: {
    fast: { type: Number }, fastest: { type: Number }, safeLow: { type: Number }, average: { type: Number },
    fastWait: { type: Number }, fastestWait: { type: Number }, safeLowWait: { type: Number }, avgWait: { type: Number }
  },
  fng: { type: Number },
  defi: {
    defi_market_cap: { type: Number }, eth_market_cap: { type: Number },
    defi_to_eth_ratio: { type: Number }, trading_volume_24h: { type: Number },
    defi_dominance: { type: Number }, top_coin_name: { type: String }, 
    top_coin_defi_dominance: { type: Number }
  },
  total_market_cap: { type: Number },
  total_volume_24h: { type: Number },
  market_cap_percentage: {
    btc: { type: Number }, eth: { type: Number }, usdt: { type: Number }
  },
  market_cap_change_percentage_24h_usd: { type: Number },
  updatedAt: { type: Date, required: false }
})

module.exports =  mongoose.model('Global', globalSchema)