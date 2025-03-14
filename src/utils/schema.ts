import { z } from "zod";
export const userSchema = z.object({
  userName: z.string().min(1, "required"),
  password: z.string().min(1, "required"),
});
