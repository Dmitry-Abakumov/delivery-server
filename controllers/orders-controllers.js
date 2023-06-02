const { ctrlWrapper } = require("../utils");

const { Order } = require("../models/order");

const addOrder = async (req, res) => {
  res.status(201).json(await Order.create(req.body));
};

module.exports = {
  addOrder: ctrlWrapper(addOrder),
};
