const express = require("express");

const ctrl = require("../../controllers/orders-controllers");
const { validateBody } = require("../../utils");
const { schemas } = require("../../models/order");

const router = express.Router();

router.post("/", validateBody(schemas.addSchema), ctrl.addOrder);

module.exports = router;
