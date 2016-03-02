//node trabalha com rotas igual o MVC
//express é o framework que trabalha com rotas

var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200, {"content-Type": "text/html"});

	if(req.url == '/'){
		res.write("<h1>Página principal</h1>");
	}else if(req.url == '/contato'){
		res.write("<h1>Página contato</h1>");
	}else if(req.url == '/clientes'){
		res.write("<h1>Página clientes</h1>");
	}else if(req.url == '/clientes/nome'){
		res.write("<h1>Página clientes: edu</h1>");
	}else{
		res.write("<h1>Página nao encontrada</h1>");
	}
	res.end();
});

server.listen(3000, function(){
	console.log('Aula2 - rotas, rodando')
});
//cmder - console no github, modificado