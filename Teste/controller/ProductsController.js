var ProductsModel = require('../model/ProductsModel');

function ProductsController(Model) {
    this.Model = Model;
};

ProductsController.prototype.findAll = function(req, res) {
    //res.json(this.Model.findAll(function(err, res) {
    //    return res;
    //}));
    this.Model.findAll(function(err, result) {
        console.log(err, result);
        res.json(result);
    });
};

ProductsController.prototype.findOne = function(req, res) {
    var x = req.params._id;
    this.Model.findOne(x, function(err, result) {
        console.log(err, result);
        res.json(result);
    });
};

ProductsController.prototype.create = function(req, res) {
    var data = req.body;
    this.Model.create(data, function(err, result) { // no calback primeiro o err depois o resposta
        console.log(err, result);
    });
    res.status(201).json({ "create": "create" });
};

ProductsController.prototype.update = function(req, res) {
    var data = req.body;
    var id = req.params._id;
    this.Model.update(id, data, function(err, result) { // no calback primeiro o err depois o resposta
        console.log(err, result);
    });
    res.status(201).json({ "update": "update" });
};

ProductsController.prototype.delete = function(req, res) {
    var id = req.params._id;
    this.Model.delete(id, function(err, result) { // no calback primeiro o err depois o resposta
        res.json(result);
    });
    res.status(201).json({ "delete": "delete" });
};

module.exports = new ProductsController(ProductsModel);

//promissyFyAll ou bluebird tranforma o callback em um promessy  : function(err, result) {

//curl -H "Content-Type: application/json" \ -d '{"name":"Jane Doe"}' http://localhost:3000/products

/*
$.ajax({
  dataType: 'json',
  contentType: 'application/json',
  url: 'http://localhost:3000/products',
  data: {"name": "Jane Doe"}
});
 */