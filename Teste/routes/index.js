var express = require('express');
var router = express.Router();

var ProductsModel = require('../model/ProductsModel.js')

//cria dependencia e injeta o model
var ProductsController = require('../controller/ProductsController.js')(ProductsModel);

router.get('/products', function (req, res) {//http://localhost:3000/products
  res.json([
      {"name":"banana"},
      {"name":"laranja"},
      {"name":"pera"},
      {"name":"morango"}
  ]);
});

router.get('/products/:_id', function (req, res) {//http://localhost:3000/products/:_id=12
    debugger//58:00
    console.log(req.params);
    var _id = parseInt(req.params._id);
    res.json({"name":"banana", "id":_id});
});

//estatico
//router.post('/products', function (req, res) {
    //res.status(201).json({"status":"criado"});
//});
//dinamico controller
router.post('/products', ProductsController.create);//http://localhost:3000/products

router.put('/products/:_id', function (req, res) { 
    var _id = parseInt(req.params._id, 10);
    res.json({"status":"atualizado", "":_id});
});

router.delete('/products/:_id', function (req, res) { 
    var _id = parseInt(req.params._id);
    res.json({"status":"delete", "teste":_id});
});

//exportar as rotas
module.exports = router;

/*
C:\Program Files (x86)\MongoDB\Server\3.0\bin\
mongod.exe
*/