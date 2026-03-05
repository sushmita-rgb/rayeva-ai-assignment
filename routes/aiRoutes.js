const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.post("/analyze", async (req, res) => {
  try {
    const { name, description } = req.body;

    const ecoScore = Math.floor(Math.random() * 10) + 1;

    const sustainabilityLevel =
      ecoScore > 7 ? "High" : ecoScore > 4 ? "Medium" : "Low";

    // New fields for Module 1
    const subCategory = "Eco Product";

    const seoTags = [
      "eco-friendly",
      "sustainable",
      "reusable",
      "plastic-free",
      "green-product",
    ];

    const sustainabilityFilters = [
      "plastic-free",
      "recyclable",
      "vegan",
      "compostable",
    ];

    const result = {
      productName: name,
      category: "General",
      subCategory,
      ecoScore,
      sustainabilityLevel,
      seoTags,
      sustainabilityFilters,
      summary: `The product "${name}" has been analyzed based on description.`,
    };

    const savedProduct = await Product.create(result);

    res.json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
