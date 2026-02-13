import done from "../../../assets/images/done.png";
import checkCircle from "../../../assets/images/checkCircle.png";

import { NavLink } from "react-router-dom";
import Back from "../../common/Back";

const Done = () => {
  return (
    <div className="m-5 lg:mx-15 lg:my-5">
      <div className="mb-4 ml-6">
        <Back />
      </div>

      <div className="flex flex-col lg:flex-row justify-around  items-center lg:items-stretch gap-5">
        {/* Image Section */}
        <div className="w-[70%] lg:w-[50%] h-auto bg-white md:bg-gray-100 rounded-md order-1 lg:order-1">
          <img
            src={done}
            alt="done"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-2/5 flex flex-col gap-6 justify-center items-center text-center order-2 lg:order-2">
          <div className=" justify-center hidden md:flex">
            <img src={checkCircle} alt="check-Circle" className="w-20 h-20" />
          </div>

          <h2 className="font-medium text-28 text-gray-900">
            Payment Successful!
          </h2>

          <p className="text-lg text-gray-500 font-normal md:hidden">
            Thank you for your trust
          </p>

          <p className="text-lg text-gray-500 font-normal hidden md:flex">
            Your payment has been completed successfully.
          </p>

          <NavLink
            to="/"
            className="block w-full py-3 text-center rounded-md 
                     bg-[#1E429F] text-white text-lg font-semibold 
                     hover:bg-[#16357a] transition"
          >
            Back To Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Done;
