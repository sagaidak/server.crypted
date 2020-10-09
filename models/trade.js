const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tradeSchema = new Schema({
  geckoCoinId: { type: Schema.Types.ObjectId, ref: 'GeckoCoin' },
  portfolioId: { type: Schema.Types.ObjectId, ref: 'Portfolio' },
  quantity: { type: Number, required: true },
  currency: { type: String, required: true },
  price: { type: Number, required: true },
  openDate: { type: String, required: true },
  isClosed: { type: Boolean, required: true },
  closeDate: { type: String, required: false },
  closePrice: { type: Number, required: false },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: false }
})

module.exports =  mongoose.model('Trade', tradeSchema)
