import z from "zod";

export const PayPalFormSchema = z.object({
  fullName: z.string().min(1, "First name is required"),
  email: z.string().email("Invalid email"),
});


export const MasterCardFormSchema = z.object({
  fullName: z.string().min(1, "First name is required"),
  email: z.string().email("Invalid email"),
  expiryDate: z
    .string()
    .min(5, "Enter valid date")
    .regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Invalid expiry date (MM/YY)"),
  cvv: z.string().min(3).max(4),
});

export const VisaFormSchema = z.object({
  fullName: z.string().min(1, "First name is required"),
  email: z.string().email("Invalid email"),
  expiryDate: z
    .string()
    .min(5, "Enter valid date")
    .regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Invalid expiry date (MM/YY)"),
  cvv: z.string().min(3).max(4),
});

