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
router.get('/', productControllers.getAllProducts);
router.put(
  '/updatebook/:id',
  validateRequest(productValidation.updateProductValidationSchema),
  productControllers.updateProductById,
);
router.delete('/deletebook', productControllers.deleteProductById);

export const productRoutes = router;
