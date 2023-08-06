const express = require("express");
const {
  createProdct,
  getAllProdct,
  findOneProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { auth } = require("../Middlewares/authMiddleware");
const router = express.Router();

router.post("/createProduct", auth, createProdct);

router.get("/getAllProduct", auth, getAllProdct);

router.get("/findOneProduct/:id", auth, findOneProduct);

router.put("/updateProduct/:id", auth, updateProduct);

router.delete("/deleteProduct/:id", auth, deleteProduct);

module.exports = router;
