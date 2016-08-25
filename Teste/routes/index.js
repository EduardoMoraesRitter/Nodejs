var express = require('express');
var router = express.Router();

router.get('/products', function (req, res) {
  res.json([
      {"name":"banana"},
      {"name":"laranja"},
      {"name":"pera"},
      {"name":"morango"}
  ]);
});

router.get('/products/:_id', function (req, res) {
    console.log(req.params);
    var _id = parseInt(req.params._id);
    res.json({"name":"banana", "id":_id});
});

router.post('/products', function (req, res) {
    res.status(201).json({"status":"criado"});
});

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