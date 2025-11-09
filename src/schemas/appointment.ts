import * as z from "zod";

export const CreateAppointmentSchema = z.object({
  doctorId: z.string().uuid(),
  startAt: z.string().datetime(),
  endAt: z.string().datetime(),
  service: z.string().min(1),
});

export type CreateAppointment = z.infer<typeof CreateAppointmentSchema>;
