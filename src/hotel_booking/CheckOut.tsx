import cardImage from "../assets/images/cardImage.png";
import paypal from "../assets/images/logos_paypal.png";
import Mastercard from "../assets/images/Mastercard.png";
import Visa from "../assets/images/Visa.png";

import { NavLink } from "react-router-dom";
import { CirclePlus } from "lucide-react";

const CheckOut = () => {
  return (
    <>
      <div className="flex justify-around m-15 items-stretch gap-5 ">
        {/* Image Section */}

        <div className="w-[50%] h-auto bg-gray-100 rounded-md">
          <img
            src={cardImage}
            alt="cardImage"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="w-2/5 flex flex-col gap-5">
          <h2 className="text-center font-medium text-[26px] text-gray-900">
            Payment Methed
          </h2>
          <p className="text-[22px] text-gray-700 font-medium">
            Add You Payment Methed
          </p>
          <div className="flex justify-evenly">
            <div className="bg-gray-100 py-2 px-5 rounded-2xl text-xl font-medium text-gray-600 flex items-center gap-1">
              <img src={paypal} alt="" className="w-5" />
              Paypal
            </div>
            <div className="bg-gray-100 py-2 px-5 rounded-2xl text-xl font-medium text-gray-600 flex items-center gap-1">
              <img src={Mastercard} alt="" className="w-8" />
              Mastercard
            </div>
            <div className="bg-gray-100 py-2 px-5 rounded-2xl text-xl font-medium text-gray-600 flex items-center gap-1">
              <img src={Visa} alt="" className="w-8" />
              Visa
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="flex items-center gap-2 
               text-gray-900 px-6 py-3  text-xl font-medium "
            >
              Add Card
              <CirclePlus className="w-6 h-6" />
            </button>
          </div>

          <NavLink
            to="/hotels/checkout/done"
            className="block w-full py-3 text-center  rounded-md bg-[#1E429F] text-white text-lg font-semibold hover:bg-[#16357a] transition"
          >
            Continue
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default CheckOut;
