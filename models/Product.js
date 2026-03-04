const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: String,
    category: String,
    ecoScore: Number,
    sustainabilityLevel: String,
    summary: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Product", productSchema);
