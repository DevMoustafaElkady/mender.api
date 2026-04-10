// dependencies
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
require("dotenv").config();
const Place = require("./app/models/place.model");

// CORS configuration
const cors = require("cors");
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use("/places", require("./app/routes/place.routes"));
app.use("/blog", require("./app/routes/blog.routes"))

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


