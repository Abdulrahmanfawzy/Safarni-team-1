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
  Lock,
  ChevronLeft,
  Check,
  MoveLeft,
} from "lucide-react";


import type { resetPasswordFormValues } from "@/lib/schemas/resetPassword.schema";
import resetPasswordSchema from "@/lib/schemas/resetPassword.schema";

const ResetPasswordPage = () => {
  const form = useForm<resetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: resetPasswordFormValues) {
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
              src="src/assets/auth/welcomePage/logo.png"
              alt="logo"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center w-[90%] mx-auto">
        <div className="hidden md:block w-1/2 max-h-full px-4">
          <img
            className="w-full max-h-4/5 object-contain"
            src="src/assets/auth/forgetPassword/forgetPassword.png"
            alt="reset password illustration"
          />
        </div>
        <div className="flex justify-center w-full md:w-1/2 px-4">
          <Card className="border-0 shadow-none w-full md:max-w-full sm:max-w-md">
            <CardHeader className="text-center">
              <CardTitle>
                <h3 className="font-medium text-text-primary-gray text-28">
                  Set new password
                </h3>
              </CardTitle>
              <CardDescription>
                <p className="font-normal text-18 text-text-muted-gray">
                  Your New Password Must be Different to
                  Previously Used Password
                </p>
              </CardDescription>
            </CardHeader>
            <form id="signUp-form" onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent>
                <FieldGroup>

                  <Controller
                    name="newPassword"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        className="gap-1"
                        data-invalid={fieldState.invalid}
                      >
                        <FieldLabel htmlFor="password">
                          <label className="text-18 font-medium text-text-label-gray">
                            Password
                          </label>
                        </FieldLabel>
                        <InputGroup className="rounded-none h-14 max-w-full">
                          <InputGroupInput
                            {...field}
                            aria-invalid={fieldState.invalid}
                            id={field.name}
                            placeholder="***********"
                            type="password"
                          />
                          <InputGroupAddon>
                            <Lock />
                          </InputGroupAddon>
                        </InputGroup>

                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}


                      </Field>
                    )}
                  />
                  <Controller
                    name="confirmPassword"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        className="gap-1"
                        data-invalid={fieldState.invalid}
                      >
                        <FieldLabel htmlFor="password">
                          <label className="text-18 font-medium text-text-label-gray">
                            Confirm Password
                          </label>
                        </FieldLabel>
                        <InputGroup className="rounded-none h-14 max-w-full">
                          <InputGroupInput
                            {...field}
                            aria-invalid={fieldState.invalid}
                            id={field.name}
                            placeholder="***********"
                            type="password"
                          />
                          <InputGroupAddon>
                            <Lock />
                          </InputGroupAddon>
                        </InputGroup>

                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}

                        <div className="mt-4 flex flex-col gap-4">
                          <div className="flex items-center gap-2">
                            {" "}
                            <div className="flex justify-center items-center bg-bg-icon-gray text-white h-6 w-6  rounded-full">
                              <Check size={20} />
                            </div>
                            <span className="text-text-muted-gray text-18 font-normal">
                              must be at least 8 characters</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {" "}
                            <div className="flex justify-center items-center bg-bg-icon-gray text-white h-6 w-6  rounded-full">
                              <Check size={20} />
                            </div>
                            <span className="text-text-muted-gray text-18 font-normal">
                              must contain one special character</span>
                          </div>
                        </div>

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
                <p className="flex gap-3 text-18 font-medium text-text-primary-gray mt-5">
                  <span className=" text-text-icon-gray">
                    <MoveLeft />{" "}
                  </span>
                  Back To Log In
                </p>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default ResetPasswordPage;
