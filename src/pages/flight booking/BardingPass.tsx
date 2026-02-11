import ImageCard from "../../components/common/ImageCard";
import flight from "./../../assets/flight.png";
import icon from "./../../assets/icon.png";
import person from "./../../assets/person.png";
import qr from "./../../assets/qr.png";

import { Button } from "../../components/ui/button";
import { Plane } from "lucide-react";

const BardingPass = () => {
  return (
    <>
      <section className="pl-25 pr-10">
        <Button variant={"outline"} className="rounded-full size-15 my-2">
          b
        </Button>
        <div className="max-w-screen  flex justify-center items-center gap-x-6  pb-18">
          <div className="w-[50%] h-full ">
            <div className="w-152 h-183.5 pr-25">
              <ImageCard img={flight} />
            </div>
          </div>
          <div className="w-[50%] h-full space-y-4 px-14">
            <h1 className="w-full text-center text-[26px] leading-8.75 font-medium text-gray-900">
              Barding pass
            </h1>
            <div className="w-full h-full flex flex-col justify-center shadow-lg rounded-2xl p-2 items-center gap-y-6 relative">
              <div className="w-[60%] left-0 h-4 bg-white absolute -top-2 transform-3d rotate-x-45 -skew-x-12 border border-b-0 border-r-0  "></div>
              <div className="w-[60%] right-0 h-4 bg-white absolute -top-2 transform-3d rotate-x-45 skew-x-12 border border-b-0 border-l-0"></div>
              <div className="w-[120%] h-3 rounded-2xl absolute -top-2  shadow-[inset_0_8px_8px_0_#4A5F8B] bg-transparent "></div>
              <div className="w-full flex justify-start items-end gap-x-15">
                <div className="w-35 flex flex-col justify-center items-center ">
                  <img src={icon} className="w-10" alt="" />
                  <span className="">Air Canada</span>
                </div>
                <span className="w-full">December 16h, 2022</span>
              </div>
              <div className="flex justify-between items-center w-full text-center   content-center px-8 py-4 border-b  ">
                <div className="">
                  <h1 className=" text-2xl">7:50</h1>
                  <p className="text-gray-500 text-2xl">DEL</p>
                </div>
                <div className="  flex flex-col justify-center items-center">
                  <Plane className=" size-4" />
                  <p className="text-gray-500 text-2xl">8:50</p>
                </div>
                <div className="">
                  <h1 className=" text-2xl">7:50</h1>
                  <p className="text-gray-500 text-2xl">DEL</p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full text-center content-center px-8 py-4  border-b">
                <div className="text-left">
                  <h1 className="text-gray-500 text-lg text-center">1 </h1>
                  <p className=" text-2xl">Scoot</p>
                </div>
                <div className="text-left">
                  <h1 className="text-gray-500 text-lg text-center">1 </h1>
                  <p className=" text-2xl">Scoot</p>
                </div>
                <div className="text-left">
                  <h1 className="text-gray-500 text-lg text-center">1 </h1>
                  <p className=" text-2xl">Scoot</p>
                </div>
                <div className="text-left">
                  <h1 className="text-gray-500 text-lg text-center">1 </h1>
                  <p className=" text-2xl">Scoot</p>
                </div>
              </div>
              <div className="w-full flex justify-between pb-2 items-start gap-x-15 border-b-2   border-dotted">
                <div className="flex gap-3 items-center">
                  <img
                    src={person}
                    className="size-13 object-cover object-center rounded-full"
                    alt=""
                  />
                  <div className=" flex flex-col justify-center items-center ">
                    <span className="text-2xl">Air Canada</span>
                    <span className="text-gray-500 text-lg text-center">
                      December 16
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-2">
                  lksjd
                  <span className="text-gray-500 text-lg text-center">29A</span>
                </div>
              </div>
              <div>
                <img src={qr} className="w-50" alt="" />
              </div>
            </div>
            <Button
              variant={"outline"}
              className="rounded-lg pt-2.5 px-4 w-full h-14 bg-blue-600 text-[20px] text-white hover:bg-white hover:text-blue-600 font-bold">
              Check Out
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BardingPass;
