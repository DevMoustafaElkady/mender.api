// const placesService = require("../services/places.service");
const Place = require("../models/place.model");
const placeService = require("../services/places.service");

exports.getAllPlaces = (req, res) => {
  placeService.getAllPlaces().then((places) => {
    res.status(200).json({ data: places });
  }).catch((err) => {
    res.status(500).json({ message: "Error retrieving places", error: err });
  });
};

exports.GetPlaceById = (req, res) => {
  placeService.getPlaceByID(req.params.id).then((place) => {
    if (place) {
      res.status(200).json({ data: place });
    } else {
      res.status(404).json({ message: "Place not found" });
    }
  }).catch((err) => {
    res.status(500).json({ message: "Error retrieving place", error: err });
  });
};

exports.addPlace = (req, res) => {
  placeService.addPlace(req.body).then((newPlace) => {
    res
      .status(201)
      .json({ message: "Place added successfully", data: newPlace });
  }).catch((err) => {
    res.status(500).json({ message: "Error adding place", error: err });
  });
};

exports.updatePlace = (req, res) => {
  placeService.updatePlace(req.params.id, req.body).then((updatedPlace) => {
    if (updatedPlace) {
      res
        .status(200)
        .json({ message: "Place updated successfully", data: updatedPlace });
    } else {
      res.status(404).json({ message: "Place not found" });
    }
  }).catch((err) => {
    res.status(500).json({ message: "Error updating place", error: err });
  });
};

exports.deletePlace = (req, res) => {
  placeService.deletePlace(req.params.id).then((deletedPlace) => {
    if (deletedPlace) {
      res.status(200).json({ message: "Place deleted successfully" });
    } else {
      res.status(404).json({ message: "Place not found" });
    }
  }).catch((err) => {
    res.status(500).json({ message: "Error deleting place", error: err });
  });
};
