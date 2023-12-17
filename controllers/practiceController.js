const PracticeModel = require('../models/practiceModel');

exports.getAllProduct = async (req, res) => {
  try {
    res.send({
      success: true,
      data: await PracticeModel.getAllProduct()
    });

    res.end();
  } catch (err) {
    console.log(err);
  }
}

exports.postProdcut = async (req, res) => {
  // postMan params from body
  try {
    const product = req.body;
    res.send({
      success: true,
      data: await PracticeModel.postProduct(product)
    });

    res.end();
  } catch(err) {
    console.log(err);
  }
}

exports.postProdcutQuery = async (req, res) => {
  try {
    // postMan params from query(url?後)
    const product = req.query;
    res.send({
      success: true,
      data: await PracticeModel.postProduct(product)
    });

    res.end();
  } catch (err) {
    console.log(err);
  }
}

exports.deleteProdcut = async (req, res) => {
  try {
    const deleteProduct = req.body;
    res.send({
      success: true,
      data: await PracticeModel.deleteProduct(deleteProduct)
    });

    res.end();
  } catch (err) {
    console.log(err);
  }
}

exports.deleteProdcutQuery = async (req, res) => {
  try {
    const deleteProduct = req.params;
    res.send({
      success: true,
      data: await PracticeModel.deleteProduct(deleteProduct)
    });

    res.end();
  } catch (err) {
    console.log(err);
  }
}