import ImageCard from "../../components/common/ImageCard";
import flight from "./../../assets/flight.png";
import InputFiled from "../../components/common/InputFiled";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Button } from "../../components/ui/button";
import { Controller, useForm } from "react-hook-form";
import Buttoncommon from "../../components/common/Buttoncommon";
import { MapPinned, RefreshCcw } from "lucide-react";
import { useContext } from "react";
import { DataContext } from "../../hooks/usecontext.tsx";

type FormValues = {
  Location: string;
  Destination: string;
  Departure: string;
  Return: string;
  Passenger: string;
};

const FirstPage = () => {
  const { register, handleSubmit, control } = useForm<FormValues>();
  const Context = useContext(DataContext);

  if (!Context) {
    throw new Error(
      "Context is undefined. Make sure to wrap your component with DataProvider."
    );
  }

  let { setdataflight } = Context as any;

  const onSubmit = (data: any) => {
    setdataflight(data);
  };

  return (
    <section className="max-w-screen h-full  grid md:grid-cols-2 gap-6  md:pt-27 max-md:mb-30">
      {/* image card */}
      <div className=" h-full ">
        <div className="w-auto md:w-152  h-full max-md:mx-auto md:pl-25">
          <ImageCard img={flight} />
        </div>
      </div>
      {/* input location  */}
      <div className=" h-full space-y-4 max-md:px-10 md:px-24">
        <div className="group-btn flex gap-2">
          <Button
            variant={"secondary"}
            className="text-2xl py-4 px-6 h-16 hover:text-blue-900 relative  rounded-[254px]  focus:bg-blue-500/20 focus:text-blue-900">
            <RefreshCcw className="size-8" />
            {/* <input
              type="radio"
              className="absolute top-0 bottom-0 right-0 left-0 opacity-30"
              name=""
              id="trip"
            /> */}
            Round Trip
          </Button>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-full flex flex-col justify-center items-center gap-y-6">
          <InputFiled
            register={register}
            id="Location"
            htmlfor="Location"
            placeholder="Montreal,Canada"
            name="Location"
          />
          <InputFiled
            register={register}
            id="Destination"
            name="Destination"
            htmlfor="Destination"
            placeholder="Montreal,Canada"
          />
          <div className="flex justify-between items-center w-full gap-x-5">
            <InputFiled
              register={register}
              id="Departure"
              name="Departure"
              htmlfor="Departure"
              placeholder="Dec 16th, 2025"
            />
            <InputFiled
              register={register}
              id="Return"
              name="Return"
              htmlfor="Return"
              placeholder="Jan 6th,2025"
            />
          </div>
          <Controller
            control={control}
            name="Passenger"
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="rounded-lg px-4 w-full h-14">
                  <SelectValue placeholder="Passenger" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Flight</SelectLabel>
                    <SelectItem value="flight1">flight</SelectItem>
                    <SelectItem value="flight2">flightlksd</SelectItem>
                    <SelectItem value="flight3">flighsdft</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          <Buttoncommon title="Search Flights" link="flightbooking" />
        </form>
      </div>
    </section>
  );
};

export default FirstPage;
