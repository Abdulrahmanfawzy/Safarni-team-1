import { useState } from "react";
import { Star } from "lucide-react";
import ImageSection from "./components/ImageSection";
import { NavLink } from "react-router-dom";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Review from "./components/Review";
import Back from "../../components/common/Back";

const HotelAbout = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <>
      <div
        className=" m-0  mb-24 lg:mx-15 lg:my-5 "
      >
        <div className="mb-4 ml-6 hidden md:block">
          <Back />
        </div>

        <div
          className="
          flex 
          flex-col 
          md:flex-row 
          md:justify-around 
         
          items-stretch 
          gap-5
        "
        >
          {/* Image Section */}
          <ImageSection />

          {/* About Section */}
          <div className="w-full md:w-2/5 flex flex-col gap-5 px-3">
            <div className="flex justify-between pt-2">
              <div className="bg-sky-100 py-1.5 px-4 rounded-2xl text-sm font-medium text-sky-900">
                10%Off
              </div>

              <div className="font-semibold flex gap-1 items-center text-gray-500">
                <Star className="text-yellow-500 w-5 h-5" />
                4.5 (356 reviews)
              </div>
            </div>

            <p className="text-2xl md:text-3xl font-medium text-gray-900">
              HarborHaven Hideaway
            </p>

            <p className="text-base md:text-lg font-medium text-gray-500">
              1012 Ocean Avenue, New York, USA
            </p>

            {/* Navigation Tabs */}
            <div className="navgation">
              <ul className="flex justify-between border-b-2 border-b-gray-200 text-gray-900 text-sm md:text-base">
                <li
                  onClick={() => setActiveTab("about")}
                  className={`pb-2 cursor-pointer transition
                  ${
                    activeTab === "about"
                      ? "text-blue-700 border-b-2 border-b-blue-600 font-semibold"
                      : "hover:text-blue-700 hover:border-b-2 hover:border-b-blue-600"
                  }
                `}
                >
                  About
                </li>

                <li
                  onClick={() => setActiveTab("gallery")}
                  className={`pb-2 cursor-pointer transition
                  ${
                    activeTab === "gallery"
                      ? "text-blue-700 border-b-2 border-b-blue-600 font-semibold"
                      : "hover:text-blue-700 hover:border-b-2 hover:border-b-blue-600"
                  }
                `}
                >
                  Gallery
                </li>

                <li
                  onClick={() => setActiveTab("review")}
                  className={`pb-2 cursor-pointer transition
                  ${
                    activeTab === "review"
                      ? "text-blue-700 border-b-2 border-b-blue-600 font-semibold"
                      : "hover:text-blue-700 hover:border-b-2 hover:border-b-blue-600"
                  }
                `}
                >
                  Review
                </li>
              </ul>
            </div>

            {/* Content */}
            <div className="pt-2">
              {activeTab === "about" && <About />}
              {activeTab === "gallery" && <Gallery />}
              {activeTab === "review" && <Review />}
            </div>

            <p className="text-xl md:text-2xl font-medium">
              Total price : <span className="text-blue-500">$150.00</span>/night
            </p>

            <NavLink
              to="/checkin"
              className="w-full py-3 text-center rounded-md bg-[#1E429F] text-white text-lg md:text-xl font-semibold hover:bg-[#16357a] transition"
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
