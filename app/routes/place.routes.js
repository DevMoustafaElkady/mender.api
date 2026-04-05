const express = require('express');
const router = express.Router();
const placeController = require('../controllers/place.controller');

// Place Requests Routes
router.get('/requests', placeController.getAllPlaceRequests);
router.post('/add-request', placeController.addPlaceRequest);
router.post('/approve-request/:id', placeController.approvePlaceRequest);

// Place Routes
router.get('/', placeController.getAllPlaces);
router.get('/:id', placeController.GetPlaceById);
router.post('/', placeController.addPlace);
router.put('/:id', placeController.updatePlace);
router.delete('/:id', placeController.deletePlace);


module.exports = router;