const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//USE STATIC FILES
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/js", express.static(__dirname + "public/js"));

// TEMPLATING ENGINE
app.set("views", "./src/views");
app.set("view engine", "ejs");

// ROUTES
const indexRouter = require("./src/routes/index");
app.use("/", indexRouter);

// GET VIEWS
app.get("/news", (req, res) => {
  res.render("news");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/faq", (req, res) => {
  res.render("faq");
});

// LISTEN ON PORT 3000
app.listen(port, () => console.log(`listening on port ${port}`));
