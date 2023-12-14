const { v4: uuidv4 } = require('uuid');
console.log(uuidv4())

class practiceModel {
  constructor() {
    this.products = [{
      id: uuidv4(),
      title: 'product1'
    }, {
      id: uuidv4(),
      title: 'product2'
    }, {
      id: uuidv4(),
      title: 'product3'
    }, {
      id: uuidv4(),
      title: 'product4'
    }];
  };

  getAllProduct() {
    return this.products;
  };

  postProduct(params) {
    this.products.push({
      id: uuidv4(),
      title: params.title
    });

    return this.products;
  };

  deleteProduct(params) {
    this.products.forEach((product, index) => {
      if (product.id === params.id) this.products.splice(index, 1);
    });

    return this.products;
  }
}

module.exports = new practiceModel();