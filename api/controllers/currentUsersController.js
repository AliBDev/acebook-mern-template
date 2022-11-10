const User = require("../models/user");
const TokenGenerator = require("../models/token_generator");
const { response } = require("express");

const UsersController = {
  Get: async (req, res) => {
    console.log(req, "Request is here")

    console.log(req.user_id, "1st")
    const token = await TokenGenerator.jsonwebtoken(req.user_id);
    console.log("2nd")
    const get_user = await User.findById(req.user_id);
    console.log(req.user_id, "User ID is here")
    console.log("3rd")
    res.status(200).json({ current_user: get_user, token: token })
    console.log({ current_user: get_user, token: token })
  },
};

module.exports = UsersController;