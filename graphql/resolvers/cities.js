const City = require('../../models/city')

module.exports = {
  createCity: async ({ cityInput }) => {
    try {
      const city = new City({
        sym: cityInput.sym,
        name: cityInput.name,
        icon: cityInput.icon
      })

      const res = await city.save()

      return res
    } catch(err) {
      throw err
    }
  },
}