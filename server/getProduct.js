const products = require('../product.json')

const getProduct = (req, res) => {
    const item = product.find(val => val.id === parseInt(req.params.id))
}