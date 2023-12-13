const { v4: uuidv4 } = require('uuid');
console.log(uuidv4())

class practiceModel {
  constructor() {
    this.products = [{
      id: uuidv4(),
      title: 'product1'
    },{
      id: uuidv4(),
      title: 'product2'
    },{
      id: uuidv4(),
      title: 'product3'
    },{
      id: uuidv4(),
      title: 'product4'
    }]
  }

  getAllProduct() {
    return this.products;
  }
}

module.exports = new practiceModel();