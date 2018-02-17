const express = require('express')
const router = require('express-promise-router')()

const UsersControllers = require('../controllers/users')

router.route("/")
  .get(UsersControllers.getUsers)
  .post(UsersControllers.postUsers)
  .put(UsersControllers.putUsers)
  .delete(UsersControllers.deleteUsers)
