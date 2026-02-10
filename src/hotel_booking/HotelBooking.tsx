import RecomCards from "./components/RecomCards";
import NearbyHotelCards from "./components/NearbyHotelCards";
const HotelBooking = () => {
  return (
    <>
      <div className="m-15">
        <div className="flex justify-between">
          <h1 className="text-[25px] font-medium text-gray-900">
            Recommendation
          </h1>
          <p className="text-[22px] font-medium text-sky-900">View all</p>
        </div>
        {/* Recommendation */}
        <RecomCards />
        <div className="flex justify-between">
          <h1 className="text-[25px] font-medium text-gray-900">
            Nearby Hotel
          </h1>
          <p className="text-[22px] font-medium text-sky-900">View all</p>
        </div>
        {/* Nearby Hotel */}
        <NearbyHotelCards />
      </div>
    </>
  );
};

export default HotelBooking;
