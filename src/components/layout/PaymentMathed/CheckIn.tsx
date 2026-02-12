import { useState } from "react";
import ImageSection from "../../../pages/hotel_booking/components/ImageSection";
import { Star } from "lucide-react";
import { NavLink } from "react-router-dom";

const CheckIn = () => {
  const [openSubmit, setOpenSubmit] = useState(false);
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-around md:m-15 m-0 items-stretch gap-10  mb-24 md:mb-0">
        {/* Image Section */}

        <ImageSection />

        {/* Booking Section */}
        <div className="w-full lg:w-2/5 flex flex-col gap-3 md:px-0 px-3">
          {/* Hotel Info */}
          <div className="flex flex-col gap-3 border-b-2 border-b-gray-100 pb-3">
            <div className="flex justify-between items-center pt-2">
              <div className="bg-sky-100 py-1.5 px-4 rounded-2xl text-sm font-medium text-sky-900">
                10% Off
              </div>

              <div className="font-semibold flex gap-1 items-center text-gray-500">
                <Star className="text-yellow-500 w-5 h-5" />
                4.5 (356 reviews)
              </div>
            </div>

            <p className="text-3xl font-medium text-gray-900">
              HarborHaven Hideaway
            </p>

            <p className="text-lg font-medium text-gray-500">
              1012 Ocean Avenue, New York, USA
            </p>
          </div>

          {/* Booking Title */}
          <h2 className="text-center text-2xl font-medium text-blue-700">
            Book Hotel
          </h2>

          {/* Check In */}
          <div className="flex flex-col gap-3">
            <p className="text-gray-900 text-xl font-medium">Check In</p>

            <div
              className="
             flex
          gap-4
          overflow-x-auto
          snap-x snap-mandatory
          scrollbar-hide
          md:grid md:grid-cols-4 md:overflow-x-visible"
            >
              <div className="bg-sky-100   px-10 py-2 md:py-4 md:px-6 rounded-lg text-center border-2 border-gray-100 shadow-xs cursor-pointer">
                <p className="font-medium">Today</p>
                <p className="font-semibold text-lg">4 Oct</p>
              </div>
              <div className=" px-10 py-2  md:py-4 md:px-6 rounded-lg text-center border-2 border-gray-100 shadow-xs cursor-pointer hover:border-blue-500">
                <p>Tomorrow</p>
                <p>5 Oct</p>
              </div>
              <div className=" px-10 py-2  md:py-4 md:px-6 rounded-lg text-center border-2 border-gray-100 shadow-xs cursor-pointer hover:border-blue-500">
                <p>Wed</p>
                <p>6 Oct</p>
              </div>
              <div className=" px-10 py-2  md:py-4 md:px-6 rounded-lg text-center border-2 border-gray-100 shadow-xs cursor-pointer hover:border-blue-500">
                <p>Thu</p>
                <p>7 Oct</p>
              </div>
            </div>
          </div>

          {/* Check Out */}
          <div className="flex flex-col gap-3">
            <p className="text-gray-900 text-xl font-medium">Check Out</p>
            <div
              className="
            flex
          gap-4
          overflow-x-auto
          snap-x snap-mandatory
          scrollbar-hide
          md:grid md:grid-cols-4 md:overflow-x-visible"
            >
              <div className="bg-sky-100  px-10 py-2  md:py-4 md:px-6 rounded-lg text-center border-2 border-gray-100 shadow-xs cursor-pointer">
                <p className="font-medium">Tomorrow</p>
                <p className="font-semibold text-lg">5 Oct</p>
              </div>
              <div className=" px-10 py-2  md:py-4 md:px-6 rounded-lg text-center border-2 border-gray-100 shadow-xs cursor-pointer hover:border-blue-500">
                <p>Wed</p>
                <p>6 Oct</p>
              </div>
              <div className=" px-10 py-2  md:py-4 md:px-6 rounded-lg text-center border-2 border-gray-100 shadow-xs cursor-pointer hover:border-blue-500">
                <p>Thu</p>
                <p>7 Oct</p>
              </div>
              <div className=" px-10 py-2  md:py-4 md:px-6 rounded-lg text-center border-2 border-gray-100 shadow-xs cursor-pointer hover:border-blue-500">
                <p>Fri</p>
                <p>8 Oct</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-gray-900 text-xl font-medium">Note To Owner</p>
            <textarea
              name=""
              id=""
              className="w-full h-44 bg-gray-100 p-4 text-2xl"
              placeholder="Enter here"
            ></textarea>
          </div>

          <button
            onClick={() => setOpenSubmit(true)}
            className="w-full py-3 rounded-md bg-[#1E429F] text-white text-xl font-semibold hover:bg-[#16357a] transition"
          >
            Submit
          </button>
        </div>
        {openSubmit && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white w-[95%] max-w-xl rounded-2xl shadow-2xl p-10 relative animate-scaleIn">
              <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-8">
                <div>
                  <p className="text-2xl font-medium text-gray-900">Adults</p>
                  <p className="text-xl text-gray-500">Ages 18 or above</p>
                </div>

                <div className="flex items-center gap-3">
                  <button className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-100 text-xl font-bold hover:bg-gray-200 transition">
                    -
                  </button>

                  <span className="w-8 text-center text-lg font-semibold">
                    1
                  </span>

                  <button className="w-9 h-9 flex items-center justify-center rounded-md bg-blue-900 text-white text-xl font-bold hover:bg-blue-700 transition">
                    +
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-8">
                <div>
                  <p className="text-2xl font-medium text-gray-900">Children</p>
                  <p className="text-xl text-gray-500">Ages 2-17</p>
                </div>

                <div className="flex items-center gap-3">
                  <button className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-100 text-xl font-bold hover:bg-gray-200 transition">
                    -
                  </button>

                  <span className="w-8 text-center text-lg font-semibold">
                    1
                  </span>

                  <button className="w-9 h-9 flex items-center justify-center rounded-md bg-blue-900 text-white text-xl font-bold hover:bg-blue-700 transition">
                    +
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-8">
                <div>
                  <p className="text-2xl font-medium text-gray-900">Infants</p>
                  <p className="text-xl text-gray-500">Under Ages 2</p>
                </div>

                <div className="flex items-center gap-3">
                  <button className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-100 text-xl font-bold hover:bg-gray-200 transition">
                    -
                  </button>

                  <span className="w-8 text-center text-lg font-semibold">
                    1
                  </span>

                  <button className="w-9 h-9 flex items-center justify-center rounded-md bg-blue-900 text-white text-xl font-bold hover:bg-blue-700 transition">
                    +
                  </button>
                </div>
              </div>

              <NavLink
                to="/checkout"
                className="block w-full py-3 text-center  rounded-md bg-[#1E429F] text-white text-lg font-semibold hover:bg-[#16357a] transition"
              >
                Book Now
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CheckIn;
