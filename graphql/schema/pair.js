const pairSchema = `
  type Pair {
    _id: ID!
    obmenkaId: ID!
    updatedAt: String!
    from: String!
    to: String!
    in: Float!
    out: Float!
    amount: Float!
    minamount: String
    maxamount: String
    city: String
    param: String
    obmenka: Obmenka
    currencies: [Currency]
  }

  input PairOptions {
    from: String!
    to: String!
    in: Float!
    out: Float!
    amount: Float!
    minamount: String
    maxamount: String
    city: String
  }

  input PairInput {
    from: String
    to: String
    in: Float
    out: Float
    amount: Float
    minamount: String
    maxamount: String
    city: String
    empty: Boolean
  }
`

module.exports = pairSchema