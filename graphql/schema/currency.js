const currecySchema = `
  type Currency {
    _id: ID!
    sym: String!
    name: String!
    icon: String!
    type: String
    froms: [Pair]
    tos: [Pair]
  }

  input CurrencyInput {
    sym: String
    name: String
    icon: String
    type: String
  }
`

module.exports = currecySchema