const express = require('express')
const mustacheExpress =require( 'mustache-express');
const path = require('path');
const cors = require('cors')
const app = express()

const corsOption = {
  credentials: true,
  methods: ["POST", "PUT", "DELETE", "PATCH", "GET"],
}

app.use(cors(corsOption));
app.engine('mustache', mustacheExpress());

app.set('view engine', 'html');
app.set('views', __dirname + '/dist');
app.use(express.static(path.join(__dirname, 'dist')));        
app.listen(3001, () => console.log(`Example app listening on port ${3001}`))

module.exports = app
