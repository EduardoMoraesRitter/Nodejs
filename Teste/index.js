var express = require('express');
var app = express();

app.get('/', function (req, res) { // get(camnho, callback(requirido, retorno))
  //res.send('Hello Edu!');
  res.json({"nome":"eduardo"});//retorna um JSON
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});