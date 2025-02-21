const express = require("express");
const mongoose = require("mongoose");
// const { ObjectId } = require("mongodb");

const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const stripe = require("stripe")(process.env.SECRET_PAYMENT);
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(process.env.DB).then(() => {
  console.log("Connected");
});

const BookingSchema = new mongoose.Schema({
  userId: String,
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
app.get("/getData/:id", async (req, res) => {
  const id = req.params.id;

  const Data = await Booking.find({ userId: id });

  res.status(200).json(Data);
});

app.get("/users", async (req, res) => {
  const users = await Booking.find({});
  res.status(200).json(users);
});

const calculateOrderAmount = (items) => {
  return 2000;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",

    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
