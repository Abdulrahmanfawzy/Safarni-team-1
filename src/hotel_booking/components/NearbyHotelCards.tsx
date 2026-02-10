import Hotel from "../../assets/images/hotel.jpg";
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
      <div className="cards grid grid-cols-2 gap-6 my-5">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="flex gap-4 p-4 bg-white rounded-2xl shadow-xl"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-36 h-36 rounded-md object-cover"
            />

            <div className="flex flex-col justify-between w-full py-3">
              <div className="flex justify-between pt-1">
                <div className="bg-sky-100 py-1 px-3 rounded-2xl text-sm font-medium text-sky-900">
                  {hotel.offer}
                </div>

                <div className="font-semibold flex gap-1 items-center">
                  <Star className="text-yellow-500 w-5 h-5" />
                  {hotel.rate}
                </div>
              </div>

              <p className="text-[20px] font-medium text-gray-900">
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
