"use server"

import * as z from 'zod'
import bcrypt from 'bcrypt'
import { prisma } from '@/src/features/prisma/prismaClient'
import { LoginUserSchema } from './loginUserSchema';
import { cookies } from 'next/headers';

const login = async (values: z.infer<typeof LoginUserSchema>) => {
    const validateFields = LoginUserSchema.safeParse(values)

    if(!validateFields.success) {
        return {error: "Invalid fields"}
    }
    
    const {email, password} = validateFields.data

    const existingUser = await prisma.users.findFirst({where: {email}})

    if(!existingUser) {
        return {error: "Please create an account"}
    }

    const isMatch = await bcrypt.compare(password, existingUser.password)

    if(!isMatch) {
        return {error: "Invalid credentials"}
    }

    const cookie = (await cookies()).set('auth', 'maxime')

    return {success: "User successfully logged in"}
}

export default login