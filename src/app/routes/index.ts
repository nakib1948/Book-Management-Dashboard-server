import { Router } from 'express';
import { categoryRoutes } from '../modules/category/category.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/',
    //route: courseRoutes,
  }
];

//moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
