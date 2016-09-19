var express = require('express');
var router = express.Router();

var ProductsModel = require('../model/ProductsModel.js')
var ProductsController = require('../controller/ProductsController.js'); //(ProductsModel);

router.get('/products', ProductsController.findAll.bind(ProductsController));
router.get('/products/:_id', ProductsController.findOne.bind(ProductsController));
router.post('/products', ProductsController.create.bind(ProductsController));
router.put('/products/:_id', ProductsController.update.bind(ProductsController));
router.delete('/products/:_id', ProductsController.delete.bind(ProductsController));

module.exports = router;

/*
router.get('/products', ProductsController.findAll.call(ProductsController));
mesmo coisa do call e apply, q sao executado no momento da chamada
Objetc.call(); -- um recebe um array de parametro
Objetc.apply(); -- o outro recebe uma lista

o bind so vai mudar o contexto, para ser alterado apenas no callback
so é executada quando a rota é chamada (virando assim um callback dessa rota)
Objetc.bind();


erro do express:
http://nomadev.com.br/node-js-melhor-visualiza%C3%A7%C3%A3o-de-erros-no-express/
 */