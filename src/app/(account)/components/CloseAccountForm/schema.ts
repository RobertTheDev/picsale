import { z } from 'zod';

export const closeAccountSchema = z.object({
  password: z.string().min(1, 'You must provide your password'),
});

export type CloseAccountSchemaType = z.infer<typeof closeAccountSchema>;
