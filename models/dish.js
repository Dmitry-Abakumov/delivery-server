const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../utils");

const orderSchema = new Schema(
  {
    name: {
      type: String,
    },
    img: {
      type: String,
    },
    shoppingCart: {
      type: Boolean,
    },
    restourant: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

orderSchema.post("save", handleMongooseError);

const updateShoppingCartSchema = Joi.object({
  shoppingCart: Joi.boolean().required().messages({
    "any.required": `missing required name field`,
  }),
});
const Dish = model("dish", orderSchema);

const schemas = {
  updateShoppingCartSchema,
};

module.exports = {
  Dish,
  schemas,
};
