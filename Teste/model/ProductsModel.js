var mongo = require('../dbs/mongo'); //chamar o mongo
function ProductsModel() { //funcao construtora

}

ProductsModel.prototype.findAll = function(callback) {
    mongo.collection('products').find({}, callback);
};

ProductsModel.prototype.findOne = function(_id, callback) { //dentro o objeto create
    mongo.collection('products').find({ _id: _id }, callback);
}

ProductsModel.prototype.create = function(data, callback) { //dentro o objeto create
    mongo.collection('products').save(data, callback);
}

ProductsModel.prototype.update = function(data, _id, callback) { //dentro o objeto create
    mongo.collection('products').update(data, callback);
}

ProductsModel.prototype.delete = function(_id, callback) { //dentro o objeto create
    mongo.collection('products').remove({ _id: _id }, callback);
}

module.exports = new ProductsModel();

//1:16:50