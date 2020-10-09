// @ts-nocheck
const express = require('express')
const graphQlHttp = require('express-graphql')
const mongoose = require('mongoose')
const graphQlSchema = require('./graphql/schema')
const app = express()
const graphQlResolvers = require('./graphql/resolvers')
const { 
  fetchGeckoCoins,
  fetchObmenki,
  fetchEthTransactions,
  fetchBtcTransactions,
  fetchBtcFees,
  fetchEthFees,
  fetchFearAndGreed,
  fetchGeckoGlobal,
  fetchGeckoDefi, tempRemove } = require('./helpers/apis')

app.use((req, res, next) => {
  req.ip
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  next()
})

app.use('/files', express.static('files'));

app.use('/graphql', graphQlHttp({
  schema: graphQlSchema,
  rootValue: graphQlResolvers,
  graphiql: true
}))

mongoose.connect(`mongodb+srv://${
  process.env.MONGO_USER
}:${
  process.env.MONGO_PASSWORD
}@cluster0-ln5kc.mongodb.net/${
  process.env.MONGO_DB
}?retryWrites=true&w=majority`)
.then(() => {
  app.listen(3001)
})
.catch(err => console.log(err))


fetchObmenki()
fetchGeckoCoins()

fetchEthTransactions()
fetchBtcTransactions()
fetchBtcFees()
fetchEthFees()
fetchFearAndGreed()
fetchGeckoGlobal()
fetchGeckoDefi()


// tempRemove()