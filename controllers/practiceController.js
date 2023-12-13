const PracticeModel = require('../models/practiceModel');

exports.getAllProduct = (req, res) => {
  res.send({
    success: true,
    data: PracticeModel.getAllProduct()
  });
  res.end();
}
