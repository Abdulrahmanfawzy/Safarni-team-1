
import { z } from "zod";

const resetPasswordSchema = z.object({
  newPassword: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character."
    ),
  confirmPassword: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character."
    ),
})
 .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"], 
  });

export default resetPasswordSchema;
export type resetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

