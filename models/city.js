const mongoose = require('mongoose')

const Schema = mongoose.Schema

const citySchema = new Schema({
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
  }
})

module.exports =  mongoose.model('City', citySchema)
