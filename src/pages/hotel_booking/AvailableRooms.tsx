import Hotel from "../../assets/images/hotel.jpg";
import { NavLink } from "react-router-dom";
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
      <div className="m-15">
        <div className="flex justify-between">
          <h1 className="text-25 font-medium text-gray-900">
            Available Rooms
          </h1>
          <p className="text-22 font-medium text-sky-900">View all</p>
        </div>
        {/* Available Rooms */}
        <div className="cards grid grid-cols-4 gap-6 my-5">
          {Rooms.map((room) => (
            <NavLink
              key={room.id}
              to={room.path}
              className="flex flex-col gap-2 p-4 bg-white rounded-2xl shadow-xl"
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-48 rounded-md object-cover"
              />

              <p className="text-22 font-medium text-gray-900">
                {room.name}
              </p>

              <div className="flex gap-1 text-lg font-normal items-center">
                <p>
                  From <span className="text-blue-500">{room.price}$</span> Per
                  Night
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
