import { z } from 'zod';

export const SignUpFormSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(100, 'Password must be no more than 100 characters long'),
});

export type SignUpFormSchemaType = z.infer<typeof SignUpFormSchema>;
