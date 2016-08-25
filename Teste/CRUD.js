var express = require('express');
var app = express();

//Responder com Hello World! na página inicial:
app.get('/', function (req, res) {
    console.log('GET');
    res.send('Hello World!');
});

//Responder a uma solicitação POST na rota raiz (/) com a página inicial do aplicativo:
app.post('/a', function (req, res) {
    console.log('POST');
    res.send('Got a POST request');
});

//Responder a uma solicitação PUT para a rota /user:
app.put('/b', function (req, res) {
    console.log('PUT');
    res.send('Got a PUT request at /user');
});

//Responder a uma solicitação DELETE para a rota /user:
app.delete('/c', function (req, res) {
    console.log('DELETE');
	res.send('Got a DELETE request at /user');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});