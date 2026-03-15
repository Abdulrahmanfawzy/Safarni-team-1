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
import { VisaFormSchema } from "../../../lib/schemas/checkout.schema";

// ^ form
export default function VisaComponent() {
  const form = useForm<z.infer<typeof VisaFormSchema>>({
    resolver: zodResolver(VisaFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      expiryDate: "",
      cvv: "",
    },
  });

  // ^ functions
  function onSubmit(values: z.infer<typeof VisaFormSchema>) {
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
                <FormLabel>Full Name </FormLabel>
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

          {/* Expiry */}
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="expiryDate"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Valid Date</FormLabel>
                  <FormControl>
                    <Input placeholder="MM/YY" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/*  CVV  */}
            <FormField
              control={form.control}
              name="cvv"
              render={({ field }) => (
                <FormItem className="w-24">
                  <FormLabel>CVV</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="123" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

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
