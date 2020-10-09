const GeckoCoin = require('../../models/gecko-coin')
const Currency = require('../../models/currency')
const DataLoader = require('dataloader')
const isEmpty  = require('lodash.isempty')

const batchGeckoCoins = async (ids) => {
  return ids.map(x => GeckoCoin.findById(x))
}

const geckoCoinLoader = new DataLoader(batchGeckoCoins);

module.exports = {
  geckoCoins: async ({ params }) => {
    try {

      if (isEmpty(params)) {
        const res = await GeckoCoin.find()

        return res
      }
      
      const geckoCoins = await GeckoCoin.find(params)

      return geckoCoins
    } catch(err) {
      throw err
    }
  },
  updateGeckoCoin: async ({ geckoCoinId, options }) => {
    try {

      const currentGeckoCoin = await GeckoCoin.findOne({ id: geckoCoinId })

      if (!currentGeckoCoin) {
        const newGeckoCoin = new GeckoCoin(options)
  
        const res = await newGeckoCoin.save()

        return res

      } else {
        await GeckoCoin.updateOne({ _id: currentGeckoCoin._id }, { $set: options })
        const geckoCoin = await GeckoCoin.findById(currentGeckoCoin._id)

        return geckoCoin
      }

    } catch(err) {
      console.log(err)
    }
  }
}