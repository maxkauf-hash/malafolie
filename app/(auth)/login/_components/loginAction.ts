"use server"

import * as z from 'zod'
import 'server-only'
import bcrypt from 'bcryptjs'
import { prisma } from '@/src/features/prisma/prismaClient'
import { LoginUserSchema } from './loginUserSchema';
import { createSession, deleteSession } from './session';
import { redirect } from 'next/navigation';


const secret: string = process.env.SECRET_KEY!

const login = async (values: z.infer<typeof LoginUserSchema>) => {
    const validateFields = LoginUserSchema.safeParse(values)

    if(!validateFields.success) {
        return {error: "Invalid fields"}
    }
    
    const {email, password} = validateFields.data

    const existingUser = await prisma.users.findUnique({where: {email}})

    if(!existingUser) {
        return {error: "Please create an account"}
    }

    const isMatch = await bcrypt.compare(password, existingUser.password)

    if(!isMatch) {
        return {error: "Invalid credentials"}
    }

    const cookie = await createSession(existingUser.id)

    redirect('/profile')
}

export async function logout() {
  await deleteSession()
  redirect('/login')
}

export default login