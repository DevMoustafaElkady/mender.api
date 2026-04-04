const express = require('express');
const router = express.Router();
const placeController = require('../controllers/place.controller');


router.get('/', placeController.getAllPlaces);
router.get('/requests', placeController.getAllPlaceRequests);
router.get('/:id', placeController.GetPlaceById);
router.post('/', placeController.addPlace);
router.post('/add-request', placeController.addPlaceRequest);
router.put('/:id', placeController.updatePlace);
router.delete('/:id', placeController.deletePlace);

module.exports = router;