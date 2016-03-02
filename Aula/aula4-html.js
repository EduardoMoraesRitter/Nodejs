var http = require('http');
var arquivo = require('fs');
// _dirname - uma constante
var path = './arquivos/index_aula4.html';

var server = http.createServer(function(req, res) {
	res.writeHead(200, {"Content-Type": "text/html"});

	if (req.url == '/') {		
		path = './arquivos/index_aula4.html';
	}else if (req.url == '/contatos') {
		path = './arquivos/contatos_aula4.html';
	}else{
		res.write('pagina nao encontrado');
	};

	arquivo.readFile(path, function (err, html) {
		if (err){
			res.write('arquivo nao encontrado');
		}else{
			res.write(html);
		};
	res.end();
	});	
});

server.listen(3000, function(){
	console.log('sever rodando');
});
