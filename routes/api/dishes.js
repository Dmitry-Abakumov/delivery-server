const express = require("express");

const ctrl = require("../../controllers/dishes-controllers");
const { isValidId } = require("../../middlewares");

const router = express.Router();

router.get("/", ctrl.getDishesByQuery);

router.get("/shopping-cart", ctrl.getShoppingCart);

router.patch("/:id/shopping-cart", isValidId, ctrl.updateShoppingCart);

module.exports = router;
