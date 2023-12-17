const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  id: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true
  }
})

const Product = mongoose.model('product', productSchema);

class practiceModel {
  constructor() {};

  async getAllProduct() {
    return await Product.find();
  };

  async postProduct(params) {
    const productResponae = await Product.create({
      id: uuidv4(),
      title: params.title
    });

    return productResponae;
  };

  async deleteProduct(params) {
    await Product.deleteOne({ id: params.id });

    return this.products;
  }
}

module.exports = new practiceModel();