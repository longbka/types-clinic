"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserSchema = exports.RoleEnum = void 0;
var z = require("zod");
// Vai trò người dùng
exports.RoleEnum = z.enum([
    "ADMIN",
    "DOCTOR",
    "NURSE",
    "RECEPTIONIST",
    "PATIENT",
]);
// Schema tạo mới user
exports.CreateUserSchema = z.object({
    email: z.string().email("Email không hợp lệ"),
    password: z
        .string()
        .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
        .max(64, "Mật khẩu tối đa 64 ký tự"),
    name: z.string().min(1, "Tên không được để trống").optional(),
    phone: z
        .string()
        .regex(/^[0-9]{9,15}$/, "Số điện thoại không hợp lệ")
        .optional(),
    role: exports.RoleEnum.optional(),
});
