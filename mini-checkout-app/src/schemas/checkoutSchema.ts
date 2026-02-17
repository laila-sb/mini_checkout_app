import * as z from "zod";

export const checkoutSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email"),
  address: z.string(5, "Address too short"),
});

export type CheckoutSchema = z.infer<typeof checkoutSchema>;
