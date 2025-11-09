"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAppointmentSchema = void 0;
var z = require("zod");
exports.CreateAppointmentSchema = z.object({
    doctorId: z.string().uuid(),
    startAt: z.string().datetime(),
    endAt: z.string().datetime(),
    service: z.string().min(1),
});
