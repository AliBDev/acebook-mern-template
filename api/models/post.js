const mongoose = require("mongoose");

// const moment = require('moment');
// let now = moment();

const PostSchema = new mongoose.Schema({
  message: String,
  date: { type: Date, default: Date.now },
  img: String,

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;


