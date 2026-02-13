import Hotel from "../../../assets/images/hotel.jpg";
import { Star, MapPin } from "lucide-react";

const hotels = [
  {
    id: 1,
    name: "Oasis Overture",
    location: "New York, USA",
    rate: 4.2,
    offer: "10%Off",
    image: Hotel,
  },
  {
    id: 2,
    name: "Skyline Stay",
    location: "Paris, France",
    rate: 4.5,
    offer: "15%Off",
    image: Hotel,
  },
  {
    id: 3,
    name: "Palm Resort",
    location: "Dubai, UAE",
    rate: 4.7,
    offer: "20%Off",
    image: Hotel,
  },
  {
    id: 4,
    name: "Ocean Breeze",
    location: "Malibu, USA",
    rate: 4.3,
    offer: "12%Off",
    image: Hotel,
  },
];

const NearbyHotelCards = () => {
  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-25 font-medium text-gray-900">Nearby Hotel</h1>
        <p className="text-22 font-medium text-sky-900 cursor-pointer">
          View all
        </p>
      </div>
      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-5">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="flex gap-4 p-4 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-32 h-32 md:w-36 md:h-36 rounded-md object-cover shrink-0"
            />

            <div className="flex flex-col justify-between w-full py-2">
              <div className="flex justify-between items-start">
                <div className="bg-sky-100 py-1 px-3 rounded-2xl text-sm font-medium text-sky-900">
                  {hotel.offer}
                </div>

                <div className="font-bold text-lg md:text-xl text-gray-700 flex gap-1 items-center">
                  <Star className="text-yellow-500 w-5 h-5" />
                  {hotel.rate}
                </div>
              </div>

              <p className="text-lg md:text-xl font-medium text-gray-900">
                {hotel.name}
              </p>

              <div className="flex gap-1 text-sm font-normal text-gray-400 items-center">
                <MapPin className="w-5 h-5" />
                <p>{hotel.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NearbyHotelCards;
