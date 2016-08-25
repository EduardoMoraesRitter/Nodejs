var express = require('express');
var app = express();

//chamar o router
var routes = require('./routes/index');//cuidado com o mesmo nome, pode chamar uma pasta com o arquivo index dentro

//assim tira as rota de dentro
app.use('/', routes);

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('rodando!', host, port);

});
//3800


//ctrl + j = terminal

