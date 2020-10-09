const mongoose = require('mongoose')

const Schema = mongoose.Schema

const pairSchema = new Schema({
  obmenkaId: {
    type: Schema.Types.ObjectId,
    ref: 'Obmenka'
  },
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  in: {
    type: Number,
    required: true
  },
  out: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  minamount: {
    type: String,
    required: false
  },
  maxamount: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  param: {
    type: String,
    required: false
  },
  updatedAt: {
    type: Date,
    required: false
  }
})

module.exports =  mongoose.model('Pair', pairSchema)
