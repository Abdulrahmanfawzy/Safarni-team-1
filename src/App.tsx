import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
<<<<<<< HEAD
import BardingPass from "./pages/flight booking/BardingPass";
import Checkout from "./pages/flight booking/Checkout";
import PaymentSuccess from "./pages/flight booking/PaymentSuccess";
import FirstPage from "./pages/flight booking/FirstPage";
import ChooseSeat from "./pages/flight booking/ChooseSeat";
import Flightlayout from "./pages/flight booking/Flightlayout";
import Flightbooking from "./pages/flight booking/Flightbooking";
=======
import HotelBooking from "./hotel_booking/HotelBooking";
import AvailableRooms from "./hotel_booking/AvailableRooms";
import HotelAbout from "./hotel_booking/HotelAbout";
import CheckIn from "./hotel_booking/CheckIn";
import CheckOut from "./hotel_booking/CheckOut";
import Done from "./hotel_booking/Done";
>>>>>>> zeyad-hotel_booking

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/flights" element={<Flightlayout />}>
          <Route index path="" element={<FirstPage />} />
          <Route path="flightbooking" element={<Flightbooking />} />
          <Route path="chooseseat" element={<ChooseSeat />} />
          <Route path="boarding-pass" element={<BardingPass />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="payment-success" element={<PaymentSuccess />} />
        </Route>
=======

        {/* Hotel Booking */}
        <Route path="/hotels" element={<HotelBooking />} />
        <Route path="/hotels/availableRooms" element={<AvailableRooms />} />
        <Route path="/hotels/hotelAbout" element={<HotelAbout />} />
        <Route path="/hotels/checkin" element={<CheckIn />} />
        <Route path="/hotels/checkout" element={<CheckOut />} />
        <Route path="/hotels/checkout/done" element={<Done />} />
>>>>>>> zeyad-hotel_booking
      </Routes>
    </>
  );
};

export default App;
