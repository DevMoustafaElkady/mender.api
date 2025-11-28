const joi = require("joi");

// Define the schema for place validation
const placeSchema = joi.object({
  type: joi.string().required(),
  name: joi.string().required(),
  governorate: joi.string().required(),
  address: joi.string().required(),
  phone: joi.string().required(),
  workingHours: joi.string().required(),
  lat: joi.number().required(),
  lng: joi.number().required(),
  description: joi.string().required(),
  featured: joi.boolean(),
  speciality: joi.string().required(),
});


module.exports = placeSchema;