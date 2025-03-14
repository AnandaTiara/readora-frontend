import { z } from "zod";

export const LoginSchema = z.object({
  username: z.string().min(3, "Username minimal 3 karakter"),
  password: z.string().min(1, "Password minimal 1 karakter"),
});

export type LoginInput = z.infer<typeof LoginSchema>;

export const RegisterSchema = z.object({
  name: z.string().min(3, "Nama minimal 3 karakter"),
  username: z.string().min(3, "Username minimal 3 karakter"),
  password: z.string().min(1, "Password minimal 1 karakter"),
  email : z.string().email("Email tidak valid"),
});

export type RegisterInput = z.infer<typeof RegisterSchema>;

export const SessionSchema = z.object({
  data: z.object({
    email: z.string().email(),
    id: z.string(), 
    name: z.string(),
    username: z.string(),
  }),
  errors: z.record(z.unknown()).optional(), 
  message: z.string(),
});

export type Session = z.infer<typeof SessionSchema>;