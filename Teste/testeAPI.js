var express = require('express');
//var bodyParser = require('body-parser');

var app = express();
//app.use(bodyParser.urlencoded({
// extended: true
//}));
//app.use(bodyParser.json());

app.listen(2000);

//funciona, caso queira acessar via ajax, pelo console, ou tiver proxy - http://enable-cors.org/server_expressjs.html 
/*
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
*/
app.post("/", function(req, res) {
    console.log(req.body)
    res.send({ "ok": "post" });
});

app.get("/", function(req, res) {
    console.log({ "ok": "get" })
    res.send({ "ok": "get" });
});

/*
bodyParser = require('body-parser').json();
app.post('/itemSearch', bodyParser, function(req, res) {
  console.log("Yoooooo");
  console.log(req.headers);
  console.log(req.body);
  res.status(200).send("yay");
});
*/

/*
testar direto no console
$.get("http://localhost:2000/").done(function(response) {
 console.table(response.items);
});


$.ajax({
  type: "POST",
  url: 'http://localhost:2000/',
  data: {"teste":"hhhh"},
  success: function() { console.log("Success"); },
  datatype: 'application/json'
});

$.post("http://localhost:2000/").done(function(response) {
 console.table(response.items);
});
 */