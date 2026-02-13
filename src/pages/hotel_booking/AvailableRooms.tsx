import Hotel from "../../assets/images/hotel.jpg";
import { NavLink } from "react-router-dom";
import Back from "../../components/common/Back";

const Rooms = [
  {
    id: 1,
    name: "Room_1",
    price: "200",
    image: Hotel,
    path: "/hotels/hotelAbout",
  },
  {
    id: 2,
    name: "Room_1",
    price: "200",
    image: Hotel,
    path: "/hotels/hotelAbout",
  },
  {
    id: 3,
    name: "Room_1",
    price: "200",
    image: Hotel,
    path: "/hotels/hotelAbout",
  },
  {
    id: 4,
    name: "Room_1",
    price: "200",
    image: Hotel,
    path: "/hotels/hotelAbout",
  },
  {
    id: 5,
    name: "Room_1",
    price: "200",
    image: Hotel,
    path: "/hotels/hotelAbout",
  },
  {
    id: 6,
    name: "Room_1",
    price: "200",
    image: Hotel,
    path: "/hotels/hotelAbout",
  },
  {
    id: 7,
    name: "Room_1",
    price: "200",
    image: Hotel,
    path: "/hotels/hotelAbout",
  },
  {
    id: 8,
    name: "Room_1",
    price: "200",
    image: Hotel,
    path: "/hotels/hotelAbout",
  },
];

const AvailableRooms = () => {
  return (
    <>
      <div className="lg:mx-15 lg:my-5 mx-3">
         <div className="mb-4 ml-6">
         <Back />
       </div>
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-25 font-medium text-gray-900">
            Available Rooms
          </h1>
          <p className="text-22 font-medium text-sky-900 cursor-pointer">
            View all
          </p>
        </div>

        {/* Available Rooms */}
        <div className="cards grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 my-5">
          {Rooms.map((room) => (
            <NavLink
              key={room.id}
              to={room.path}
              className="
                flex flex-col gap-2 p-4 
                bg-white rounded-2xl shadow-xl
                hover:shadow-2xl hover:scale-[1.02]
                transition-all duration-300
              "
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-40 md:h-48 rounded-md object-cover"
              />

              <p className="text-lg md:text-22 font-medium text-gray-900">
                {room.name}
              </p>

              <div className="flex gap-1 text-sm md:text-lg font-normal items-center">
                <p>
                  From{" "}
                  <span className="text-blue-500 font-semibold">
                    {room.price}$
                  </span>{" "}
                  Per Night
                </p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default AvailableRooms;
