const {
  verifyToken,
  verifyTokenAndAuthorization,
} = require("../middlewares/verifyToken");
const router = require("express").Router();
const Order = require("../models/Order");

// CREATE ORDER

router.post("/", verifyToken, async (req, res) => {
  const newOrder = new Order(req.body);
  console.log(req.body);
  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER ORDERS

router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
