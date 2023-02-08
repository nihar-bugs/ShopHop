const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      { productId: { type: String }, quantity: { type: Number, default: 1 } },
    ],
    amount: { type: Number, required: true },
    status: { type: String, default: "Pending" },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Order", orderSchema);
