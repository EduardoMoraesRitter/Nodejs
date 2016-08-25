var express = require('express');
var app = express();

app.get('/products', function (req, res) { // (verbo, callback(requirido, retorno))
  res.json([
      {"name":"banana"},
      {"name":"laranja"},
      {"name":"pera"},
      {"name":"morango"}
  ]);
});

app.get('/products/:_id', function (req, res) { // (verbo :_id é o parametro, callback(requirido, retorno))
    console.log(req.params);//dentro do requeste
    var _id = parseInt(req.params._id);// "_"id porque geo padrao do mongo q vai ser string
    res.json({"name":"banana", "id":_id});
});

app.post('/products', function (req, res) { //post no terminal  > curl - d '{"nome":"edu"}' http://localhost:3000/products
    res.status(201).json({"status":"criado"});//201 para ok
});

app.put('/products/:_id', function (req, res) { 
    var _id = parseInt(req.params._id, 10);
    res.json({"status":"atualizado", "":_id});
});

app.delete('/products/:_id', function (req, res) { 
    var _id = parseInt(req.params._id, 10);
    res.json({"status":"delete", "":_id});
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('rodando!', host, port);

});

//explicacao de REST : teach a dog to rest
//para nao restartar toda hora : nodemon
//>nodemon index.js

/****rodar teste:
no .json existe essa linha
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
no terminal roda :
>test index.js
*/

/*****Rodas um Shell
 * poderia ser qualquer coisa
"start": "nodemon index.js",
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
>npm start
$rs
 * para fazer um reload
*/

/*****Monitorar aplicação - forever
"start": "forever index.js",
*/

