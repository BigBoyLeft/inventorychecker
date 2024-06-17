import { z } from "zod";

const RowSchema = z.object({
  identifier: z.string(),
  message: z.string(),
  lastUpdated: z.string(),
  type: z.string(),
});

export type ApiRow = z.infer<typeof RowSchema>;
