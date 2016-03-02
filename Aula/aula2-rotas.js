//node trabalha com rotas igual o MVC
//express � o framework que trabalha com rotas

var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200, {"content-Type": "text/html"});

	if(req.url == '/'){
		res.write("<h1>P�gina principal</h1>");
	}else if(req.url == '/contato'){
		res.write("<h1>P�gina contato</h1>");
	}else if(req.url == '/clientes'){
		res.write("<h1>P�gina clientes</h1>");
	}else if(req.url == '/clientes/nome'){
		res.write("<h1>P�gina clientes: edu</h1>");
	}else{
		res.write("<h1>P�gina nao encontrada</h1>");
	}
	res.end();
});

server.listen(3000, function(){
	console.log('Aula2 - rotas, rodando')
});
//cmder - console no github, modificado