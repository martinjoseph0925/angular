const express = require('express')
const router = express.Router()
const Product = require('../models/product')
const mongoose = require("mongoose")

router.get('/getproduct', (req, resp) => {
  console.log('sssss')
  // resp.send({ test: req.params.data })
  // con.query('SELECT * FROM product', function (err, result) {
  //   if (err) throw err
  //   console.log('gee', result)
  //   resp.json(result)
  // })
  Product.find({}, function (err, res) {
    if (err) throw err
    // console.log(res)
    resp.json(res)
  })
})

router.post('', (req, resp) => {
  // var Tank = mongoose.model('Tank', ProductSchema);
  // console.log('sssss', req)

  // var sql = "INSERT INTO product (name,price,quantity) VALUES ('" + req.body.username + "','" + req.body.price + "','" + req.body.quantity + "')"
  // con.query(sql, function (err, result) {
  //   if (err) throw err
  //   resp.send({ msg: '1 record inserted' })
  //   //   console.log("1 record inserted");
  // })
  var prod = new Product({ name: req.body.username, price: req.body.price, quantity: req.body.quantity })
  // prod.save(function(){
  //   console.log(resp)
  prod.save(function (err, book) {
    if (err) return console.error(err)
    console.log('cbje', resp)
    console.log('i record inserted')
  })

  // Product.insertMany(myobj, function (err, res) {
  //   if (err) throw err
  //   console.log('1 document inserted')
  //   console.log('1 record inserted')
})
router.delete('/delete/:id', (req, resp) => {
  var myobj = { _id: req.params.id }
  Product.deleteOne(myobj, function (err, res) {
    if (err) throw err
    console.log('1 record deleted')
  })
})
router.get('/edi/:id', (req, resp) => {
  // console.lohhhhg(req.params.id)
  // var myobj = { _id: mongoose.Types.ObjectId(req.params.id) }
  var myobj = { _id: req.params.id }
  Product.findOne(myobj, function (err, result) {
    if (err) throw err
    console.log('1 record found', result)
    resp.json(result)
  })
})
router.post('/update/', (req, resp) => {
  console.log('sssss', req)
  var qid = req.body._id
  var myobj = { name: req.body.name, price: req.body.price, quantity: req.body.quantity }
  Product.findByIdAndUpdate(qid, myobj, function (err, res) {
    if (err) throw err
    console.log('1 record updated')
  })
})

module.exports = router
