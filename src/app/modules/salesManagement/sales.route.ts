import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { salesValidation } from './sales.validation';
import { salesControllers } from './sales.controller';
const router = express.Router();

router.post(
  '/create-sellhistory',
  validateRequest(salesValidation.salesValidationSchema),
  salesControllers.createSalesHistory,
);


export const salesRoutes = router;
