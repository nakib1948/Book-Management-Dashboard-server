import { Router } from 'express';
import { categoryRoutes } from '../modules/category/category.route';
import { userRoutes } from '../modules/user/user.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/user',
    route: userRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
