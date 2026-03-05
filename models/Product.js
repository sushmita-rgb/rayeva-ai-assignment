const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: String,
    category: String,
    subCategory: String,
    ecoScore: Number,
    sustainabilityLevel: String,
    seoTags: [String],
    sustainabilityFilters: [String],
    summary: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Product", productSchema);
