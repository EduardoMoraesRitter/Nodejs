var mongojs = require('mongojs')
var db = mongojs('nodecrud');
//posso colocar senha e tal
module.exports = db;