const express = require('express')
const router = require('express-promise-router')()

const PlacesControllers = require('../controllers/places')

router.route("/")
  .get(PlacesControllers.getPlaces)
  .post(PlacesControllers.postPlaces)
  .put(PlacesControllers.putPlaces)
  .delete(PlacesControllers.deletePlaces)
