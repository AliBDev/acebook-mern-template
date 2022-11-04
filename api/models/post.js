const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  message: String,
  date: { type: Date, default: Date.now },
  url: String,
});

// const imageSchema = new mongoose.Schema({
  
//   data: Buffer,
// });

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
