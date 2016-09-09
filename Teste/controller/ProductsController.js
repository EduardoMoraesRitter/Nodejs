var ProductsModel = require('../model/ProductsModel');

function ProductsController(Model) {
    this.Model = Model;
};

ProductsController.prototype.findAll = function(req, res) {
    res.json(this.Model.findAll(function(err, res) {
        //console.log(err, res);
        return res;
    }));
};

ProductsController.prototype.findOne = function(req, res) {
    var date = req.body;
    _id = req.params.id;
    res.status(201).json({ "findOne": "findOne" });
};

ProductsController.prototype.create = function(req, res) {
    var data = req.body;
    this.Model.create(data, function(err, res) { // no calback primeiro o err depois o resposta
        console.log(err, res);
    });
    res.status(201).json({ "create": "create" });
};

ProductsController.prototype.update = function(req, res) {
    _id = req.params.id;
    res.status(201).json({ "update": "update" });
};

ProductsController.prototype.delete = function(req, res) {
    _id = req.params.id;
    res.status(201).json({ "delete": "delete" });
};

module.exports = new ProductsController(ProductsModel);

//curl -H "Content-Type: application/json" \ -d '{"name":"Jane Doe"}' http://localhost:3000/products

/*
$.ajax({
  dataType: 'json',
  contentType: 'application/json',
  url: 'http://localhost:3000/products',
  data: {"name": "Jane Doe"}
});
 */