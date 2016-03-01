var http = require('http');

var server = http.createServer(function(request, response){
	response.writeHead(200, {"content-Type": "text/html"});
	response.write("<h1>Hello Word</h1>");
	response.end();
});

server.listen(3000, function(){
	console.log('Aula2 - rotas, rodando')
});
//cmder - console no github, modificado