import { useContext, useState } from "react";
import ImageCard from "../../components/common/ImageCard";
import flight from "../../assets/flight.png";
import Buttoncommon from "../../components/common/Buttoncommon";
import Back from "../../components/common/Back";
import { DataContext } from "../../hooks/usecontext";

const ChooseSeat = () => {
  let [seat, useseat] = useState(0);
  let Context = useContext(DataContext);

  let { dataflight, setdataflight } = Context as any;

  console.log(dataflight);
  const seatclicked = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    useseat(parseInt(target.innerText));
    setdataflight((prev: any) => ({
      ...prev,
      seat: parseInt(target.innerText),
    }));
    if (target.parentElement?.children) {
      Array.from(target.parentElement.children).forEach((child) =>
        child.classList.remove("bg-green-500")
      );
    }
    target.classList.add("bg-green-500");
  };

  return (
    <>
      <section className="md:pl-25">
        <Back />
        <div className="max-w-screen  grid md:grid-cols-2 gap-x-6 max-md:pb-30">
          <div className="  max-md:hidden ">
            <div className="w-auto h-full md:pr-15">
              <ImageCard img={flight} />
            </div>
          </div>
          <div className=" h-full space-y-2 px-24">
            <h1 className="w-full text-center text-[26px] leading-8.75 font-medium text-gray-900">
              Choose seat
            </h1>
            <div className="w-full h-full flex flex-col justify-center items-center gap-y-6">
              <div className="w-full flex justify-between items-center ">
                {[
                  { name: "Available", color: "bg-bg-primary-blue" },
                  { name: "Selected", color: "bg-green-500" },
                  { name: "Un available", color: "bg-gray-500" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center gap-x-2">
                    <span
                      className={`size-3 ${item.color} rounded-full block`}></span>
                    <p className="text-lg text-black">{item.name}</p>
                  </div>
                ))}
              </div>
              <div className=" grid md:grid-cols-7 md:gap-x-6 md:gap-y-3 max-md:grid-cols-6 max-md:gap-3">
                {Array.from({ length: 30 }, (_, index) => {
                  if (index % 5 == 2)
                    return (
                      <>
                        <div
                          className={`size-12.5 rounded-lg content-center text-center text-white  max-md:hidden`}></div>
                        <div
                          className={`size-12.5 rounded-lg content-center text-center text-white `}></div>
                        <div
                          key={index}
                          onClick={() => seatclicked(evevt)}
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
