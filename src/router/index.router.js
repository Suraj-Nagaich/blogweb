const express = require("express");
const postModel = require("../models/post.model");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/", async (req, res) => {
  const filter = {};
  if (req.query.category) {
    filter.category = req.query.category;
  }

  const posts = await postModel.find(filter).sort({ date: -1 });

  const token = req.cookies.token;
  let decode = null;

  if (token) {
    try {
      decode = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      console.error("JWT Error:", err.message);
    }
  }

  res.render("home.ejs", { posts, decode });
});

module.exports = router;