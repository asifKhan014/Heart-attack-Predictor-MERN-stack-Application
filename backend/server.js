const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const dbConnection = require("./config/db");
const app = express();
app.use(cors());
app.use(bodyParser.json());

dbConnection();
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  sex: Number,
  cp: Number,
  trtbps: Number,
  chol: Number,
  fbs: Number,
  restecg: Number,
  thalachh: Number,
  exng: Number,
  oldpeak: Number,
  slp: Number,
  caa: Number,
  thall: Number,
  prediction: String,
});

const User = mongoose.model("User", userSchema);

app.post("/api/predict", async (req, res) => {
  const userData = req.body;
  console.log(userData);
  try {
    const response = await axios.post(
        "http://127.0.0.1:5001/predict",
        userData
      );
    const prediction = response.data.prediction;
    console.log(prediction)

    const newUser = new User({
      ...userData,
      prediction,
    });
    await newUser.save();

    res.json({ prediction });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
