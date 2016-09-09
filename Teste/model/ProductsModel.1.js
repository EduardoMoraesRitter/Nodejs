var mongo = require('../dbs/mongo');//chamar o mongo
function ProductsModel() {//funcao construtora
     this.create = function (data, callback) {
        mongo.collection('products').save(data, callback);
    };
}

module.exports = new ProductsModel();
