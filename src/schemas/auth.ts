import { z } from "zod";

export const LoginSchema = z.object({
  username: z.string().min(3, "Username minimal 3 karakter"),
  password: z.string().min(1, "Password minimal 1 karakter"),
});

export type LoginInput = z.infer<typeof LoginSchema>;

export const RegisterSchema = z.object({
  username: z.string().min(3, "Username minimal 3 karakter"),
  password: z.string().min(1, "Password minimal 1 karakter"),
  email : z.string().email("Email tidak valid"),
});

export type RegisterInput = z.infer<typeof RegisterSchema>;
