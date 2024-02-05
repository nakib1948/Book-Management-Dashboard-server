import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { productValidation } from './product.validation';
import { productControllers } from './product.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/addbook',auth(),
  validateRequest(productValidation.createProductValidationSchema),
  productControllers.createBook,
);
router.get('/',auth(), productControllers.getAllProducts);
router.patch(
  '/updatebook/:id',
  validateRequest(productValidation.updateProductValidationSchema),
  productControllers.updateProductById,
);
router.delete('/deletebook', productControllers.deleteProductById);

export const productRoutes = router;
