
import express from 'express';
import { cartControllers } from './cart.controller';
const router = express.Router();

router.post(
  '/addtocart',
  cartControllers.addProductToCart,
);

export const cartRoutes = router;