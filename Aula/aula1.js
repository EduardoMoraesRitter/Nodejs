/*
NodeJS - sua arquitertura é totalmente non-blocking thread(nao bloqueia), boa performace em consumo de memoria, 
multi servidores, o usuarios podem aguardar livre de aguardar muito sem receber dead-locks, 
trabalhando diretamente com protocolos de rede(HTTP, HTTPs, FTP, SSH, DNS, TCP, UDP, WebSockets), ultilizando bibliotecas para usar recursos do sistema, 
tudo isso graças ao V8 do JS baseado no Unix. desenvolvido em 2009.
*/

//modulo http, que ja vem por default instalado
var http = require('http');

//chama o http e cria um servidor
//request - requisitando & response - repondendo
var server = http.createServer(function(request, response){
	//a resposta do timo html
	response.writeHead(200, {"content-Type": "text/html"});
	//com a mesagem dentro
	response.write("<h1>Hello Word</h1>");
	//um fechar
	response.end();
});
//servidor na portar 3000
server.listen(3000);

//ou, outra forma de listar

//colocando o callback, impreso na tela
server.listen(3000, function(){
	console.log('servidor hello word rodando')
});

//para levantar o verfidor 
/*
dica - ctrl+C : duas vezes para sair do console do node

1-va ate o local do arquivo, usando o pronpt
2-depois node aula1.js, pronto

*/