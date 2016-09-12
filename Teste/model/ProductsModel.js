var mongo = require('../dbs/mongo'); //chamar o mongo
function ProductsModel() { //funcao construtora

}

ProductsModel.prototype.findAll = function(callback) {
    mongo.collection('products').find({}, callback);
};

ProductsModel.prototype.findOne = function(_id, callback) { //dentro o objeto create
    mongo.collection('products').findOne({ "_id": mongo.ObjectId(_id) }, callback);
}

//findOne - sempre retorna um objeto so
//find - retorna um array

ProductsModel.prototype.create = function(data, callback) { //dentro o objeto create
    mongo.collection('products').save(data, callback);
}

/*
ProductsModel.prototype.update = function(data, _id, callback) { //dentro o objeto create
    mongo.collection('products').update(data, callback);
}
*/

ProductsModel.prototype.update = function(data, callback) {
    console.log(data);
    mongo.collection('products').update({ name: 'hhhh' }, { $set: { name: 'hhhh' } }
        //{email: "srirangan@gmail.com"}, {$set: {password: "iReallyLoveMongo"}}
        ,
        function(err, updated) {
            if (err || !updated) console.log("User not updated");
            else console.log("User updated");
        });
}

ProductsModel.prototype.delete = function(_id, callback) { //dentro o objeto create
    mongo.collection('products').remove({ _id: _id }, callback);
}

module.exports = new ProductsModel();

//1:29:30