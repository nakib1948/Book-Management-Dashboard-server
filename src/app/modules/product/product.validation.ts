import { z } from 'zod';
import { bookformat } from './product.constant';

const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'product must be string',
      required_error: 'Product is required',
    }),
    price: z.number({
      invalid_type_error: 'Price must be number',
      required_error: 'price is required',
    }),
    quantity: z.number({
      invalid_type_error: 'quantity must be number',
      required_error: 'quantity is required',
    }),
    imageurl: z.string({
      invalid_type_error: 'imageurl must be number',
      required_error: 'imageurl is required',
    }),
    releaseDate: z.string({
      invalid_type_error: 'releaseDate must be string',
      required_error: 'releaseDate is required',
    }),
    author: z.string({
      invalid_type_error: 'author must be string',
      required_error: 'author is required',
    }),
    isbn: z.string({
      invalid_type_error: 'isbn must be string',
      required_error: 'isbn is required',
    }),
    genre: z.string({
      invalid_type_error: 'genre must be string',
      required_error: 'genre is required',
    }),
    publisher: z.string({
      invalid_type_error: 'publisher must be string',
      required_error: 'publisher is required',
    }),
    series: z.string({
      invalid_type_error: 'series must be string',
      required_error: 'series is required',
    }),
    language: z.string({
      invalid_type_error: 'language must be string',
      required_error: 'language is required',
    }),
    format: z.enum([...bookformat] as [string, ...string[]]),
  }),
});

export const productValidation = {
  createProductValidationSchema,
};
