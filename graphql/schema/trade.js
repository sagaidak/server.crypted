const tradeSchema = `
  type Trade {
    _id: ID
    geckoCoinId: ID
    portfolioId: ID
    coin: GeckoCoin
    quantity: Float
    currency: String
    price: Float
    openDate: String
    isClosed: Boolean
    closeDate: String
    closePrice: Float
    createdAt: String
    updatedAt: String
  }

  input TradeInput {
    geckoCoinId: ID
    portfolioId: ID
    quantity: Float
    currency: String
    price: Float
    openDate: String
    isClosed: Boolean
    closeDate: String
    closePrice: Float
  }
`

module.exports = tradeSchema