const citySchema = `
  type City {
    _id: ID!
    sym: String!
    name: String!
    icon: String!
  }

  input CityInput {
    sym: String!
    name: String!
    icon: String!
  }
`

module.exports = citySchema