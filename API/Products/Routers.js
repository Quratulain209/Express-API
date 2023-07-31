const express = require('express')
const Router = express.Router()
const {GetAllProduct, AddProduct} = require('./Controller')

// GETALLPRODUCTS
Router.get('/products', GetAllProduct)

// ADDPRODUCTS
Router.post('/addproduct', AddProduct)

module.exports = Router