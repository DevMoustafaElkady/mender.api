const Joi = require("joi"); // خلي الحرف كبير عشان standard

// Define the schema for place validation
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
});

module.exports = placeSchema;
