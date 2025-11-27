// const placesService = require("../services/places.service");
const Place = require("../models/place.model");

exports.getAllPlaces = (req, res) => {
  Place.find()
    .then((places) => {
      res.status(200).json({ data: places });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error retrieving places", error: err });
    });
};

exports.GetPlaceById = (req, res) => {
  Place.findById(req.params.id)
    .then((place) => {
      if (place) {
        res.status(200).json({ data: place });
      } else {
        res.status(404).json({ message: "Place not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error retrieving place", error: err });
    });
};

exports.addPlace = (req, res) => {
  const newPlace = new Place(req.body);
  newPlace.save();
  const placeData = req.body;
  res
    .status(201)
    .json({ message: "Place added successfully", data: placeData });
};

exports.updatePlace = (req, res) => {
  const placeId = parseInt(req.params.id, 10);
  const updatedData = req.body;
  if (updatedPlace) {
    res.json({ message: "Place updated successfully", data: updatedPlace });
  } else {
    res.status(404).json({ message: "Place not found" });
  }
};

exports.deletePlace = (req, res) => {
  const placeId = parseInt(req.params.id, 10);
  res.status(200).json({ message: "Place deleted successfully" });
};
