const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv/config");

// Middlewares
app.use(cors());
app.use(express.json());

// Import Routes
const userRoutes = require("./routes/userRoutes");

app.use("/api", userRoutes);

// Connect to DB
mongoose.connect(
  process.env.mongodb_url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Database Connected!");
  }
);

// Listen to port 5000
app.listen("5000", () => {
  console.log("Listening at port 5000");
});
