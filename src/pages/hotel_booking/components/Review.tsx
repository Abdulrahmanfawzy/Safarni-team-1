import { SquarePen, Star, Search } from "lucide-react";
import Hotel from "../../../assets/images/hotel.jpg";
const Review = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between mb-4 text-2xl font-medium text-gray-900">
          <div>Review</div>

          <div className="flex gap-1 items-center text-blue-700 text-xl cursor-pointer">
            <SquarePen className="w-7 h-7" />
            add review
          </div>
        </div>

        <div className="flex items-center border-2 px-2 rounded-md text-gray-400 mb-4">
          <Search />
          <input
            type="text"
            placeholder="Search ... "
            className="w-full border-0 p-2 text-xl font-normal 
               outline-none focus:outline-none focus:ring-0"
          />
        </div>

        <div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex text-2xl font-medium items-center gap-4">
                <img src={Hotel} alt="" className="w-16 rounded-full" />
                Dale Thiel
              </div>
              <div className="flex">
                <Star className="text-yellow-500 w-5 h-5" />
                <Star className="text-yellow-500 w-5 h-5" />
                <Star className="text-yellow-500 w-5 h-5" />
                <Star className="text-yellow-500 w-5 h-5" />
                <Star className="text-yellow-500 w-5 h-5" />
              </div>
            </div>
            <p className="text-xl text-gray-600 font-medium">11 months ago</p>
          </div>
          <p className="text-22 text-gray-700 font-normal">
            I really enjoyed my stay—the room was clean, the staff were
            friendly, and everything I needed was nearby.
          </p>
        </div>
      </div>
    </>
  );
};
export default Review;
