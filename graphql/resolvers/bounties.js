const Bounty = require('../../models/bounty')
const mongoose = require('mongoose')

module.exports = {
  bounties: async ({first = 1000, offset = 0, id}) => {
    try {
      const match = id ? {"_id" : mongoose.Types.ObjectId(id) } : {}
      
      const res = await Bounty.aggregate([
        { "$facet": {
          "totalData": [
            { "$match": match },
            { "$skip": offset },
            { "$limit": first }
          ],
          "totalCount": [
            { "$group": {
              "_id": null,
              "count": { "$sum": 1 }
            }}
          ]
        }}
      ])

      const preparedBounties = res[0].totalData.map(bounty => {
        return {
          ...bounty,
          finalDate: new Date(bounty.finalDate).toISOString(),
        }
      })

      return {
        bounties: preparedBounties,
        total: res[0].totalCount[0].count
      }
    } catch (err) {
      throw err
    }
  },
  createBounty: async ({bountyInput, list}) => {
    const l = JSON.stringify(list)

    try {
      const bounty = new Bounty({
        imageUrl: bountyInput.imageUrl,
        title: bountyInput.title,
        url: bountyInput.url,
        bountyValue: bountyInput.bountyValue,
        list: JSON.parse(l),
        tags: bountyInput.tags,
        status: bountyInput.status,
        finalDate: new Date(bountyInput.finalDate),
        claimUrl: bountyInput.claimUrl,
        clicks: bountyInput.clicks,
        createdAt: new Date()
      })

      const res = await bounty.save()

      return res
    } catch (err) {
      throw err
    }
  },
  updateBounty: async ({ id, options }) => {
    try {
      console.log('id, options', id, options)
      const bounty = await Bounty.updateOne({_id: id}, { $set: {...options, updatedAt: new Date()} })
      if (!bounty) throw new Error('some error in bounty')

      const newData = await Bounty.findById(id)
      return newData
    } catch(err) {
      console.log(err)
    }
  },
}