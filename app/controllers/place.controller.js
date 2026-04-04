const placeSchemaValidator = require("../validators/place.validators");
const placeRequestSchemaValidator = require("../validators/place-request.validators");
// const placesService = require("../services/places.service");
const Place = require("../models/place.model");
const placeService = require("../services/places.service");

// Get all places
exports.getAllPlaces = (req, res) => {
  placeService
    .getAllPlaces()
    .then((places) => {
      res.status(200).json({ data: places });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error retrieving places", error: err });
    });
};

// Get a place by ID
exports.GetPlaceById = (req, res) => {
  placeService
    .getPlaceByID(req.params.id)
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

// Add a new place
exports.addPlace = (req, res) => {
  // Validate the request body
  const error = placeSchemaValidator.validate(req.body).error;
  if (error) {
    return res
      .status(400)
      .json({ message: "Validation error", error: error.details });
  }

  // Proceed to add the place
  placeService
    .addPlace(req.body)
    .then((newPlace) => {
      res
        .status(201)
        .json({ message: "Place added successfully", data: newPlace });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error adding place", error: err });
    });
};

// Add a new place request
exports.updatePlace = (req, res) => {
  // Validate the request body
  const error = placeSchemaValidator.validate(req.body).error;
  if (error) {
    return res
      .status(400)
      .json({ message: "Validation error", error: error.details });
  }

  // Proceed to update the place
  placeService
    .updatePlace(req.params.id, req.body)
    .then((updatedPlace) => {
      if (updatedPlace) {
        res
          .status(200)
          .json({ message: "Place updated successfully", data: updatedPlace });
      } else {
        res.status(404).json({ message: "Place not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error updating place", error: err });
    });
};

// Delete a place
exports.deletePlace = (req, res) => {
  placeService
    .deletePlace(req.params.id)
    .then((deletedPlace) => {
      if (deletedPlace) {
        res.status(200).json({ message: "Place deleted successfully" });
      } else {
        res.status(404).json({ message: "Place not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error deleting place", error: err });
    });
};

// Get all places
exports.getAllPlaceRequests = (req, res) => {
  placeService
    .getAllPlacesRequests()
    .then((placeRequests) => {
      res.status(200).json({ data: placeRequests });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error retrieving place requests", error: err });
    });
};

// Add a new Place Request
exports.addPlaceRequest = (req, res) => {
  // Validate the request body
  const error = placeRequestSchemaValidator.validate(req.body).error;
  if (error) {
    return res.status(400).json({message: "Validation Error", error: error.details});
  }

  placeService.addPlaceRequest(req.body)
    .then((newPlaceRequest) => {
      res.status(201).json({message: "Place request added successfully", data: newPlaceRequest});
    })
    .catch((err) => {
      res.status(500).json({message: "Error adding place request", error: err});
    });
  }
