import ImageSection from "./components/ImageSection";
import { Star } from "lucide-react";

const CheckIn = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-around m-15 items-stretch gap-10">
        {/* Image Section */}

        <ImageSection />

        {/* Booking Section */}
        <div className="w-full lg:w-2/5 flex flex-col gap-3">
          {/* Hotel Info */}
          <div className="flex flex-col gap-3 border-b-2 border-b-gray-300 pb-3">
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
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-sky-100 px-6 py-4 rounded-lg text-center border-2 border-gray-100 shadow-xs cursor-pointer">
                <p className="font-medium">Today</p>
                <p className="font-semibold text-lg">4 Oct</p>
              </div>
              <div className="px-6 py-4 rounded-lg text-center border-2 border-gray-100 shadow-xs cursor-pointer hover:border-blue-500">
                <p>Tomorrow</p>
                <p>5 Oct</p>
              </div>
              <div className="px-6 py-4 rounded-lg text-center border-2 border-gray-100 shadow-xs cursor-pointer hover:border-blue-500">
                <p>Wed</p>
                <p>6 Oct</p>
              </div>
              <div className="px-6 py-4 rounded-lg text-center border-2 border-gray-100 shadow-xs cursor-pointer hover:border-blue-500">
                <p>Thu</p>
                <p>7 Oct</p>
              </div>
            </div>
          </div>

          {/* Check Out */}
          <div className="flex flex-col gap-3">
            <p className="text-gray-900 text-xl font-medium">Check Out</p>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-sky-100 px-6 py-4 rounded-lg text-center border-2 border-gray-100 shadow-xs cursor-pointer">
                <p className="font-medium">Tomorrow</p>
                <p className="font-semibold text-lg">5 Oct</p>
              </div>
              <div className="px-6 py-4 rounded-lg text-center border-2 border-gray-100 shadow-xs cursor-pointer hover:border-blue-500">
                <p>Wed</p>
                <p>6 Oct</p>
              </div>
              <div className="px-6 py-4 rounded-lg text-center border-2 border-gray-100 shadow-xs cursor-pointer hover:border-blue-500">
                <p>Thu</p>
                <p>7 Oct</p>
              </div>
              <div className="px-6 py-4 rounded-lg text-center border-2 border-gray-100 shadow-xs cursor-pointer hover:border-blue-500">
                <p>Fri</p>
                <p>8 Oct</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-gray-900 text-xl font-medium">Note To Owner</p>
            <textarea name="" id="" className="w-full h-44 bg-gray-200 p-4 text-2xl" placeholder="Enter here"></textarea>
          </div>

          <button className="w-full py-3 rounded-md bg-[#1E429F] text-white text-xl font-semibold hover:bg-[#16357a] transition">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckIn;
