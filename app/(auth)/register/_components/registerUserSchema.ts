import * as z from 'zod'

export const RegisterUserSchema = z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8),
    address: z.string().min(10),
    zip: z.number().min(6),
    city: z.string().min(5),
    phone: z.number().min(10)
})