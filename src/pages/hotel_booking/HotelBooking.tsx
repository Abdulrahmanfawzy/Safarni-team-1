import RecomCards from "./components/RecomCards";
import NearbyHotelCards from "./components/NearbyHotelCards";
const HotelBooking = () => {
  return (
    <>
      <div className="lg:m-15 mx-3">
        {/* Recommendation */}
        <RecomCards />

        {/* Nearby Hotel */}
        <NearbyHotelCards />
      </div>
    </>
  );
};

export default HotelBooking;
