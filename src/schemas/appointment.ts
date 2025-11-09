import * as z from "zod";

export const CreateAppointmentSchema = z.object({
  doctorId: z.uuid(),
  startAt: z.iso.datetime(),
  endAt: z.iso.datetime(),
  service: z.string().min(1),
});

export type CreateAppointment = z.infer<typeof CreateAppointmentSchema>;
