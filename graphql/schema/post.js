const postSchema = `
  type Post {
    _id: ID!
    title: String!
    slug: String!
    imageUrl: String
    content: String
    tags: [String]
    postType: String
    metaDescription: String
    createdAt: String
    updatedAt: String
  }

  input PostInput {
    _id: ID
    title: String
    slug: String
    imageUrl: String
    tags: [String]
    content: String
    metaDescription: String
    postType: String
  }
`

module.exports = postSchema