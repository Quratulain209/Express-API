const express = require('express')
const Router = express.Router()
const {CreateProduct, getAllProduct,  getProductByBrand, getProductByCategory, UpdateProduct, DeleteProduct} = require('./Controller')


// Router.get('/products', GetAllProduct)

// Router.post('/addproduct', AddProduct)

module.exports = Router