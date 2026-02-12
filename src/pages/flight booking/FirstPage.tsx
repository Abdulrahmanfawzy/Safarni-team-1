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
import { useForm } from "react-hook-form";
import Buttoncommon from "../../components/common/Buttoncommon";
import { MapPinned, RefreshCcw } from "lucide-react";

const FirstPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
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
      <div className=" h-full space-y-4 px-24">
        <div className="group-btn flex gap-2">
          <Button
            variant={"secondary"}
            className="text-2xl py-4 px-6 h-16 hover:text-blue-900  rounded-[254px] focus:bg-blue-500/20 focus:text-blue-900">
            <RefreshCcw className="size-8" />
            Round Trip
          </Button>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-full flex flex-col justify-center items-center gap-y-6">
          <InputFiled
            {...register("Location")}
            id="Location"
            htmlfor="Location"
            placeholder="Montreal,Canada"
          />
          <InputFiled
            {...register("Destination")}
            id="Destination"
            htmlfor="Destination"
            placeholder="Montreal,Canada"
          />
          <div className="flex justify-between items-center w-full gap-x-5">
            <InputFiled
              {...register("Departure")}
              id="Departure"
              htmlfor="Departure"
              placeholder="Dec 16th, 2025"
            />
            <InputFiled
              {...register("Return")}
              id="Return"
              htmlfor="Return"
              placeholder="Jan 6th,2025"
            />
          </div>
          <Select {...register("Passenger")}>
            <SelectTrigger className="rounded-lg pt-2.5 px-4 w-full h-14">
              <SelectValue placeholder="Passenger" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>flight</SelectLabel>
                <SelectItem value="flight1">flight</SelectItem>
                <SelectItem value="flight2">flight</SelectItem>
                <SelectItem value="flight3">flight</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Buttoncommon title="Search Flights" link="flightbooking" />
        </form>
      </div>
    </section>
  );
};

export default FirstPage;
