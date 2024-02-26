import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { salesValidation } from './sales.validation';
import { salesControllers } from './sales.controller';
import auth from '../../middlewares/auth';
const router = express.Router();

router.post(
  '/create-sellhistory',
  validateRequest(salesValidation.salesValidationSchema),
  salesControllers.createSalesHistory,
);
router.get('/:email',auth(), salesControllers.getAllSalesInformation);

export const salesRoutes = router;
