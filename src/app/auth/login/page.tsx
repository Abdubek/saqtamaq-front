"use client";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { api } from "@/src/lib/api";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string({ message: "Обязательное поле" }),
  password: z.string({ message: "Обязательное поле" }),
});

type SchemaType = z.infer<typeof formSchema>;

export default function Login() {
  const router = useRouter();
  const form = useForm<SchemaType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: SchemaType) => {
    try {
      const { data } = await api.login(values);
      localStorage.setItem("token", data.token);
      router.push("/home");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3 p-3"
      >
        <div className="text-lg font-bold">Login</div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Login</Button>
      </form>
    </Form>
  );
}
