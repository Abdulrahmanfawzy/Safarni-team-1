

import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Field,
} from "@/components/ui/field";

import {ChevronLeft} from "lucide-react";

const WelcomePage = () => {
  

    return (
        <section className="w-full h-screen">
            <nav className=" w-[90%] mx-auto my-5">
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
            </nav>

            <div className="flex justify-center w-[90%] mx-auto">
                <div className="hidden md:block w-1/2 max-h-full px-4">
                    <img
                        className="w-full max-h-4/5 object-contain"
                        src="src/assets/auth/welcomePage/welcome.png"
                        alt="Welcome illustration"
                    />
                </div>
                <div className="flex justify-center w-full md:w-1/2 px-4">
                    <Card className="border-0 shadow-none w-full md:max-w-full sm:max-w-md">
                        <CardHeader className="text-center">
                            <CardTitle>
                                <h3 className="font-medium text-text-primary-gray text-28">
                                    Welcome
                                </h3>
                            </CardTitle>
                            <CardDescription>
                                <p className="font-normal text-21 text-text-secondary-gray!">
                                   Safarni is your all-in-one travel guide. Discover destinations, compare trip prices,
                                    book flights, hotels, car rentals, and local tours — all through one interactive experience.
                                </p>
                            </CardDescription>
                        </CardHeader>
                            <CardFooter className="flex flex-col">
                                <Field className="flex flex-col gap-0" orientation="horizontal">
                                    <Button
                                        type="submit"
                                        size={"lg"}
                                        className="font-semibold text-20! h-14 w-full text-white mb-6"
                                        variant="default"
                                    >
                                      Sign Up
                                    </Button>

                                       <Button
                                        type="submit"
                                        size={"lg"}
                                        className="font-semibold text-20! h-14 w-full text-text-primary-blue border-border-primary-blue"
                                        variant="outline"
                                        
                                    >
                                     Login
                                    </Button>
                                </Field>
                            
                            </CardFooter>
                  
                    </Card>
                </div>
            </div>
        </section>
    );
};
export default WelcomePage;
