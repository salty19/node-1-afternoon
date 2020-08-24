const products = require('../products.json')

const getProducts = (req, res) => {
    const item = products.find(val => val.id === parseInt(req.params.id))
    if (!item) {
        return res.status(500).send("item not in list")
    }
    res.status(200).send(products);
}

module.exports = getProducts 