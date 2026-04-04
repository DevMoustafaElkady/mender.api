const Place = require("../models/place.model");
const PlaceRequest = require("../models/place-request.model");

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

// update place
exports.updatePlace = (id, placeData) => {
  return Place.findByIdAndUpdate(id, placeData, { new: true });
};

// delete place
exports.deletePlace = (id) => {
  return Place.findByIdAndDelete(id);
};

// get all places method
exports.getAllPlacesRequests = () => {
  return PlaceRequest.find();
};

// add place request
exports.addPlaceRequest = (placeRequestData) => {
  const newPlaceRequest = new PlaceRequest(placeRequestData);
  return newPlaceRequest.save();
}


