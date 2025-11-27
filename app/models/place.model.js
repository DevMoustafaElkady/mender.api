const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  governorate: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  workingHours: { type: String, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  description: { type: String, required: true },
  featured: { type: Boolean, default: false },
});

module.exports = mongoose.model("Place", placeSchema);
