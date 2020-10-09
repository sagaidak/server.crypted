const https = require('https')
const graphQlResolvers = require('../graphql/resolvers')
const parseString = require('xml2js').parseString

const globalId = '5f60bddef5c3571fb365d88c'

const fetchGeckoCoins = async () => {
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h%2C7d%2C30d'
  https.get(url, function(res) {
    
    let data = ''

    console.log('=== geckoCoin url', url)
    console.log(res.statusCode)

    if (res.statusCode >= 200 && res.statusCode < 400) {
      
      res.on('data', function(data_) { 
        data += data_.toString()
      })

      res.on('end', async function() {
        const result = await JSON.parse(data)
        
        if (!result) {
          console.log('=== err: result')
          return
        }

        for (const x of result) {
          graphQlResolvers.updateGeckoCoin({ geckoCoinId: x.id, options: { ...x, roi: null } })
        }

      })
    }  
  })
}

const fetchObmenki = async () => {
  const obmenki = await graphQlResolvers.obmenki({ params: false })

  for (let x of obmenki) {
    const obj = x.toObject()
    https.get(obj.parseUrl, function(res) {
      let data = '';

      console.log('url', obj.parseUrl)
      console.log(res.statusCode)

      if (res.statusCode >= 200 && res.statusCode < 400) {
        
        res.on('data', function(data_) { 
          data += data_.toString()
        })

        res.on('end', function() {
           
          parseString(data, {explicitArray: false, trim: true}, function (err, result) {
            
            if (!result || !result.rates) {
              console.log('err: result.rates.item')
              return
            }

            graphQlResolvers.updatePairs({obmenkaId: x._id, options: result.rates.item})
          })

        })

      }
    })
  }
}

// Globals

const fetchEthTransactions = async () => {
  try {
    const url = 'https://bitinfocharts.com/comparison/ethereum-transactions.html'
    https.get(url, function(res) {
      
      let data = ''

      console.log('=== fetchEthTransactions', url)
      console.log(res.statusCode)

      if (res.statusCode >= 200 && res.statusCode < 400) {
        
        res.on('data', function(data_) { 
          data += data_.toString()
        })

        res.on('end', async function() {
          const h2El = data.match(/<\s*h2 class="abtb"[^>]*>(.*?)<\s*\/\s*h2>/)
          const txs = h2El[0].match(/(?<=\| )(.*)(?=<\/h2>)/)
          const prepared = +txs[0].replace(/,/g,'')

          graphQlResolvers.updateGlobals({id: globalId, options: { eth_tx_24h: prepared } })
          //console.log('============ ETH Transactions', prepared)
        })
      }  
    })

  } catch (err) {
    throw err
  }
}

const fetchBtcTransactions = async () => {
  try {
    const url = 'https://blockchain.info/q/24hrtransactioncount'
    https.get(url, function(res) {
      
      let data = ''

      console.log('=== fetchBtcTransactions', url)
      console.log(res.statusCode)

      if (res.statusCode >= 200 && res.statusCode < 400) {
        
        res.on('data', function(data_) { 
          data += data_.toString()
        })

        res.on('end', async function() {
          const prepared = +data
          graphQlResolvers.updateGlobals({id: globalId, options: { btc_tx_24h: prepared } })
          //console.log('============ BTC Transactions', data)
        })
      }  
    })

  } catch (err) {
    throw err
  }
}

const fetchBtcFees = async () => {
  try {
    const url = 'https://bitcoinfees.earn.com/api/v1/fees/recommended'
    https.get(url, function(res) {
      
      let data = ''

      console.log('=== fetchBtcFees', url)
      console.log(res.statusCode)

      if (res.statusCode >= 200 && res.statusCode < 400) {
        
        res.on('data', function(data_) { 
          data += data_.toString()
        })

        res.on('end', async function() {
          const res = await JSON.parse(data)

          graphQlResolvers.updateGlobals({
            id: globalId,
            options: { 
              btc_fees: res 
            } 
          })

          //console.log('============ BTC Fees', res)
        })
      }  
    })

  } catch (err) {
    throw err
  }
}

