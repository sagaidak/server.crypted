const Obmenka = require('../../models/obmenka')

module.exports = {
  obmenki: async ({ params }) => {
    try {
      if (params) {
        const temp =  await Obmenka.find(params)
        return temp
      } else {
        const res = await Obmenka.find()
        return res
      }
    } catch(err) {
      throw err
    }
  },
  createObmenka: async ({ obmenkaInput }) => {
    try {
      const obmenka = new Obmenka({
        title: obmenkaInput.title,
        url: obmenkaInput.url,
        imageUrl: obmenkaInput.imageUrl,
        parseUrl: obmenkaInput.parseUrl,
        startDate: obmenkaInput.age,
        country: obmenkaInput.country,
        rating: obmenkaInput.rating,
        createdAt: new Date()
      })

      const res = await obmenka.save()

      return res
    } catch(err) {
      throw err
    }
  },
  
  updateObmenka: async ({ id, options }) => {
    try {
      const obmenka = await Obmenka.updateOne({_id: id}, {$set: {...options, updatedAt: new Date()}})
      if (!obmenka) throw new Error('some error in obmenka')

      const newData = await Obmenka.findById(id)
      return newData
    } catch(err) {
      console.log(err)
    }
  },
}