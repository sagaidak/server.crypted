const Portfolio = require('../../models/portfolio')
const GeckoCoin = require('../../models/gecko-coin')
const Trade = require('../../models/trade')
const DataLoader = require('dataloader')
const isEmpty  = require('lodash.isempty')

const batchTrades = async (ids) => {
  return ids.map(x => trades({ params: { portfolioId: x } }))
}

const tradeLoader = new DataLoader(batchTrades)

const batchCoins = async (ids) => {
  return ids.map(x => GeckoCoin.findById(x))
}

const coinLoader = new DataLoader(batchCoins)


const trades = async ({ params }) => {
  try {

    if (isEmpty(params)) {
      const res = await Trade.find()

      return res
    }
    
    let trades = await Trade.find(params)

    let res = trades.map((x) => {
      const obj = x.toObject()
      return {
        ...obj,
        coin: coinLoader.load(obj.geckoCoinId)
      }
    })

    return res
  } catch(err) {
    throw err
  }
}

module.exports = {
  portfolios: async ({ params }) => {
    try {

      if (isEmpty(params)) {
        const res = await Portfolio.find()

        return res.map((x) => {
          const obj = x.toObject()
          return {
            ...obj,
            trades: tradeLoader.load(x._id)
          }
        })
      }
      
      let portfolios = await Portfolio.find(params)

      let res = portfolios.map((x) => {
        const obj = x.toObject()
        return {
          ...obj,
          trades: tradeLoader.load(x._id)
        }
      })

      return res
    } catch(err) {
      throw err
    }
  },
  createPortfolio: async ({ portfolioInput }) => {
    try {

      const newPortfolio = new Portfolio({
        ...portfolioInput,
        createdAt: new Date()
      })

      const res = await newPortfolio.save()

      return res
    } catch (err) {
      throw err
    }
  },
  updatePortfolio: async ({id, options}) => {
    try {
      const portfolio = await Portfolio.updateOne({_id: id}, {$set: {...options, updatedAt: new Date()}})
      if (!portfolio) throw new Error('some error in portfolio')

      const newData = await Portfolio.findById(id)
      return newData
    } catch (err) {
      throw err
    }
  }
  
}