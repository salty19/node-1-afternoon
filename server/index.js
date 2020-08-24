const express = require('express')
const products = require('../products.json')
const getProducts = require('./getProducts')

const app = express()
const port = 3001

app.get('/api/products', getProducts)
app.get('/api/product/:id', getProducts)

app.listen(port, () => {
    console.log(`Server LISTENING on port: ${port}`)
})