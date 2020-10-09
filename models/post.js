const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  imageUrl: { type: String, required: false },
  content: { type: String, required: false },
  tags: [
    { type: String, required: false }
  ],
  postType: { type: String, required: false },
  metaDescription: { type: String, required: false },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: false }
})

module.exports =  mongoose.model('Post', postSchema)