import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Valid email is required").max(200),
  company: z.string().trim().max(200).optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Consent is required" }),
  }),
  turnstileToken: z.string().min(1, "Captcha verification is required"),
  honeypot: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const consultationSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  company: z.string().trim().max(200).optional(),
  serviceId: z.string().min(1).max(100),
  description: z.string().trim().min(10).max(5000),
  preferredContactTime: z.string().trim().max(200).optional(),
  consent: z.literal(true),
  turnstileToken: z.string().min(1),
  honeypot: z.string().max(0).optional(),
});

export type ConsultationInput = z.infer<typeof consultationSchema>;

export const registerSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  phone: z
    .string()
    .trim()
    .min(5, "Phone number is required")
    .max(30)
    .regex(/^[+0-9\s()-]+$/, "Only digits, spaces, +, (, ), - are allowed"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(200),
  consent: z.literal(true),
  turnstileToken: z.string().min(1),
});

export const loginSchema = z.object({
  email: z.string().trim().email().max(200),
  password: z.string().min(1).max(200),
  turnstileToken: z.string().min(1),
});

export const forgotPasswordSchema = z.object({
  email: z.string().trim().email().max(200),
  turnstileToken: z.string().min(1),
});
