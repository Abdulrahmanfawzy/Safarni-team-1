import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Calendar, Plane } from "lucide-react";
import Back from "../../components/common/back";
import TimeInCard from "./TimeInCard";

const Flightbooking = () => {
  return (
    <section className="px-25">
      <Back />
      <div className="booking  space-y-10">
        <div className="flex justify-center items-center gap-x-12.5  ">
          <h1 className="w-full text-center flex justify-center items-center gap-2 rounded-xl px-4 py-2.5 shadow-sm h-20 content-center">
            <Calendar />
            Dec 16th, 2025
          </h1>
          <h1 className="w-full text-center flex justify-center items-center gap-2 rounded-xl px-4 py-2.5 shadow-sm h-20 content-center">
            <Calendar /> Dec 16th, 2025
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-7">
          {[1, 2, 3, 4, 5, 6].map(() => (
            <Link
              to={"/flights/chooseseat"}
              className="card w-full text-center rounded-xl  shadow-sm content-center px-8 py-4 space-y-4 cursor-pointer">
              <div className="flex justify-between items-center  ">
                <TimeInCard time="7:50" location="DEL" />
                <div className="flex flex-col justify-center items-center">
                  <Plane className=" size-4" />
                  <p className="text-gray-500 text-2xl">8:50</p>
                </div>
                <TimeInCard time="7:50" location="DEL" />
              </div>
              <div className="flex justify-between items-center ">
                <div className="text-left">
                  <h1 className="text-gray-500 text-lg">
                    1 layover: YYZ (3:55)
                  </h1>
                  <p className=" text-2xl">Scoot</p>
                </div>
                <div className="">
                  <h1 className=" text-2xl">$ 1,300</h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flightbooking;
