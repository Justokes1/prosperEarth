const express = require("express");
const contactRouter = express.Router();

contactRouter.get("", async (req, res) => {
  res.render("index");
});

module.exports = contactRouter;
