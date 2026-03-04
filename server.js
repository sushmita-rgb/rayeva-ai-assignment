const express = require("express");
const dotenv = require("dotenv");

dotenv.config(); // ✅ YE SABSE UPAR HONA CHAHIYE

const cors = require("cors");
const connectDB = require("./config/db");
const aiRoutes = require("./routes/aiRoutes");
const productRoutes = require("./routes/productRoutes");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/ai", aiRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
