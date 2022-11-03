const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  message: String,
  date: { type: Date, default: Date.now },
    url: {
      work: mongoose.SchemaTypes.Url,
      profile: mongoose.SchemaTypes.Url
    }
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
