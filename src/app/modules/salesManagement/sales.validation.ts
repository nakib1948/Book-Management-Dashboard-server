import { z } from 'zod';

const salesValidationSchema = z.object({
  body: z.object({
    buyerName: z.string({
      invalid_type_error: 'buyerName must be string',
      required_error: 'buyerName is required',
    }),
    quantity: z.number({
      invalid_type_error: 'quantity must be number',
      required_error: 'quantity is required',
    }),
    date: z.string({
      invalid_type_error: 'date must be string',
      required_error: 'date is required',
    }),
    productName: z.string({
      invalid_type_error: 'productName must be string',
      required_error: 'productName is required',
    }),
    productId: z.string({
      invalid_type_error: 'productId must be string',
      required_error: 'productId is required',
    }),
  }),
});

export const salesValidation = {
  salesValidationSchema,
};
