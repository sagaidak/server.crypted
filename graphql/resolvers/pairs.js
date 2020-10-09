const Pair = require('../../models/pair')
const Obmenka = require('../../models/obmenka')
const Currency = require('../../models/currency')
const DataLoader = require('dataloader')
const ObjectID = require('mongodb').ObjectID

const batchObmenki = async (ids) => {
  return ids.map(x => Obmenka.findById(x))
}

const batchCurrencies = async (ids) => {
  return ids.map(x => Currency.findById(x))
}

const obmenkaLoader = new DataLoader(batchObmenki);
const currencyLoader = new DataLoader(batchCurrencies)

module.exports = {
  pairs: async ({ params, amount_gt = false }) => {
    try {
      if (amount_gt !== false) params.amount = { $gt: amount_gt }

      if (params.empty === true) {
        const res2 = await Pair.find()

        return res2
      }

      let pairs = await Pair.find(params)

      let res = pairs.map((x) => {
        const obj = x.toObject()
        return {
          ...obj,
          obmenka: () => obmenkaLoader.load(obj.obmenkaId),
          currencies: () => Currency.find({$or: [{sym: obj.from}, {sym: obj.to}]})
        }
      })

      return res
    } catch(err) {
      throw err
    }
  },
  updatePairs: async ({ obmenkaId, options }) => {
    try {
      const newData = []

      for (const x of options) {
        const currentPair = await Pair.findOne({ obmenkaId: obmenkaId, from: x.from, to: x.to })

        if (!currentPair) {
          const newPair = new Pair({
            obmenkaId: obmenkaId,
            ...x,
            updatedAt: new Date()
          })
    
          const res = await newPair.save()

          newData.push(res) 

        } else {
          await Pair.updateOne({_id: currentPair._id}, {$set: {...x, updatedAt: new Date()}})
          const pair = await Pair.findById(currentPair._id)

          newData.push(pair) 
        }
      }

      return newData
    } catch(err) {
      console.log(err)
    }
  },
  tempRemoveByObmenkaId: async () => {
    try {
      const res = await Pair.remove({ obmenkaId: new ObjectID("5f6a19ea2ff83f0f33e464da") })
      console.log('====== remove res:', res)
    } catch (err) {
      console.log(err)
    }
  }
}