'use strict'

const http = require('http')
const express = require('express')
const serverIndex = require('serve-index')

const PORT = 8080;

var app = express()
app.use(serverIndex('www'))
app.use(express.static('www'))

http.createServer(null, app).listen(PORT, function () {
    console.log('Https server listening on port ' + PORT);
});
