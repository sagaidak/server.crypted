const Post = require('../../models/post')

module.exports = {
  posts: async ({ params }) => {
    try {
      if (params) {
        const res =  await Post.find(params)
        return res
      } else {
        const res = await Post.find()
        return res
      }
    } catch(err) {
      throw err
    }
  },
  createPost: async ({ postInput }) => {
    try {
      const post = new Post({
        ...postInput,
        createdAt: new Date()
      })

      const res = await post.save()

      return res
    } catch(err) {
      throw err
    }
  },
  
  updatePost: async ({ id, options }) => {
    try {
      const post = await Post.updateOne({_id: id}, {$set: {...options, updatedAt: new Date()}})
      if (!post) throw new Error('some error in obmenka')

      const newData = await Post.findById(id)
      return newData
    } catch(err) {
      console.log(err)
    }
  },
}