const bountiesResolver = require('./bounties')
const citiesReslover = require('./cities')
const currenciesResolver = require('./currencies')
const obmenkiResolver = require('./obmenki')
const pairsResolver = require('./pairs')
const postsResolver = require('./posts')
const geckoCoinsResolver = require('./gecko-coins')
const portfoliosResolver = require('./portfolios')
const tradesResolver = require('./trades')
const globalsResolver = require('./globals')

const rootResolver = {
  ...bountiesResolver,
  ...citiesReslover,
  ...currenciesResolver,
  ...obmenkiResolver,
  ...pairsResolver,
  ...postsResolver,
  ...geckoCoinsResolver,
  ...portfoliosResolver,
  ...tradesResolver,
  ...globalsResolver
}

module.exports = rootResolver