import cardImage from "../../../assets/images/cardImage.png";
import paypal from "../../../assets/images/logos_paypal.png";
import Mastercard from "../../../assets/images/Mastercard.png";
import Visa from "../../../assets/images/Visa.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CirclePlus, CreditCardIcon, Mail, User2 } from "lucide-react";
import Back from "../../common/Back";

const CheckOut = () => {
  const [methedTab, setMethedTab] = useState("");
<<<<<<< HEAD
  return (
    <>
      <div className="ml-20">
        <Back />
      </div>
      <div className="flex justify-around m-15 items-stretch gap-5 ">
        {/* Image Section */}
=======
>>>>>>> e1571c7 (edite response)

  return (
    <div className="flex flex-col lg:flex-row justify-around m-5 lg:m-15 gap-5 items-start  mb-24 md:mb-0">
      {/* Left Side: Title + Text */}
      <div className="w-full lg:w-2/5 flex flex-col gap-4  md:hidden">
        <h2 className="text-left font-medium text-[26px] text-gray-900">
          Payment Method
        </h2>
        <p className="text-left text-22 text-gray-700 font-medium">
          Add Your Payment Method
        </p>
      </div>

      {/* Right Side: Image */}
      <div className="w-full lg:w-[50%] h-auto bg-gray-100 rounded-md ">
        <img
          src={cardImage}
          alt="cardImage"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Payment Methods + Form */}
      <div className="w-full lg:w-2/5 flex flex-col gap-5 ">

        <div className=" hidden  md:flex md:flex-col md:gap-3">
          <h2 className="text-center font-medium text-[26px] text-gray-900">
            Payment Method
          </h2>
          <p className="text-left text-22 text-gray-700 font-medium">
            Add Your Payment Method
          </p>
        </div>

<<<<<<< HEAD
        <div className="w-2/5 flex flex-col gap-5">
          <h2 className="text-center font-medium text-[26px] text-gray-900">
            Payment Methed
          </h2>
          <p className="text-[22px] text-gray-700 font-medium">
            Add You Payment Methed
          </p>
          <div className="flex justify-evenly">
            <div
              onClick={() => setMethedTab("paypal")}
              className="bg-gray-100 py-2 px-5 rounded-2xl text-xl font-medium text-gray-600 flex items-center gap-1 cursor-pointer">
              <img src={paypal} alt="" className="w-5" />
              Paypal
            </div>
            <div
              onClick={() => setMethedTab("mastercard")}
              className="bg-gray-100 py-2 px-5 rounded-2xl text-xl font-medium text-gray-600 flex items-center gap-1 cursor-pointer">
              <img src={Mastercard} alt="" className="w-8" />
              Mastercard
            </div>
            <div
              onClick={() => setMethedTab("visa")}
              className="bg-gray-100 py-2 px-5 rounded-2xl text-xl font-medium text-gray-600 flex items-center gap-1 cursor-pointer">
              <img src={Visa} alt="" className="w-8" />
              Visa
=======
        <div className="flex justify-evenly flex-wrap gap-2">
          <div
            onClick={() => setMethedTab("paypal")}
            className="bg-gray-100 py-2 px-5 rounded-2xl text-xl font-medium text-gray-600 flex items-center gap-1 cursor-pointer"
          >
            <img src={paypal} alt="" className="w-5" />
            Paypal
          </div>
          <div
            onClick={() => setMethedTab("mastercard")}
            className="bg-gray-100 py-2 px-5 rounded-2xl text-xl font-medium text-gray-600 flex items-center gap-1 cursor-pointer"
          >
            <img src={Mastercard} alt="" className="w-8" />
            Mastercard
          </div>
          <div
            onClick={() => setMethedTab("visa")}
            className="bg-gray-100 py-2 px-5 rounded-2xl text-xl font-medium text-gray-600 flex items-center gap-1 cursor-pointer"
          >
            <img src={Visa} alt="" className="w-8" />
            Visa
          </div>
        </div>

        {/* Forms */}
        {methedTab === "paypal" && (
          <div className="flex flex-col gap-2">
            <div>
              <label className="text-lg font-medium text-gray-800">
                Full Name
              </label>
              <div className="flex items-center border-2 px-2 rounded-xs text-gray-400 mb-4">
                <User2 />
                <input
                  type="text"
                  placeholder="kneeDue@untitledui.com"
                  className="w-full border-0 p-2.5 text-xl font-normal outline-none focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            <div>
              <label className="text-lg font-medium text-gray-800">
                Your Email
              </label>
              <div className="flex items-center border-2 px-2 rounded-xs text-gray-400 mb-4">
                <Mail />
                <input
                  type="text"
                  placeholder="kneeDue@untitledui.com"
                  className="w-full border-0 p-2.5 text-xl font-normal outline-none focus:outline-none focus:ring-0"
                />
              </div>
>>>>>>> e1571c7 (edite response)
            </div>
          </div>
        )}

<<<<<<< HEAD
          {methedTab === "paypal" && (
            <div className="flex flex-col gap-1">
              <div>
                <label
                  htmlFor="name"
                  className="text-lg font-medium text-gray-800">
                  Full Name
=======
        {(methedTab === "mastercard" || methedTab === "visa") && (
          <div className="flex flex-col gap-2">
            <div>
              <label className="text-lg font-medium text-gray-800">
                Full Name
              </label>
              <div className="flex items-center border-2 px-2 rounded-xs text-gray-400 mb-4">
                <User2 />
                <input
                  type="text"
                  placeholder="kneeDue@untitledui.com"
                  className="w-full border-0 p-2.5 text-xl font-normal outline-none focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            <div>
              <label className="text-lg font-medium text-gray-800">
                Your Email
              </label>
              <div className="flex items-center border-2 px-2 rounded-xs text-gray-400 mb-4">
                <Mail />
                <input
                  type="text"
                  placeholder="kneeDue@untitledui.com"
                  className="w-full border-0 p-2.5 text-xl font-normal outline-none focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="w-[75%]">
                <label className="text-lg font-medium text-gray-800">
                  Valid Date
>>>>>>> e1571c7 (edite response)
                </label>
                <div className="flex items-center border-2 px-2 rounded-xs text-gray-400 mb-4">
                  <input
                    type="text"
                    placeholder="12-6-2024"
                    className="w-full border-0 p-2.5 text-xl font-normal outline-none focus:outline-none focus:ring-0"
                  />
                </div>
              </div>

<<<<<<< HEAD
              <div>
                <label
                  htmlFor="name"
                  className="text-lg font-medium text-gray-800">
                  Your Email
                </label>
=======
              <div className="w-[20%]">
                <label className="text-lg font-medium text-gray-800">Cvv</label>
>>>>>>> e1571c7 (edite response)
                <div className="flex items-center border-2 px-2 rounded-xs text-gray-400 mb-4">
                  <input
                    type="text"
                    placeholder="522"
                    className="w-full border-0 p-2.5 text-xl font-normal outline-none focus:outline-none focus:ring-0"
                  />
                  <CreditCardIcon />
                </div>
              </div>
            </div>
<<<<<<< HEAD
          )}
          {methedTab === "mastercard" && (
            <div className="flex flex-col gap-1">
              <div>
                <label
                  htmlFor="name"
                  className="text-lg font-medium text-gray-800">
                  Full Name
                </label>
                <div className="flex items-center border-2 px-2 rounded-xs text-gray-400 mb-4">
                  <User2 />
                  <input
                    id="name"
                    type="text"
                    placeholder="kneeDue@untitledui.com"
                    className="w-full border-0 p-2.5 text-xl font-normal 
               outline-none focus:outline-none focus:ring-0"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="text-lg font-medium text-gray-800">
                  Your Email
                </label>
                <div className="flex items-center border-2 px-2 rounded-xs text-gray-400 mb-4">
                  <Mail />
                  <input
                    id="name"
                    type="text"
                    placeholder="kneeDue@untitledui.com"
                    className="w-full border-0 p-2.5 text-xl font-normal 
               outline-none focus:outline-none focus:ring-0"
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <div className="w-[75%]">
                  <label
                    htmlFor="name"
                    className="text-lg font-medium text-gray-800">
                    Valid Date
                  </label>
                  <div className="flex items-center border-2 px-2 rounded-xs text-gray-400 mb-4">
                    <input
                      id="name"
                      type="text"
                      placeholder="12-6-2024"
                      className="w-full border-0 p-2.5 text-xl font-normal 
               outline-none focus:outline-none focus:ring-0"
                    />
                  </div>
                </div>

                <div className="w-[20%]">
                  <label
                    htmlFor="name"
                    className="text-lg font-medium text-gray-800">
                    Cvv
                  </label>
                  <div className="flex items-center border-2 px-2 rounded-xs text-gray-400 mb-4">
                    <input
                      id="name"
                      type="text"
                      placeholder="522"
                      className="w-full border-0 p-2.5 text-xl font-normal 
               outline-none focus:outline-none focus:ring-0"
                    />
                    <CreditCardIcon />
                  </div>
                </div>
              </div>
            </div>
          )}
          {methedTab === "visa" && (
            <div className="flex flex-col gap-1">
              <div>
                <label
                  htmlFor="name"
                  className="text-lg font-medium text-gray-800">
                  Full Name
                </label>
                <div className="flex items-center border-2 px-2 rounded-xs text-gray-400 mb-4">
                  <User2 />
                  <input
                    id="name"
                    type="text"
                    placeholder="kneeDue@untitledui.com"
                    className="w-full border-0 p-2.5 text-xl font-normal 
               outline-none focus:outline-none focus:ring-0"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="text-lg font-medium text-gray-800">
                  Your Email
                </label>
                <div className="flex items-center border-2 px-2 rounded-xs text-gray-400 mb-4">
                  <Mail />
                  <input
                    id="name"
                    type="text"
                    placeholder="kneeDue@untitledui.com"
                    className="w-full border-0 p-2.5 text-xl font-normal 
               outline-none focus:outline-none focus:ring-0"
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <div className="w-[75%]">
                  <label
                    htmlFor="name"
                    className="text-lg font-medium text-gray-800">
                    Valid Date
                  </label>
                  <div className="flex items-center border-2 px-2 rounded-xs text-gray-400 mb-4">
                    <input
                      id="name"
                      type="text"
                      placeholder="12-6-2024"
                      className="w-full border-0 p-2.5 text-xl font-normal 
               outline-none focus:outline-none focus:ring-0"
                    />
                  </div>
                </div>

                <div className="w-[20%]">
                  <label
                    htmlFor="name"
                    className="text-lg font-medium text-gray-800">
                    Cvv
                  </label>
                  <div className="flex items-center border-2 px-2 rounded-xs text-gray-400 mb-4">
                    <input
                      id="name"
                      type="text"
                      placeholder="522"
                      className="w-full border-0 p-2.5 text-xl font-normal 
               outline-none focus:outline-none focus:ring-0"
                    />
                    <CreditCardIcon />
                  </div>
                </div>
              </div>
            </div>
          )}

          {methedTab === "" && (
            <div className="flex justify-center">
              <button
                type="button"
                className="flex items-center gap-2 
               text-gray-900 px-6 py-3  text-xl font-medium ">
                Add Card
                <CirclePlus className="w-6 h-6" />
              </button>
            </div>
          )}

          <NavLink
            to="/checkout/done"
            className="block w-full py-3 text-center  rounded-md bg-[#1E429F] text-white text-lg font-semibold hover:bg-[#16357a] transition">
            Continue
          </NavLink>
        </div>
=======
          </div>
        )}

        {methedTab === "" && (
          <div className="flex justify-center">
            <button
              type="button"
              className="flex items-center gap-2 text-gray-900 px-6 py-3 text-xl font-medium"
            >
              Add Card
              <CirclePlus className="w-6 h-6" />
            </button>
          </div>
        )}

        <NavLink
          to="/checkout/done"
          className="block w-full py-3 text-center rounded-md bg-[#1E429F] text-white text-lg font-semibold hover:bg-[#16357a] transition"
        >
          Continue
        </NavLink>
>>>>>>> e1571c7 (edite response)
      </div>
    </div>
  );
};

export default CheckOut;
