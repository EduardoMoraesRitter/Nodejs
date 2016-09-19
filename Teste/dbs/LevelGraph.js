/*
http://nomadev.com.br/levelgraph-um-banco-de-dados-de-grafos-para-node-js/
https://github.com/google/leveldb
https://www.npmjs.com/package/levelgraph

http://www.devmedia.com.br/devcast/
*/

var levelgraph = require("levelgraph");
var db = levelgraph("yourdb");

var triple = { sujeito: "a", predicado: "b", objeto: "c" };

db.put(triple, function(err) {
    if (err) console.log('ERROR: ', err);

    console.log('INSERIU');
    db.get({ sujeito: "a" }, function(err, list) {
        console.log(list);
    });
});