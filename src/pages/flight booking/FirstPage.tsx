import React from "react";
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
} from "@/components/ui/select";
import { Button } from "../../components/ui/button";

const FirstPage = () => {
  return (
    <div className="min-w-screen h-screen flex justify-center items-center gap-x-6  pt-27 pb-18">
      <div className="w-[50%] h-full ">
        <div className="w-152 h-183.5 pl-25">
          <ImageCard img={flight} />
        </div>
      </div>
      <div className="w-[50%] h-full space-y-4 px-24">
        <div className="group-btn flex gap-2">
          <Button
            variant={"secondary"}
            className="text-2xl py-4 px-6 h-16 hover:text-blue-900 rounded-[254px] focus:bg-blue-500/20 focus:text-blue-900">
            Round Trip
          </Button>
          <Button
            variant={"secondary"}
            className="text-2xl py-4 px-6 h-16 hover:text-blue-900 rounded-[254px] focus:bg-blue-500/20 focus:text-blue-900">
            Round Trip
          </Button>
          <Button
            variant={"secondary"}
            className="text-2xl py-4 px-6 h-16 hover:text-blue-900 rounded-[254px] focus:bg-blue-500/20 focus:text-blue-900">
            Round Trip
          </Button>
        </div>
        <form className="w-full h-full flex flex-col justify-center items-center gap-y-6">
          <InputFiled
            name="Location"
            id="Location"
            htmlfor="Location"
            placeholder="Montreal,Canada"
          />
          <InputFiled
            name="Location"
            id="Location"
            htmlfor="Location"
            placeholder="Montreal,Canada"
          />
          <div className="flex justify-between items-center w-full gap-x-5">
            <InputFiled
              name="Location"
              id="Location"
              htmlfor="Location"
              placeholder="Montreal,Canada"
            />
            <InputFiled
              name="Location"
              id="Location"
              htmlfor="Location"
              placeholder="Montreal,Canada"
            />
          </div>
          <Select>
            <SelectTrigger className="rounded-lg pt-2.5 px-4 w-full h-14">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button
            variant={"outline"}
            className="rounded-lg pt-2.5 px-4 w-full h-14 bg-blue-600 text-[20px] text-white hover:bg-white hover:text-blue-600 font-bold">
            Search Flights
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FirstPage;
