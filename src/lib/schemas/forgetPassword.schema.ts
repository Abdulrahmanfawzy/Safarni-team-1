
import { z } from "zod";

const forgetPasswordSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required.")
    .email("Please enter a valid email address."),
});

export default forgetPasswordSchema;
export type forgetPasswordFormValues = z.infer<typeof forgetPasswordSchema>;
