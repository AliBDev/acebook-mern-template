const express = require("express");
const router = express.Router();

const CurrentUsersController = require("../controllers/current_users");

router.post("/loggedIn/", CurrentUsersController.Get);

module.exports = router;
