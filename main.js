const express = require('express')
const request = require('request')

const helmet = require('helmet')

const app = express()

app.use(helmet())

app.get('/stopareacode', (req, res) => {
  request('http://v0.ovapi.nl/stopareacode/utrcka', function(error, result) {
    res.header("Access-Control-Allow-Origin", "*")
    const body = JSON.parse(result.body)
    res.json(body)
  })
})

const port = process.env.PORT || 3000
const host = process.env.HOST || '0.0.0.0'

app.listen(port, host, () => {
  console.log(`running on: ${host}:${port}`)
})
