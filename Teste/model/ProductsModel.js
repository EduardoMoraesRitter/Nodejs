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

ProductsModel.prototype.update = function(id, data, callback) {

    //funciona, passando para o sabe o objeto inteiro com o _id, perfeitamente funciona, porem ele altera todo o documento
    //mongo.collection('products').save({_id:"57cde10ad37da92eb02dfe3f",user:"ritter"}

    //funciona, passa o id e apenas o campo q deseja alterar com o $set:
    //mongo.collection('products').update({_id:"57cde10ad37da92eb02dfe3f" }, {$set: {user:"moraes"}}

    //funciona destro o antigo objeto e cria um novo documento eliminado o antigo
    //mongo.collection('products').update({_id:"57cde10ad37da92eb02dfe3f" }, {testes:"hhh", teste:"edu"}

    //consulta e altera o documento
    //mongo.collection('products').update({testes:"hhh"}, {testess:"ritter"}
    //,function(err, updated) {if (err || !updated) console.log("User not updated");else console.log("User updated");});

    //basico consulta por id senao inclui se encontrar atualiza, porem eleimina o documento existente
    //mongo.collection('products').update({_id: mongo.ObjectId(id)}, data, callback);

    //findAndModify https://mongodb.github.io/node-mongodb-native/markdown-docs/insert.html | https://howtonode.org/node-js-and-mongodb-getting-started-with-mongojs

    //consulta por id e inclui um item no documento
    //mongo.collection('products').update({ _id: mongo.ObjectId(id) }, { $set: { idade: 40 } }, { upsert: true }, callback);

    //mongo.collection('products').update({ _id: mongo.ObjectId(id) }, { $setOnInsert: { data, dataCriacao: new Date() }, $inc: { likes: 1 } }, { upsert: true }, callback);

    mongo.collection('products').update({ _id: mongo.ObjectId(id) }, data, callback);
    /*  , 
    // find one named 'mathias', tag him as a contributor and return the modified doc
    db.mycollection.findAndModify({
        query: { name: 'mathias' },
        update: { $set: { tag: 'maintainer' } },
        new: true
    }, function (err, doc, lastErrorObject) {
        // doc.tag === 'maintainer'
    })
    */
}

ProductsModel.prototype.delete = function(id, callback) { //dentro o objeto create
    mongo.collection('products').remove({ _id: mongo.ObjectId(id) });
    //mongo.collection('products').remove({ data });

}

module.exports = new ProductsModel();

//1:29:30