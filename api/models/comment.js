const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  message: String,
  date: { type: Date, default: Date.now },

  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  },

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }

});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;