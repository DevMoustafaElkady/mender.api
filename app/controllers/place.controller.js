const placesService = require("../services/places.service");

exports.getAllPlaces = (req, res) => {
  const places = placesService.getAllPlaces();
  res.json({ data: places });
};

exports.GetPlaceById = (req, res) => {
  const placeId = parseInt(req.params.id, 10);
  const place = placesService.getPlaceById(placeId);
  if (place) {
    res.json({ data: place });
  } else {
    res.status(404).json({ message: "Place not found" });
  }
};

exports.addPlace = (req, res) => {
  const placeData = req.body;
  placesService.addPlace(placeData);
  res.status(201).json({ message: "Place added successfully", data: placeData });
};

exports.updatePlace = (req, res) => {
  const placeId = parseInt(req.params.id, 10);
  const updatedData = req.body;
  const updatedPlace = placesService.updatePlace(placeId, updatedData);
  if (updatedPlace) {
    res.json({ message: "Place updated successfully", data: updatedPlace });
  } else {
    res.status(404).json({ message: "Place not found" });
  }
};

exports.deletePlace = (req, res) => {
  const placeId = parseInt(req.params.id, 10);
  placesService.deletePlace(placeId);
  res.json({ message: "Place deleted successfully" });
};
