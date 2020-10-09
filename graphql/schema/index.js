const { buildSchema } = require('graphql')
const bountySchema = require('./bounty')
const obmenkaSchema = require('./obmenka')
const pairSchema = require('./pair')
const currencySchema = require('./currency')
const citySchema = require('./city')
const postSchema = require('./post')
const geckoCoinSchema = require('./geckoCoin')
const tradeSchema = require('./trade')
const portfolioSchema = require('./portfolio')
const globalSchema = require('./global')


module.exports = buildSchema(`
  ${bountySchema}
  ${obmenkaSchema}
  ${pairSchema}
  ${currencySchema}
  ${citySchema}
  ${postSchema}
  ${geckoCoinSchema}
  ${tradeSchema}
  ${portfolioSchema}
  ${globalSchema}

  type RootQuery {
    bounties(first: Int, offset: Int, id: ID): BountyAnswer!
    obmenki(params: ObmenkaInput): [Obmenka]!
    pairs(params: PairInput, amount_gt: Float): [Pair]!
    currencies(params: CurrencyInput): [Currency]
    posts(params: PostInput): [Post]
    geckoCoins(params: GeckoCoinInput): [GeckoCoin]!
    portfolios(params: PortfolioInput): [Portfolio]
    trades(params: TradeInput): [Trade]
    globals(params: GlobalInput): [Global]
  }

  type RootMutation {
    createBounty(bountyInput: BountyInput, list: [ListItemInput]): Bounty
    updateBounty(id: ID!, options: OptionsInput!): Bounty
    createObmenka(obmenkaInput: ObmenkaInput): Obmenka
    updateObmenka(id: ID!, options: ObmenkaInput!): Obmenka
    updatePairs(obmenkaId: ID!, options: [PairOptions]!): [Pair]
    createCurrency(currencyInput: CurrencyInput!): Currency
    createCity(cityInput: CityInput!): City
    createPost(postInput: PostInput!): Post
    updatePost(id: ID!, options: PostInput): Post
    updateGeckoCoin(geckoCoinId: String, options: GeckoCoinInput): GeckoCoin
    createPortfolio(portfolioInput: PortfolioInput): Portfolio
    updatePortfolio(id: ID!, options: PortfolioInput!): Portfolio
    createTrade(tradeInput: TradeInput): Trade
    updateTrade(id: ID!, options: TradeInput!): Trade
    deleteTrade(id: ID!): Trade
    updateGlobals(id: ID, options: GlobalInput): Global
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`)