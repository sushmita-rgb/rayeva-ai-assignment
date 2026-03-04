const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// POST - Add Product
router.post("/", async (req, res) => {
  try {
    const { name, description } = req.body;

    const product = new Product({
      name,
      description,
    });

    const savedProduct = await product.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET - Get All Products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
