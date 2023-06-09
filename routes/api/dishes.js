const express = require("express");

const ctrl = require("../../controllers/dishes-controllers");
// const { validateBody } = require("../../utils");
const { isValidId } = require("../../middlewares");
// const { schemas } = require("../../models/dish");

const router = express.Router();

router.get("/", ctrl.getDishesByQuery);

router.get("/shopping-cart", ctrl.getShoppingCart);

router.patch(
  "/:id/shopping-cart",
  isValidId,
  // validateBody(schemas.updateShoppingCartSchema),
  ctrl.updateShoppingCart
);

module.exports = router;
