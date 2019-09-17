const express = require('express')
const http = require('http')
const app = express()
const server = http.Server(app)
const port = 3000
const test = require('./router/test.js')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/test');
mongoose.Promise = global.Promise;
mongoose.connection.on('connected', () => {
  console.log("database connected")
});
mongoose.connection.on('error', (err) => {
  if (err) throw err
  console.log("database Error" + err)
});

app.use(cors())
app.use(bodyParser.json())
app.use('/test', test)
server.listen(port, () => {
  console.log('server started at port' + port)
})
