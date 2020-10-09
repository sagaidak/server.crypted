const mongoose = require('mongoose')

const Schema = mongoose.Schema

const geckoCoinSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  symbol: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  current_price: {
    type: Number,
    required: true
  },
  market_cap: {
    type: Number,
    required: true
  },
  market_cap_rank: {
    type: Number,
    required: true
  },
  fully_diluted_valuation: {
    type: Number,
    required: false
  },
  total_volume: {
    type: Number,
    required: true
  },
  high_24h: {
    type: Number,
    required: true
  },
  low_24h: {
    type: Number,
    required: true
  },
  price_change_24h: {
    type: Number,
    required: true
  },
  price_change_percentage_24h: {
    type: Number,
    required: true
  },
  market_cap_change_24h: {
    type: Number,
    required: true
  },
  market_cap_change_percentage_24h: {
    type: Number,
    required: true
  },
  circulating_supply: {
    type: Number,
    required: true
  },
  total_supply: {
    type: Number,
    required: false
  },
  max_supply: {
    type: Number,
    required: false
  },
  ath: {
    type: Number,
    required: true
  },
  ath_change_percentage: {
    type: Number,
    required: true
  },
  ath_date: {
    type: String,
    required: true
  },
  atl: {
    type: Number,
    required: true
  },
  atl_change_percentage: {
    type: Number,
    required: true
  },
  atl_date: {
    type: String,
    required: true
  },
  roi: {
    type: Number,
    required: false
  },
  last_updated: {
    type: String,
    required: true
  },
  price_change_percentage_24h_in_currency: {
    type: Number,
    required: false
  },
  price_change_percentage_7d_in_currency: {
    type: Number,
    required: false
  },
  price_change_percentage_30d_in_currency: {
    type: Number,
    required: false
  },
})

module.exports =  mongoose.model('GeckoCoin', geckoCoinSchema)