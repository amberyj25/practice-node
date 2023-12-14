const PracticeModel = require('../models/practiceModel');

exports.getAllProduct = ( req, res) => {
  res.send({
    success: true,
    data: PracticeModel.getAllProduct()
  });
  res.end();
}

exports.postProdcut = (req, res) => {
  // postMan params from body
  const product = req.body;
  res.send(PracticeModel.postProduct(product));
  res.end();
}

exports.postProdcutQuery = (req, res) => {
  // postMan params from query(url?後)
  const product = req.query;
  res.send(PracticeModel.postProduct(product));
  res.end();
}

exports.deleteProdcut= (req, res) => {
  const deleteProduct = req.body;
  res.send(PracticeModel.deleteProduct(deleteProduct));
  res.end();
}

exports.deleteProdcutQuery = (req, res) => {
  const deleteProduct = req.params;
  res.send(PracticeModel.deleteProduct(deleteProduct));
  res.end();
}