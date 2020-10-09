const Currency = require('../../models/currency')
const Pair = require('../../models/pair')
const DataLoader = require('dataloader')

const batchFroms = async (symbols) => {
  return symbols.map(x => Pair.find({ to: x }))
}

const batchTos = async (symbols) => {
  return symbols.map(x => Pair.find({ from: x }))
}

const fromsLoader = new DataLoader(batchFroms);
const tosLoader = new DataLoader(batchTos);

module.exports = {
  currencies: async () => {
    try {
      const res = await Currency.find()
      const transformed = res.map(z => {
        const x = z.toObject()
        return {
          ...x,
          froms: fromsLoader.load(x.sym),
          tos: tosLoader.load(x.sym)
        }
      })

      return transformed // transformed.filter(x => x.froms.length === 0)
    } catch(err) {
      throw err
    }
  },
  createCurrency: async ({ currencyInput }) => {
    try {
      const currency = new Currency({
        sym: currencyInput.sym,
        name: currencyInput.name,
        icon: currencyInput.icon,
        type: currencyInput.type
      })

      const res = await currency.save()

      return res
    } catch(err) {
      throw err
    }
  },
}