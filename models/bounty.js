const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bountySchema = new Schema({
  imageUrl: { type: String, required: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
  bountyValue: { type: String, required: true },
  list: [{
    url: { type: String },
    value: { type: String }
  }],
  tags: [
    { type: String, required: false }
  ],
  status: { type: String, required: false },
  finalDate: { type: Date, required: true },
  claimUrl: { type: String, required: true },
  clicks: { type: Number, required: false },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: false }
})

module.exports =  mongoose.model('Bounty', bountySchema)