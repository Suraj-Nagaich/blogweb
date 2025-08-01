
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  author: String,
  category: String,
  content: String,
  image: String,
  email: String,     
  date: Date
});

module.exports = mongoose.model("Post", postSchema);