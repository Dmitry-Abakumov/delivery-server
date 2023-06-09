const { ctrlWrapper } = require("../utils");

const { Dish } = require("../models/dish");

const getAllDishes = async (req, res) => {
  res.status(200).json(await Dish.find());
};

const getShoppingCart = async (req, res) => {
  const shoppingcart = await Dish.find({ shoppingCart: true });

  res.status(200).json(shoppingcart);
};

const getDishesByQuery = async (req, res) => {
  const { shop: restourant } = req.query;

  const data = await Dish.find({ restourant });

  res.status(200).json(data);
};

const updateShoppingCart = async (req, res) => {
  const { id } = req.params;

  const { shoppingCart } = await Dish.findById(id, "shoppingCart");

  const result = await Dish.findByIdAndUpdate(
    id,
    { shoppingCart: !shoppingCart },
    { new: true }
  );

  res.json(result);
};

module.exports = {
  getAllDishes: ctrlWrapper(getAllDishes),
  updateShoppingCart: ctrlWrapper(updateShoppingCart),
  getDishesByQuery: ctrlWrapper(getDishesByQuery),
  getShoppingCart: ctrlWrapper(getShoppingCart),
};
