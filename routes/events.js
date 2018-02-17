const express = require('express')
const router = require('express-promise-router')()

const EventsControllers = require('../controllers/events')

router.route("/")
  .get(EventsControllers.getEvents)
  .post(EventsControllers.postEvents)
  .put(EventsControllers.putEvents)
  .delete(EventsControllers.deleteEvents)
