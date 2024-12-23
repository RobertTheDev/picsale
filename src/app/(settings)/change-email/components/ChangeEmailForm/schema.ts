import { z } from 'zod';

export const changeEmailSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export type ChangeEmailSchemaType = z.infer<typeof changeEmailSchema>;
