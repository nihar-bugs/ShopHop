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
  const qPrice = req.query.price;
  const qCategory = req.query.category;

  try {
    let products;
    if (qPrice && qCategory) {
      if (qPrice == "<500") {
        products = await Product.find({
          $and: [
            { price: { $gte: 0, $lte: 500 } },
            { categories: { $in: [qCategory] } },
          ],
        });
      } else if (qPrice == "500-1000") {
        products = await Product.find({
          $and: [
            { price: { $gte: 500, $lte: 1000 } },
            { categories: { $in: [qCategory] } },
          ],
        });
      } else if (qPrice == "1000-2000") {
        products = await Product.find({
          $and: [
            { price: { $gte: 1000, $lte: 2000 } },
            { categories: { $in: [qCategory] } },
          ],
        });
      } else if (qPrice == ">2000") {
        products = await Product.find({
          $and: [
            { price: { $gte: 2000 } },
            { categories: { $in: [qCategory] } },
          ],
        });
      }
    } else if (qPrice) {
      if (qPrice == "<500") {
        products = await Product.find({
          price: { $gte: 0, $lte: 500 },
        });
      } else if (qPrice == "500-1000") {
        products = await Product.find({
          price: { $gte: 500, $lte: 1000 },
        });
      } else if (qPrice == "1000-2000") {
        products = await Product.find({
          price: { $gte: 1000, $lte: 2000 },
        });
      } else if (qPrice == ">2000") {
        products = await Product.find({
          price: { $gte: 2000 },
        });
      }
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
