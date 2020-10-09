const mongoose = require('mongoose')

const Schema = mongoose.Schema

const obmenkaSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: false
  },
  startDate: {
    type: Date,
    required: false
  },
  country: {
    type: String,
    required: false
  },
  url: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: false
  },
  parseUrl: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    required: true
  },
  updatedAt: {
    type: Date,
    required: false
  }
})

module.exports =  mongoose.model('Obmenka', obmenkaSchema)