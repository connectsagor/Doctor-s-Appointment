const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(process.env.DB).then(() => {
  console.log("Connected");
});

const BookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: String,
  service: Object,
});

const Booking = mongoose.model("Booking", BookingSchema);

app.post("/addBookAppointment", async (req, res) => {
  const BookingData = req.body;
  await Booking.insertMany(BookingData);
  res.send("success");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
