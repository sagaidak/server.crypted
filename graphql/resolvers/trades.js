const GeckoCoin = require('../../models/gecko-coin')
const Trade = require('../../models/trade')
const DataLoader = require('dataloader')
const isEmpty  = require('lodash.isempty')

const batchCoins = async (ids) => {
  return ids.map(x => GeckoCoin.findById(x))
}

const coinLoader = new DataLoader(batchCoins)

module.exports = {
  trades: async ({ params }) => {
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
  },
  createTrade: async ({ tradeInput }) => {
    try {

      const newTrade = new Trade({
        ...tradeInput,
        createdAt: new Date()
      })

      const res = await newTrade.save()

      return res
    } catch (err) {
      throw err
    }
  },
  updateTrade: async ({id, options}) => {
    try {
      const trade = await Trade.updateOne({_id: id}, {$set: {...options, updatedAt: new Date()}})
      if (!trade) throw new Error('some error in trade')

      const newData = await Trade.findById(id)
      return newData
    } catch (err) {
      throw err
    }
  },
  deleteTrade: async ({id}) => {
    try {
      const trade = await Trade.deleteOne({ _id: id })

      console.log('deleting trade:', trade)

      return trade
    } catch (err) {
      throw err
    }
  }
  
}