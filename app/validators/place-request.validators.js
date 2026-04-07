const Joi = require("joi");

const placeSchema = Joi.object({
  type: Joi.string().required(),
  name: Joi.string().required(),
  governorate: Joi.string().required(),
  address: Joi.string().required(),
  phone: Joi.array().items(Joi.string().required()).min(1).required(),
  workingHours: Joi.string().required(),
  lat: Joi.number().required(),
  lng: Joi.number().required(),
  description: Joi.string().required(),
  featured: Joi.boolean(),
  speciality: Joi.string().required(),
  status: Joi.string()
    .valid("pending", "approved", "rejected")
    .default("pending"),
});

module.exports = placeSchema;
