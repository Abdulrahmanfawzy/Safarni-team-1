import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import HotelBooking from "./hotel_booking/HotelBooking";
import AvailableRooms from "./hotel_booking/AvailableRooms";
import HotelAbout from "./hotel_booking/HotelAbout";
import CheckIn from "./hotel_booking/CheckIn";
import CheckOut from "./hotel_booking/CheckOut";
import Done from "./hotel_booking/Done";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Hotel Booking */}
        <Route path="/hotels" element={<HotelBooking />} />
        <Route path="/hotels/availableRooms" element={<AvailableRooms />} />
        <Route path="/hotels/hotelAbout" element={<HotelAbout />} />
        <Route path="/hotels/checkin" element={<CheckIn />} />
        <Route path="/hotels/checkout" element={<CheckOut />} />
        <Route path="/hotels/checkout/done" element={<Done />} />
      </Routes>
    </>
  );
};

export default App;
