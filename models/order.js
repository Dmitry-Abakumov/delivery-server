const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../utils");

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

orderSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `missing required name field`,
  }),
  email: Joi.string().required().messages({
    "any.required": `missing required email field`,
  }),
  phone: Joi.string().required().messages({
    "any.required": `missing required phone field`,
  }),
  address: Joi.string().required().messages({
    "any.required": `missing required address field`,
  }),
  order: Joi.array().items(
    Joi.object({
      item: Joi.string().required().messages({
        "any.required": `missing required item field`,
      }),
      amount: Joi.number().required().messages({
        "any.required": `missing required amount field`,
      }),
      price: Joi.number().required().messages({
        "any.required": `missing required price field`,
      }),
    })
      .required()
      .messages({
        "any.required": `missing required order field`,
      })
  ),
  totalPrice: Joi.number().required().messages({
    "any.required": `missing required totalPrice field`,
  }),
});
const Order = model("contact", orderSchema);

const schemas = {
  addSchema,
};

module.exports = {
  Order,
  schemas,
};
