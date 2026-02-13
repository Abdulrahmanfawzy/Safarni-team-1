import {
  FormControl,
  FormItem,
  FormLabel,
  Form,
  FormField,
  FormMessage,
} from "../../../components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { PayPalFormSchema } from "../../../lib/schemas/checkout.schema";

// ^ form
export default function PaypalComponent() {
  const form = useForm<z.infer<typeof PayPalFormSchema>>({
    resolver: zodResolver(PayPalFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  // ^ functions
  function onSubmit(values: z.infer<typeof PayPalFormSchema>) {
    console.log("Form Values:", values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" ">
        <div className="*:w-full space-y-4">
          {/* full name */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="kneeDue@untitledui.com" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* your email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="kneeDue@untitledui.com" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* button */}
          <Button
            className="bg-blue-700 h-14 cursor-pointer hover:bg-blue-800"
            type="submit"
          >
            confirm Booking
          </Button>
        </div>
      </form>
    </Form>
  );
}
