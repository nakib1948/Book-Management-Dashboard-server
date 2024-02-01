import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { productValidation } from './product.validation';
import { productControllers } from './product.controller';

const router = express.Router();

router.post(
  '/addbook',
  validateRequest(productValidation.createProductValidationSchema),
  productControllers.createBook,
);

export const productRoutes = router;
