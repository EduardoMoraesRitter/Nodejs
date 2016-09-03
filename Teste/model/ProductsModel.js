var mongo = require('../dbs/mongo');

//funcao construtora
function ProductsModel() {
    
}

ProductsModel.prototype.create = function (data, callback) {
    debugger
    mongo.collection('products').save(data, callback);
}

module.exports = new ProductsModel();
