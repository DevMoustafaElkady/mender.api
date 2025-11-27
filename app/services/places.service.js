const Place = require("../models/place.model");

// get all places method
exports.getAllPlaces = () => {
  return Place.find();
};

// get place by ID method
exports.getPlaceByID = (id) => {
    return Place.findById(id);
}

//  add place
exports.addPlace = (placeData) => {
  const newPlace = new Place(placeData);
  return newPlace.save();
};




