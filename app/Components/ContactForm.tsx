"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input, TextArea } from "@/components/ui/input"
 
const formSchema = z.object({
  fullName: z.string().min(1, {
    message: "Bu alan boş bırakılamaz",
  }),
  email: z.string().min(1, {
    message: "Bu alan boş bırakılamaz",
  }).email({message: "Geçersiz email"}),
  message: z.string().min(1, {
    message: "Bu alan boş bırakılamaz",
  }),
})
 
export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className="text-lg">Ad Soyad*</FormLabel>
              <FormControl>
                <Input {...field} className="bg-gray-300"/>
              </FormControl>
              <FormMessage className="absolute"/>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className="text-lg">Email*</FormLabel>
              <FormControl>
                <Input {...field} className="bg-gray-300"/>
              </FormControl>
              <FormMessage className="absolute"/>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className="text-lg">Mesajınız*</FormLabel>
              <FormControl>
                <TextArea {...field} className="bg-gray-300"/>
              </FormControl>
              <FormMessage className="absolute"/>
            </FormItem>
          )}
        />

        <Button type="submit" className="text-black text-lg">Gönder</Button>
      </form>
    </Form>
  )
}