/// Since no bable use es5
const express = require("express");
const path = require("path");
const logger = require("./Middleware/logger");
const members = require("./members");

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

app.get("/api/members", (req, res) => {
  res.json(members);
});

// Set a folder as static
// it will just bring the files inside it live
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000; // env variable or 5000

app.listen(PORT, () => {
  console.log("Server started");
});
