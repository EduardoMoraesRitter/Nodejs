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