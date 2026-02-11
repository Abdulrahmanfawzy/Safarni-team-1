import done from "../../assets/images/done.png";
import checkCircle from "../../assets/images/checkCircle.png";

import { NavLink } from "react-router-dom";

const Done = () => {
  return (
    <>
      <div className="flex justify-around m-15 items-stretch gap-5">
        {/* Image Section */}
        <div className="w-[50%] h-auto bg-gray-100 rounded-md">
          <img
            src={done}
            alt="done"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Content Section */}
        <div className="w-2/5 flex flex-col gap-6 justify-center items-center text-center">
          
          {/* Check Icon */}
          <div className="flex justify-center">
            <img
              src={checkCircle}
              alt="check-Circle"
              className="w-20 h-20"
            />
          </div>

          <h2 className="font-medium text-[28px] text-gray-900">
            Payment Successful!
          </h2>

          <p className="text-lg text-gray-500 font-normal">
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
    </>
  );
};

export default Done;
