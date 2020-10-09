const mongoose = require('mongoose')

const Schema = mongoose.Schema

const portfolioSchema = new Schema({
  title: { type: String, required: true },
  currency: { type: String, required: true },
  img: { type: String, required: false },
  description: { type: String, required: false },
  author: { type: String, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: false }
})

module.exports =  mongoose.model('Portfolio', portfolioSchema)
