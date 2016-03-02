/*
File System
como escrever e ler agquivos com node
temq importar o modulo fs, vem por default no node

fs.readFile(file, [OPTIONS], callback) - ler o arquivo, usado tres parametros.
fs.writeFile(file, data, [OPTIONS], callback) - escrever o arquivo, quatro parametros.
*/

var arquivo = require('fs');

var path = './arquivos/novo_aula3.txt';

arquivo.readFile('./arquivos/clubes_aula3.txt', function(err, data){
	if(err) throw err;
	console.log(data.toString());
});

//esse é mais rapido, pq é assincrono.
arquivo.exists(path, function(result){
	if(!result){
		arquivo.writeFile(path, 'criando arquivo novo', function(err){
			if(err) throw err;
			console.log('arquivo criado com sucesso');
		});
	}else{
		console.log('arquivo ja existe');
	}
});



var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200, {"content-Type": "text/html"});

	res.write("<h1>Página principal</h1>");
	res.write("<br>");
	res.write("<h3>Log de Url</h3>");

	var txt = arquivo.createWriteStream('./arquivos/logs_aula3.txt', {flags: 'a'});
	txt.write(req.url +'\n');

	res.end();
	
	console.log('Log criado com sucesso');
});

server.listen(3000, function(){
	console.log('Aula2 - rotas, rodando')
});