import { useState } from "react";
import { Button } from "../../components/ui/button";
import ImageCard from "../../components/common/ImageCard";
import flight from "../../assets/flight.png";

const ChooseSeat = () => {
  let [seat, useseat] = useState(0);
  const seatclicked = (e) => {
    if (e.target.classList.contains("bg-blue-500")) {
      e.target.classList.toggle("bg-blue-500");
      e.target.classList.toggle("bg-green-500");
      useseat((perv) => perv + 1);
    } else if (e.target.classList.contains("bg-green-500")) {
      e.target.classList.toggle("bg-green-500");
      e.target.classList.toggle("bg-blue-500");
      useseat((perv) => perv - 1);
    }
  };

  return (
    <>
      <Button variant={"outline"} className="rounded-full size-15 my-2 ml-25">
        b
      </Button>
      <div className="max-w-screen  flex justify-center items-center gap-x-6 pb-18">
        <div className="w-[50%] h-full ">
          <div className="w-152 h-183.5 pl-25">
            <ImageCard img={flight} />
          </div>
        </div>
        <div className="w-[50%] h-full space-y-4 px-24">
          <h1 className="w-full text-center text-[26px] leading-8.75 font-medium text-gray-900">
            Choose seat
          </h1>
          <div className="w-full h-full flex flex-col justify-center items-center gap-y-6">
            <div className="w-full flex justify-between items-center ">
              {[
                { name: "Available", color: "bg-blue-500" },
                { name: "Selected", color: "bg-green-500" },
                { name: "Un available", color: "bg-gray-500" },
              ].map((item) => (
                <div className="flex justify-between items-center gap-x-2">
                  <span
                    className={`size-3 ${item.color} rounded-full block`}></span>
                  <p className="text-lg text-black">{item.name}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-8">
              {Array.from({ length: 30 }, (_, index) => {
                if (index % 5 == 2)
                  return (
                    <>
                      <div
                        className={`size-12.5 rounded-lg content-center text-center text-white  cursor-pointer`}></div>
                      <div
                        className={`size-12.5 rounded-lg content-center text-center text-white  cursor-pointer`}></div>
                      <div
                        key={index}
                        onClick={() => seatclicked(event)}
                        className={`size-12.5 rounded-lg content-center text-center text-white bg-blue-500 cursor-pointer`}>
                        {index + 1}
                      </div>
                    </>
                  );

                return (
                  <div
                    key={index}
                    className={`size-12.5 rounded-lg content-center text-center text-white bg-blue-500 cursor-pointer`}
                    onClick={() => seatclicked(event)}>
                    {index + 1}
                  </div>
                );
              })}
            </div>
            <div className="w-full flex justify-between items-center">
              <h1 className="text-[21px]">Ticket price</h1>
              <span className="text-[25px] font-[600px] text-[#1E429F]">
                $150.00
              </span>
            </div>
            <div className="w-full flex justify-between items-center">
              <h1 className="text-[21px]">your Seat</h1>
              <span className="text-[25px] font-[600px] text-[#1E429F]">
                {seat}
              </span>
            </div>
            <Button
              variant={"outline"}
              className="rounded-lg pt-2.5 px-4 w-full h-14 bg-blue-600 text-[20px] text-white hover:bg-white hover:text-blue-600 font-bold">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseSeat;
