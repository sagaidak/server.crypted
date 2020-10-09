const mongoose = require('mongoose')

const Schema = mongoose.Schema

const currencySchema = new Schema({
  sym: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: false
  }
})

module.exports =  mongoose.model('Currency', currencySchema)
