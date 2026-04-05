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


// Approve Place Request
exports.approvePlaceRequest = (id) => {
  return PlaceRequest.findById(id).then((placeRequest) => {
    if (!placeRequest) {
      throw new Error("Place request not found");
    }

    // Create a new place based on the approved request
    const newPlace = new Place({
      type: placeRequest.type,
      name: placeRequest.name,
      governorate: placeRequest.governorate,
      address: placeRequest.address,
      phone: placeRequest.phone,
      workingHours: placeRequest.workingHours,
      lat: placeRequest.lat,
      lng: placeRequest.lng,
      description: placeRequest.description,
      featured: placeRequest.featured,
      speciality: placeRequest.speciality,
    });

    // Save the new place and update the request status
    return newPlace.save().then((savedPlace) => {
      placeRequest.status = "approved";
      return placeRequest.save().then(() => savedPlace);
    });
  });
}


