import Hotel from "../../../assets/images/hotel.jpg";
import { Star, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";

const hotels = [
  {
    id: 1,
    name: "Oasis Overture",
    location: "New York, USA",
    rate: 4.2,
    offer: "10%Off",
    image: Hotel,
    path: "availableRooms",
  },
  {
    id: 2,
    name: "Skyline Stay",
    location: "Paris, France",
    rate: 4.5,
    offer: "15%Off",
    image: Hotel,
    path: "availableRooms",
  },
  {
    id: 3,
    name: "Palm Resort",
    location: "Dubai, UAE",
    rate: 4.7,
    offer: "20%Off",
    image: Hotel,
    path: "availableRooms",
  },
  {
    id: 4,
    name: "Ocean Breeze",
    location: "Malibu, USA",
    rate: 4.3,
    offer: "12%Off",
    image: Hotel,
    path: "availableRooms",
  },
];

const RecomCards = () => {
  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-25 font-medium text-gray-900">
          Recommendation
        </h1>
        <p className="text-22 font-medium text-sky-900 cursor-pointer">
          View all
        </p>
      </div>

      {/* Cards Container */}
      <div
        className="
          flex 
          gap-4 
          my-5
          overflow-x-auto 
          snap-x snap-mandatory
          scrollbar-hide
          md:overflow-x-visible
          md:flex-wrap
          md:justify-between
        "
      >
        {hotels.map((hotel) => (
          <NavLink
            key={hotel.id}
            to={hotel.path}
            className="
              flex flex-col gap-2 p-4 
              bg-white rounded-2xl shadow-xl 
              w-72 
              shrink-0
              snap-start
              hover:scale-[1.02] transition-transform duration-300
            "
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-48 rounded-md object-cover"
            />

            <div className="flex justify-between pt-2">
              <div className="bg-sky-100 py-1.5 px-4 rounded-2xl text-sm font-medium text-sky-900">
                {hotel.offer}
              </div>

              <div className="font-semibold flex gap-1 items-center">
                <Star className="text-yellow-500 w-5 h-5" />
                {hotel.rate}
              </div>
            </div>

            <p className="text-22 font-medium text-gray-900">
              {hotel.name}
            </p>

            <div className="flex gap-1 text-lg font-normal text-gray-400 items-center">
              <MapPin className="w-5 h-5" />
              <p>{hotel.location}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default RecomCards;
