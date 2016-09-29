var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override') //como o html nao tende o metodo PUT e DELETE, esse cara sobre escreve

//chamar o router
var routes = require('./routes/index'); //cuidado com o mesmo nome, pode chamar uma pasta com o arquivo index dentro

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(methodOverride('X-HTTP-Method')); // Microsoft
app.use(methodOverride('X-HTTP-Method-Override')); // Google/GData
app.use(methodOverride('X-Method-Override')); // IBM
app.use(methodOverride('_method'));

//assim tira as rota de dentro - *colocar as funcoes antes de declarar as rotas, senao nao pega
app.use('/', routes);

var server = app.listen(3000, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('rodando!', host, port);

});
//https://www.infoq.com/br/presentations/nodejs-estruturando-suas-aplicacoes
//https://www.infoq.com/br/presentations/super-tests-in-nodejs#mainLogin