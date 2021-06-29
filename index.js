/// Since no bable use es5
const express = require("express");
const path = require("path");
const logger = require("./Middleware/logger");
const exphbs = require("express-handlebars");

const app = express();

// Registering Middleware
// run every time on get request
// app.use(logger);

// Setting Routes
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

//Handlebars Middleware
// Basically we use react or angular or vue js to render templates not express
app.engine("handlebars", exphbs({ defaultLayouts: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index");
});

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set a folder as static
// it will just bring the files inside it live
app.use(express.static(path.join(__dirname, "public")));

// Base Url Middleware
// request recieved from this file are assigned to /api/members url
app.use("/api/members", require("./Routes/api/members"));

const PORT = process.env.PORT || 5000; // env variable or 5000

app.listen(PORT, () => {
  console.log("Server started");
});
