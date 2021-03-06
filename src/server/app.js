const http = require('http');
const path = require('path');
const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.use(express.static(path.join(__dirname, '..', '/client/public')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function() {
  console.log('Listening on ' + port);
});
console.log('Running at port 3000');

