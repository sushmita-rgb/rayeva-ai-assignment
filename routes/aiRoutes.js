const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.post("/analyze", async (req, res) => {
  try {
    const { name, description } = req.body;

    const ecoScore = Math.floor(Math.random() * 10) + 1;

    const result = {
      productName: name,
      category: "General",
      ecoScore,
      sustainabilityLevel:
        ecoScore > 7 ? "High" : ecoScore > 4 ? "Medium" : "Low",
      summary: `The product "${name}" has been analyzed based on description.`,
    };

    const savedProduct = await Product.create(result);

    res.json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
