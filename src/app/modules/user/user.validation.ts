import { z } from 'zod';

const userValidationSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z
      .string({
        invalid_type_error: 'Password must be a string',
      })
      .min(5, { message: 'Password must be at least 5 characters long' })
      .max(20, { message: 'Password can not be more than 20 characters' }),
  }),
});

export const userValidation = {
  userValidationSchema,
};
