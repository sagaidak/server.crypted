const portfolioSchema = `
  type Portfolio {
    _id: ID
    title: String
    currency: String
    img: String
    description: String
    author: String
    trades: [Trade]
    createdAt: String
    updatedAt: String
  }

  input PortfolioInput {
    _id: ID
    title: String
    currency: String
    img: String
    description: String
    author: String
  }
`

module.exports = portfolioSchema