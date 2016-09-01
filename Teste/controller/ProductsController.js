function ProductsController(Model) {
    this.Model = Model;
};

ProductsController.prototype.create = function (req, res) {
      console.log('teste');
      res.status(201).json({"status":"criado"});
      console.log(req);
      //57:00
};

module.exports = function (Model) {
      return new ProductsController(Model);
}

