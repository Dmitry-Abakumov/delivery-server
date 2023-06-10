const { ctrlWrapper } = require("../utils");

const { HttpError } = require("../helpers");

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

  if (!data) throw HttpError(404, "Not found");

  res.status(200).json(data);
};

const updateShoppingCart = async (req, res) => {
  const { id } = req.params;

  const { shoppingCart } = await Dish.findById(id, "shoppingCart");

  const data = await Dish.findByIdAndUpdate(
    id,
    { shoppingCart: !shoppingCart },
    { new: true }
  );

  if (!data) throw HttpError(404, "Not found");

  res.json(data);
};

module.exports = {
  getAllDishes: ctrlWrapper(getAllDishes),
  updateShoppingCart: ctrlWrapper(updateShoppingCart),
  getDishesByQuery: ctrlWrapper(getDishesByQuery),
  getShoppingCart: ctrlWrapper(getShoppingCart),
};
