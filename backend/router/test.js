const express = require('express')
const router = express.Router()

var mysql = require('mysql')

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
})

con.connect(function (err) {
  if (err) throw err
  console.log('Connected!')
  // var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table created");
  // });
})
router.get('', (req, resp) => {
  console.log('sssss')
  resp.send({ test: req.params.data })
})
router.get('/getproduct', (req, resp) => {
  // console.log('sssss');
  // resp.send({ test: req.params.data })
  con.query('SELECT * FROM product', function (err, result) {
    if (err) throw err
    console.log('gee', result)
    resp.json(result)
  })
})

router.post('', (req, resp) => {
  // console.log('sssss', req)

  var sql = "INSERT INTO product (name,price,quantity) VALUES ('" + req.body.username + "','" + req.body.price + "','" + req.body.quantity + "')"
  con.query(sql, function (err, result) {
    if (err) throw err
    resp.send({ msg: '1 record inserted' })
    //   console.log("1 record inserted");
  })
})
router.delete('/delete/:id', (req, resp) => {
  // console.log('sssss', req)

  var sql = 'DELETE FROM product WHERE id= ?'
  con.query(sql, [req.params.id], function (err, result) {
    if (err) throw err
    console.log('1 record deleted')
  })
})
router.get('/edi/:id', (req, resp) => {
  console.log('reached here')
  con.query('SELECT * FROM product WHERE id=?', [req.params.id], function (err, result) {
    if (err) throw err
    console.log('gee', result)
    resp.json(result)
  })
})
router.post('/update/', (req, resp) => {
  // console.log('sssss', req)

  var sql = "UPDATE  product SET name='" + req.body.name + "' , price='" + req.body.price + "', quantity='" + req.body.quantity + "' WHERE id='" + req.body.id + "'"
  con.query(sql, function (err, result) {
    if (err) throw err
    console.log('1 record UPDATED')
    resp.json({ status: true })
  })
})
module.exports = router
