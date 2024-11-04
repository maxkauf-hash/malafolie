"use client"

import {useForm} from "react-hook-form";
import { z } from "zod";
import {zodResolver} from '@hookform/resolvers/zod'
import { RegisterUserSchema } from "./_components/registerUserSchema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import register from "./_components/registerAction";
import { useState } from "react";

export const LoginForm = () => {
    const [error, setError] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    const form = useForm<z.infer<typeof RegisterUserSchema>>({
        resolver: zodResolver(RegisterUserSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            address: "",
            zip: "",
            city: "",
            phone: ""
        }
    })

    const onSubmit = (values: z.infer<typeof RegisterUserSchema>) => {
        setMessage("")
        setError("")
        
        register(values).then((data) => {
            if(data.error){
                setError(data.error)
            }
            setMessage("User successfully register")
        })
    }
  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-1/4 bg-white p-2 rounded-md text-black">
            {error && <span className="text-red-500">{error}</span>}
            <div className="space-y-4">
                <FormField control={form.control} name="firstName" render={({field}) => (
                    <FormItem>
                        <FormLabel>Firstname</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder="Firstname..." type="text" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField control={form.control} name="lastName" render={({field}) => (
                    <FormItem>
                        <FormLabel>Lastname</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder="Lastname..." type="text" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField control={form.control} name="email" render={({field}) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder="Email..." type="email" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField control={form.control} name="password" render={({field}) => (
                    <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder="******" type="password" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField control={form.control} name="address" render={({field}) => (
                    <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder="Address..." type="text" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField control={form.control} name="zip" render={({field}) => (
                    <FormItem>
                        <FormLabel>Postal code</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder="Postal Code..." type="text" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField control={form.control} name="city" render={({field}) => (
                    <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder="City..." type="text" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField control={form.control} name="phone" render={({field}) => (
                    <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder="Phone..." type="text" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            <Button type="submit" className="rounded-md w-full bg-secondary text-primary hover:text-primary-foreground">Register</Button>
        </form>
    </Form>
  );
}

export default LoginForm