var mongojs = require('mongojs')
var db = mongojs('nodecrud');
//posso colocar senha e tal
module.exports = db;

/*
c:
cd C:\Program Files (x86)
MongoDB\Server\3.0\bin\mongod.exe
*/

//C:\MongoDB\Bin\mongod.exe

/*
referencias : 
http://nomadev.com.br/mongodb-trabalhando-com-o-terminal-parte-1/
http://lucasmaiaesilva.com.br/mongodb-opera%C3%A7%C3%B5es-de-crud/

*/