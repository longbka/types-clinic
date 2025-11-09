import * as z from "zod";
export const RoleEnum = z.enum(["ADMIN", "DOCTOR", "NURSE", "RECEPTIONIST", "PATIENT"]);

export const CreateUserSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
  name: z.string().optional(),
  phone: z.string().optional(),
  role: RoleEnum.optional(),
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
