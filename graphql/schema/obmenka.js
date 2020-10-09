const obmenkaSchema = `
  type Obmenka {
    _id: ID!
    title: String!
    url: String!
    imageUrl: String
    parseUrl: String
    startDate: String
    country: String
    rating: String
    createdAt: String
    updatedAt: String
  }

  input ObmenkaInput {
    _id: ID
    title: String
    url: String
    imageUrl: String
    parseUrl: String
    startDate: String
    country: String
    rating: String
    createdAt: String
    updatedAt: String
  }

`

module.exports = obmenkaSchema