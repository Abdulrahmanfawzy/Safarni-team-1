import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  ChevronLeft,
  Mail,
} from "lucide-react";

import type { forgetPasswordFormValues } from "@/lib/schemas/forgetPassword.schema";
import forgetPasswordSchema from "@/lib/schemas/forgetPassword.schema";

const ForgetPasswordPage = () => {
  const form = useForm<forgetPasswordFormValues>({
    resolver: zodResolver(forgetPasswordSchema),
    defaultValues: {
      email: ""
    },
  });

  function onSubmit(data: forgetPasswordFormValues) {
    console.log("data", data);
  }

  return (
    <section className="w-full h-screen">
      <div className=" w-[90%] mx-auto my-5">
        <div className="flex justify-between">
          <div className="bg-bg-primary-gray w-10 h-10 rounded-full flex items-center justify-center">
            <ChevronLeft className="w-5 h-5 text-[#0D0D0D]" />
          </div>
          <div>
            <img
              className="w-25"
              src="src/assets/images/auth/welcomePage/logo.png"
              alt="logo"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center w-[90%] mx-auto">
        <div className="hidden md:block w-1/2 max-h-full px-4">
          <img
            className="w-full max-h-4/5 object-contain"
            src="src/assets/images/auth/forgetPassword/forgetPassword.png"
            alt="reset password illustration"
          />
        </div>
        <div className="flex justify-center w-full md:w-1/2 px-4">
          <Card className="border-0 shadow-none w-full md:max-w-full sm:max-w-md">
            <CardHeader className="text-center">
              <CardTitle className="flex flex-col justify-center items-center">
                 <img src="src/assets/images/auth/authIcons/keyIcon.png" alt="key icon"/>
                <h3 className="font-medium text-text-primary-gray text-28 mt-6">
                  Forgot Password?
                </h3>
              </CardTitle>
              <CardDescription>
                <p className="font-normal text-18 text-text-muted-gray">
                 please enter your email to reset that password
                </p>
              </CardDescription>
            </CardHeader>
            <form id="forget-password-form" onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent>
                <FieldGroup>
                  <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        className="gap-1"
                        data-invalid={fieldState.invalid}
                      >
                        <FieldLabel
                          htmlFor="email"
                        >
                          <label className="text-18 font-medium text-text-label-gray">
                            Email
                          </label>
                        </FieldLabel>
                        <InputGroup className="max-w-full rounded-none h-14">
                          <InputGroupInput
                            {...field}
                            aria-invalid={fieldState.invalid}
                            id={field.name}
                            placeholder="kneeDue@untitledui.com"

                          />
                          <InputGroupAddon>
                            <Mail />
                          </InputGroupAddon>
                        </InputGroup>
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </FieldGroup>
              </CardContent>
              <CardFooter className="flex flex-col mt-6">
                <Field className="flex flex-col" orientation="horizontal">
                  <Button
                    type="submit"
                    size={"lg"}
                    className="font-semibold text-20! h-14 w-full text-white"
                    variant="default"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "Resetting Password..." : "Reset Password"}
                  </Button>

                </Field>
           
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default ForgetPasswordPage;
