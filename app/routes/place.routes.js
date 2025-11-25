const express = require('express');
const router = express.Router();
const placeController = require('../controllers/place.controller');


router.get('/', placeController.getAllPlaces);
router.get('/:id', placeController.GetPlaceById);
router.post('/', placeController.addPlace);
router.put('/:id', placeController.updatePlace);
router.delete('/:id', placeController.deletePlace);

module.exports = router;