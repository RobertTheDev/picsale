import { z } from 'zod';

export const editProfileSchema = z.object({
  avatar: z.union([z.instanceof(File), z.string().url()]).optional(),
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
});

export type EditProfileSchemaType = z.infer<typeof editProfileSchema>;
