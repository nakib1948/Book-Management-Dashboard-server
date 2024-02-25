import { Router } from 'express';
import { userRoutes } from '../modules/user/user.route';
import { productRoutes } from '../modules/product/product.route';
import { salesRoutes } from '../modules/salesManagement/sales.route';
import { cartRoutes } from '../modules/cart/cart.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/user',
    route: userRoutes,
  },
  {
    path: '/product',
    route: productRoutes,
  },
  {
    path: '/sales',
    route: salesRoutes,
  },
  {
    path: '/cart',
    route: cartRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
