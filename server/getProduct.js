const products = require('../products.json')

const getProduct = (req, res) => {
    const {id} = req.params
    const item = products.find(
        element => element.id === +id
    )

    if(item){
        res.status(200).send(item)
    } else {
        res.status(500).send('Item not in list.')
    }
}

module.exports = getProduct 