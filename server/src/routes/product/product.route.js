import apiRoutes from "#constants/routes.constant";
import {
  createProduct,
  deleteProduct,
  fetchProduct,
  fetchProductById,
} from "#controller/product/controller.product";
import express from "express";

const { products } = apiRoutes;
const { GET, GET_ID, PUT, POST, DELETE } = products;
const router = express.Router();

router.get(GET, fetchProduct);
router.get(GET_ID, fetchProductById);
router.post(POST, createProduct);
router.put(PUT, deleteProduct);
router.delete(DELETE, deleteProduct);

export default router;
