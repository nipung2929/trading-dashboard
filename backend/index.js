const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose") ;
const PORT = process.env.PORT || 3002;
const cors = require("cors");
const DATABASE_URL = process.env.DATABASE_URL;
const { HoldingsModel } = require("./model/HoldingsModel")
const { PositionsModel } = require("./model/PositionsModel")
const { OrdersModel } = require("./model/OrdersModel");
const app = express();
mongoose.connect(DATABASE_URL)
app.use(express.json());
app.use(cors());

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});

app.listen(PORT, () => {
    console.log("App shuru hui");
});