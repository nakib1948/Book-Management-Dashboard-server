import { z } from 'zod';

const userValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'name must be string',
      required_error: 'name is required',
    }),
    email: z.string({ required_error: 'Email is required.' }).email(),
    password: z
      .string({
        invalid_type_error: 'Password must be a string',
      })
      .min(5, { message: 'Password must be at least 5 characters long' })
      .max(20, { message: 'Password can not be more than 20 characters' }),
    role: z.string({
      invalid_type_error: 'role must be string',
      required_error: 'role is required',
    }),
  }),
});

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email is required.' }).email(),
    password: z.string({ required_error: 'Password is required' }),
  }),
});

export const userValidation = {
  userValidationSchema,
  loginValidationSchema,
};
