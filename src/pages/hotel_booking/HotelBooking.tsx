import RecomCards from "./components/RecomCards";
import NearbyHotelCards from "./components/NearbyHotelCards";
import Back from "../../components/common/Back";
const HotelBooking = () => {
  return (
    <>
      <div className="lg:mx-15 lg:my-5 m-0 px-3">
        <div className="mb-4 ml-6">
          <Back />
        </div>
        {/* Recommendation */}
        <RecomCards />

        {/* Nearby Hotel */}
        <NearbyHotelCards />
      </div>
    </>
  );
};

export default HotelBooking;
