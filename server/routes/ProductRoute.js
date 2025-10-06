import express from "express";
import ProductController from "../controllers/ProductController.js"; // default import

const router = express.Router();

// Destructure functions from the default export
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  increaseStock,
  decreaseStock,

} = ProductController;

// Routes
router.post("/", createProduct);
router.get("/", getProducts);

router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

router.patch("/:id/increase", increaseStock);
router.patch("/:id/decrease", decreaseStock);



export default router;
