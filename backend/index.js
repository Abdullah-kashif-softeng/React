const express = require("express");
const cors = require("cors"); // Add this line
const app = express();
const users = require("./users.js");

// Enable CORS for all routes
app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello hi there!!");
});

app.get("/hello", (req, res) => {
  res.json(users);
});

app.listen(3000);