import { Star, Bed, Bath, SquareDashed, Camera } from "lucide-react";
import ImageSection from "./components/ImageSection";
import { NavLink } from "react-router-dom";
const HotelAbout = () => {
  return (
    <>
      <div className="flex justify-around m-15 items-stretch gap-5 ">
        {/* Image Section */}
        <ImageSection />
        {/* About Section */}
        <div className="w-2/5 flex flex-col gap-5">
          <div className="flex justify-between pt-2">
            <div className="bg-sky-100 py-1.5 px-4 rounded-2xl text-sm font-medium text-sky-900">
              10%Off
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

          {/* Navigation */}
          <div className="navgation">
            <ul className="flex justify-between border-b-2 border-b-gray-200 text-gray-900">
              <li className="pb-2 hover:text-blue-700 hover:border-b-2 hover:border-b-blue-600 cursor-pointer">
                About
              </li>
              <li className="pb-2 hover:text-blue-700 hover:border-b-2 hover:border-b-blue-600 cursor-pointer">
                Gallery
              </li>
              <li className="pb-2 hover:text-blue-700 hover:border-b-2 hover:border-b-blue-600 cursor-pointer">
                Review
              </li>
            </ul>
          </div>

          {/* About Content */}
          <div className="flex flex-col gap-5">
            <div className="flex justify-between pt-2 text-gray-900 font-normal text-[22px]">
              <div className="flex gap-1 items-center">
                <Bed className="text-blue-500 w-7 h-7" />3 Beds
              </div>

              <div className="flex gap-1 items-center">
                <Bath className="text-blue-500 w-7 h-7" />2 Bath
              </div>

              <div className="flex gap-1 items-center">
                <SquareDashed className="text-blue-500 w-7 h-7" />
                1,848 Sqft
              </div>
            </div>

            <div className="flex justify-between pt-2 text-xl font-medium">
              <div>
                Gallery <span className="text-blue-500">(200)</span>
              </div>

              <div className="flex gap-1 items-center text-blue-700 cursor-pointer">
                <Camera className="w-7 h-7" />
                Add Photo
              </div>
            </div>

            <p className="text-2xl text-gray-500 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard du
              <span className="text-blue-500 cursor-pointer">
                {" "}
                ...Read More{" "}
              </span>
            </p>

            <p className="text-2xl">
              Total price : <span className="text-blue-500">$150.00</span>/night
            </p>

            <NavLink
              to="/hotels/checkin"
              className="w-full py-3 text-center rounded-md bg-[#1E429F] text-white text-xl font-semibold hover:bg-[#16357a] transition"
            >
              Book Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelAbout;
