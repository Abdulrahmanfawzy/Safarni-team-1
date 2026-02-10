import RecomCards from "./components/RecomCards";
import NearbyHotelCards from "./components/NearbyHotelCards";
const HotelBooking = () => {
  return (
    <>
      <div className="m-15">
        {/* Recommendation */}
        <RecomCards />

        {/* Nearby Hotel */}
        <NearbyHotelCards />
      </div>
    </>
  );
};

export default HotelBooking;
