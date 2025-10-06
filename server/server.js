import express from "express";
import dotenv from "dotenv";
import connectDB from "./configs/db.js";
import productRoutes from "./routes/ProductRoute.js";

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());

app.use("/api/products", productRoutes);

// root route
app.get("/", (req, res) => {
  res.send("App is running ");
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});

export default app; 
