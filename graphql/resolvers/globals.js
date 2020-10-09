const Global = require('../../models/global')

module.exports = {
  globals: async ({ params }) => {
    try {
      if (params) {
        const res =  await Global.find(params)
        return res
      } else {
        const res = await Global.find()
        return res
      }
    } catch(err) {
      throw err
    }
  },
  updateGlobals: async ({ id, options }) => {
    try {
      if (!id) {
        const global = new Global(options)
        const res = await global.save()
        return res
      }

      const res = await Global.updateOne({_id: id}, {$set: {...options, updatedAt: new Date()}})
      if (!res) throw new Error('some error in globals')

      const newData = await Global.findById(id)
      return newData
    } catch(err) {
      console.log(err)
    }
  }
}