const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    user_id: { type: String, required: true },
    products: [
      { productId: { type: String }, quantity: { type: Number, default: 1 } },
    ],
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

module.exports = mongoose.model("Cart", cartSchema);
