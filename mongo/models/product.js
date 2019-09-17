const mongoose = require('mongoose')
var Schema = mongoose.Schema

const ProductSchema = Schema({
  id: { type: String },
  name: { type: String },
  price: { type: String },
  quantity: { type: String }
})

const Product = module.exports = mongoose.model('Product', ProductSchema, 'product')
