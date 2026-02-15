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
  FieldDescription,
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
  Mail,
  User,
  CircleCheck,
  Check,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import signUpSchema, {
  type signUpFormValues,
} from "@/lib/schemas/signUp.schema";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const form = useForm<signUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(data: signUpFormValues) {
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
            src="src/assets/images/auth/signUp/signUp.png"
            alt="sign up illustration"
          />
        </div>
        <div className="flex justify-center w-full md:w-1/2 px-4">
          <Card className="border-0 shadow-none w-full md:max-w-full sm:max-w-md">
            <CardHeader className="text-center">
              <CardTitle>
                <h3 className="font-medium text-text-label-gray text-28">
                  Welcome Again
                </h3>
              </CardTitle>
              <CardDescription>
                <p className="font-normal text-21 text-text-muted-gray">
                  Welcome back! Please fill your data
                </p>
              </CardDescription>
            </CardHeader>
            <form id="signUp-form" onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent>
                <FieldGroup>
                  <Controller
                    name="name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        className="gap-1"
                        data-invalid={fieldState.invalid}
                      >
                        <FieldLabel htmlFor="name">
                          <label className="text-18 font-medium text-text-label-gray">
                            Name
                          </label>
                        </FieldLabel>
                        <InputGroup className="max-w-full rounded-none h-14">
                          <InputGroupInput
                            {...field}
                            aria-invalid={fieldState.invalid}
                            id={field.name}
                            placeholder="user name"
                          />
                          <InputGroupAddon>
                            <User />
                          </InputGroupAddon>
                        </InputGroup>
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        className="gap-1"
                        data-invalid={fieldState.invalid}
                      >
                        <FieldLabel htmlFor="email">
                          <label className="text-18 font-medium text-text-label-gray">
                            Email
                          </label>
                        </FieldLabel>
                        <InputGroup className="max-w-full rounded-none h-14">
                          <InputGroupInput
                            {...field}
                            aria-invalid={fieldState.invalid}
                            id={field.name}
                            placeholder="example@untitledui.com"
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
                  <Controller
                    name="password"
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
                      
                          <div className="mt-4 flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                              {" "}
                              <div className="flex justify-center items-center bg-bg-icon-gray text-white h-6 w-6  rounded-full">
                                <Check size={20}/>
                              </div>
                              <span className="text-text-muted-gray text-18 font-normal">
                                must be at least 8 characters</span>
                            </div>
                            <div className="flex items-center gap-2">
                              {" "}
                              <div className="flex justify-center items-center bg-bg-icon-gray text-white h-6 w-6  rounded-full">
                                <Check size={20}/>
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
                    {form.formState.isSubmitting ? "Signing up..." : "Sign Up"}
                  </Button>

                  <div className="flex justify-center items-center my-4 w-[30%]">
                    <Separator className="border-border-separator-gray border!"/>
                    <span className="mx-3 text-text-muted-gray">Or</span>
              <Separator className="border-border-separator-gray border!" />
                  </div>

                  <Button
                    className="border-border-secondary-blue w-40 h-14 rounded-sm"
                    variant={"outline"}
                    type="submit"
                    size={"icon-sm"}
                  >
                    <img
                      className="h-7 w-7"
                      src="src/assets/images/auth/authIcons/socialIcon.png"
                      alt="google button"
                    />
                  </Button>
                </Field>
                <p className="text-18 font-medium text-text-primary-gray mt-5">
                  Already have an account?{" "}
                  <Link to="/login" className="text-18 font-semibold text-text-primary-blue">
                    sign In
                  </Link>
                </p>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default SignUpPage;
