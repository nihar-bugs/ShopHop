const Product = require("../models/Product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
} = require("../middlewares/verifyToken");
const router = require("express").Router();

// FETCH SINGLE PRODUCT

router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// FETCH ALL PRODUCTS

router.get("/", async (req, res) => {
  const qLow = req.query.low;
  const qHigh = req.query.high;
  const qCategory = req.query.category;

  try {
    let products;

    if (qLow && qHigh) {
      products = await Product.find({
        price: { $gte: qLow, $lte: qHigh },
      });
    } else if (qCategory) {
      products = await Product.find({ categories: { $in: [qCategory] } });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(400).json("Could not fetch products");
  }
});

module.exports = router;
