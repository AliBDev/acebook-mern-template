const User = require("../models/user");
const JWT = require("jsonwebtoken");
const TokenGenerator = require("../models/token_generator");

const UsersController = {
  Create: (req, res) => {
    const user = new User(req.body);
    user.save((err) => {
      if (err) {
        res.status(400).json({message: 'Bad request'})
      } else {
        res.status(201).json({ message: 'OK' });
      }
    });
  },

  Fetch: (req, res) => {
    User.findOne( { "_id": req.user_id }, (err, user) => {
      console.log(user)
      if (err) {
        throw err;
      }
      const token = TokenGenerator.jsonwebtoken(req.user_id)
      res.status(200).json({ user: user, token: token });
    }
 )}
};

module.exports = UsersController;
