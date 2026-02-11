import { useState } from "react";
import ImageCard from "../../components/common/ImageCard";
import flight from "../../assets/flight.png";
import Buttoncommon from "../../components/common/Buttoncommon";
import Back from "../../components/common/Back";

const ChooseSeat = () => {
  let [seat, useseat] = useState(0);
  const seatclicked = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    useseat(parseInt(target.innerText));
    if (target.parentElement?.children) {
      Array.from(target.parentElement.children).forEach((child) =>
        child.classList.remove("bg-green-500")
      );
    }
    target.classList.add("bg-green-500");
  };

  return (
    <>
      <section className="pl-25">
        <Back />
        <div className="max-w-screen  flex justify-center items-center gap-x-6 pb-18">
          <div className="w-[50%] h-full ">
            <div className="w-152 h-183.5 pr-15">
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
                  { name: "Available", color: "bg-bg-primary-blue" },
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
              <div className=" grid grid-cols-7 gap-8">
                {Array.from({ length: 30 }, (_, index) => {
                  if (index % 5 == 2)
                    return (
                      <>
                        <div
                          className={`size-12.5 rounded-lg content-center text-center text-white `}></div>
                        <div
                          className={`size-12.5 rounded-lg content-center text-center text-white `}></div>
                        <div
                          key={index}
                          onClick={() => seatclicked(event)}
                          className={`size-12.5 rounded-lg content-center text-center text-white bg-bg-primary-blue cursor-pointer`}>
                          {index + 1}
                        </div>
                      </>
                    );

                  return (
                    <div
                      key={index}
                      className={`size-12.5 rounded-lg content-center text-center text-white bg-bg-primary-blue cursor-pointer`}
                      onClick={() => seatclicked(event)}>
                      {index + 1}
                    </div>
                  );
                })}
              </div>
              <div className="w-full flex justify-between items-center">
                <h1 className="text-21">Ticket price</h1>
                <span className="text-25 font-[600px] text-bg-primary-blue">
                  $150.00
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <h1 className="text-21">your Seat</h1>
                <span className="text-25 font-[600px] text-bg-primary-blue">
                  {seat}
                </span>
              </div>
              <Buttoncommon title="Continue" link="/flights/boarding-pass" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseSeat;