const fetchEthFees = async () => {
  try {
    const url = 'https://ethgasstation.info/api/ethgasAPI.json?api-key=83b9b52b73d5c8b50e6bd59ffcf3b74ef214a41e0dd64e51a9960b30945b'
    https.get(url, function(res) {
      
      let data = ''

      console.log('=== fetchEthFees', url)
      console.log(res.statusCode)

      if (res.statusCode >= 200 && res.statusCode < 400) {
        
        res.on('data', function(data_) { 
          data += data_.toString()
        })

        res.on('end', async function() {
          const res = await JSON.parse(data)

          const {
            fast,
            fastest,
            safeLow,
            average,
            safeLowWait,
            avgWait,
            fastWait,
            fastestWait 
          } = res

          graphQlResolvers.updateGlobals({
            id: globalId,
            options: { 
              eth_fees: {
                fast,
                fastest,
                safeLow,
                average,
                safeLowWait,
                avgWait,
                fastWait,
                fastestWait 
              }
            } 
          })

          //console.log('============ ETH Fees', res)
        })
      }  
    })

  } catch (err) {
    throw err
  }
}

const fetchFearAndGreed = async () => {
  try {
    const url = 'https://api.alternative.me/fng/?limit=10'
    https.get(url, function(res) {
      
      let data = ''

      console.log('=== fetchFearAndGreed', url)
      console.log(res.statusCode)

      if (res.statusCode >= 200 && res.statusCode < 400) {
        
        res.on('data', function(data_) { 
          data += data_.toString()
        })

        res.on('end', async function() {
          const res = await JSON.parse(data)
          const prepared = +res.data[0].value

          graphQlResolvers.updateGlobals({
            id: globalId,
            options: { 
              fng: prepared
            } 
          })

          //console.log('============ fetchFearAndGreed', res)
        })
      }  
    })

  } catch (err) {
    throw err
  }
}

const fetchGeckoGlobal = async () => {
  try {
    const url = 'https://api.coingecko.com/api/v3/global'
    https.get(url, function(res) {
      
      let data = ''

      console.log('=== fetchGeckoGlobal', url)
      console.log(res.statusCode)

      if (res.statusCode >= 200 && res.statusCode < 400) {
        
        res.on('data', function(data_) { 
          data += data_.toString()
        })

        res.on('end', async function() {
          const res = await JSON.parse(data)

          graphQlResolvers.updateGlobals({
            id: globalId,
            options: { 
              total_market_cap: res.data.total_market_cap.usd,
              total_volume_24h: res.data.total_volume.usd,
              market_cap_percentage: {
                btc: res.data.market_cap_percentage.btc,
                eth: res.data.market_cap_percentage.eth,
                usdt: res.data.market_cap_percentage.usdt
              },
              market_cap_change_percentage_24h_usd: res.data.market_cap_change_percentage_24h_usd
            } 
          })

          //console.log('============ fetchGeckoGlobal', res)
        })
      }  
    })

  } catch (err) {
    throw err
  }
}

const fetchGeckoDefi = async () => {
  try {
    const url = 'https://api.coingecko.com/api/v3/global/decentralized_finance_defi'
    https.get(url, function(res) {
      
      let data = ''

      console.log('=== fetchGeckoDefi', url)
      console.log(res.statusCode)

      if (res.statusCode >= 200 && res.statusCode < 400) {
        
        res.on('data', function(data_) { 
          data += data_.toString()
        })

        res.on('end', async function() {
          const res = await JSON.parse(data)

          graphQlResolvers.updateGlobals({
            id: globalId,
            options: { 
              defi: {
                defi_market_cap: +res.data.defi_market_cap,
                eth_market_cap: +res.data.eth_market_cap,
                defi_to_eth_ratio: +res.data.defi_to_eth_ratio,
                trading_volume_24h: +res.data.trading_volume_24h,
                defi_dominance: +res.data.defi_dominance,
                top_coin_name: res.data.top_coin_name, 
                top_coin_defi_dominance: res.data.top_coin_defi_dominance,
              }
            } 
          })

          //console.log('============ fetchGeckoDefi', res)
        })
      }  
    })

  } catch (err) {
    throw err
  }
}

const tempRemove = async () => {
  graphQlResolvers.tempRemoveByObmenkaId()
}


module.exports = {
  fetchGeckoCoins,
  fetchObmenki,
  fetchEthTransactions,
  fetchBtcTransactions,
  fetchBtcFees,
  fetchEthFees,
  fetchFearAndGreed,
  fetchGeckoGlobal,
  fetchGeckoDefi,
  tempRemove
}