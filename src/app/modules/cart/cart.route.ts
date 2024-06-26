
import express from 'express';
import { cartControllers } from './cart.controller';
import auth from '../../middlewares/auth';
const router = express.Router();

router.post(
  '/addtocart',auth(),
  cartControllers.addProductToCart,
);

router.get('/:userEmail',auth(),cartControllers.getcartInformation);

router.patch(
    '/quantityUpdate',auth(),
    cartControllers.quantityUpdate,
);
router.delete('/removefromcart', auth(),cartControllers.removeFromCart);

export const cartRoutes = router;