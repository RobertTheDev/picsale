import { z } from 'zod';

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, 'You must provide your current password'),
  newPassword: z.string().min(8, 'Password must be at least 8 characters'),
});

export type ChangePasswordSchemaType = z.infer<typeof changePasswordSchema>;
