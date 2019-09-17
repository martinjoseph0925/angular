const express = require("express");
const http = require("http");
const app = express();
const server = http.Server(app);
const port = 3000
const test = require('./router/test.js')
const bodyParser = require("body-parser");
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

app.use('/test', test)


server.listen(port, () => {
   console.log('server started at port' + port)
})
