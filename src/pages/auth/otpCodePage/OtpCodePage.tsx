
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
} from "@/components/ui/field";

import {  ChevronLeft } from "lucide-react";
import type { otpCodeFormValues } from "@/lib/schemas/OtpCodePage";
import otpCodeSchema from "@/lib/schemas/OtpCodePage";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useNavigate } from "react-router-dom";


const OtpCodePage = () => {
     const navigate=useNavigate()
    const form = useForm<otpCodeFormValues>({
        resolver: zodResolver(otpCodeSchema),
        defaultValues: {
            otp: ""
        },
    });

    function onSubmit(data: otpCodeFormValues) {
        console.log("data", data)
        navigate("/reset-password")
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
                        src="src/assets/images/auth/login/login.png"
                        alt="login illustration"
                    />
                </div>
                <div className="flex justify-center w-full md:w-1/2 px-4">
                    <Card className="border-0 shadow-none w-full md:max-w-full sm:max-w-md">
                        <CardHeader className="text-center">
                            <CardTitle>
                                <h3 className="font-medium text-text-label-gray text-28">
                                    Verify Code
                                </h3>
                            </CardTitle>
                            <CardDescription>
                                <p className="font-normal text-21 text-text-muted-gray">
                                    Please enter the code we just sent to email <br />
                                    <span className="text-text-primary-gray">kneedue@untitledui.com</span>
                                </p>
                                <div className="font-medium text-text-primary-gray mt-6 text-2xl">00:30</div>
                            </CardDescription>
                        </CardHeader>
                        <form id="login-form" onSubmit={form.handleSubmit(onSubmit)}>
                            <CardContent>

                                <FieldGroup>
                                    {/* OTP Field */}
                                    <Field className="w-full mb-3 mt-5">
                                        <Controller
                                            name="otp"
                                            control={form.control}
                                            rules={{
                                                required: "OTP is required",
                                                minLength: { value: 4, message: "OTP must be 4 digits" },
                                            }}
                                            render={({ field, fieldState }) => (
                                                <>
                                                    <InputOTP
                                                        {...field}
                                                        maxLength={4}
                                                        pattern={REGEXP_ONLY_DIGITS}
                                                        onChange={(value: string) => field.onChange(value)}
                                                        value={field.value}
                                                    >
                                                        <InputOTPGroup className="flex justify-center w-full gap-5">
                                                            {Array.from({ length: 4 }).map((_, i) => (
                                                                <InputOTPSlot
                                                                    key={i}
                                                                    index={i}
                                                                    className="border border-border-primary-blue w-[65px] h-[54px] text-lg rounded-[10px]! bg-white"
                                                                />
                                                            ))}
                                                        </InputOTPGroup>
                                                    </InputOTP>
                                                    {fieldState.error && <FieldError className="text-center" errors={[fieldState.error]} />}
                                                    <p className="text-center text-18 font-medium text-text-primary-gray mt-5">
                                                        OTP not receive ?{" "}
                                                        <span className="text-18 font-semibold text-text-primary-blue">
                                                          send again
                                                        </span>
                                                    </p>
                                                </>
                                            )}
                                        />
                                    </Field>
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
                                        {form.formState.isSubmitting ? "Verifying..." : "Verify"}
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
export default OtpCodePage;
