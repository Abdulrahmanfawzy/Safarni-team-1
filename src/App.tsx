import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import BardingPass from "./pages/flight booking/BardingPass";
// import Checkout from "./pages/flight booking/Checkout";
// import PaymentSuccess from "./pages/flight booking/PaymentSuccess";
import FirstPage from "./pages/flight booking/FirstPage";
import ChooseSeat from "./pages/flight booking/ChooseSeat";
import Flightlayout from "./pages/flight booking/Flightlayout";
import Flightbooking from "./pages/flight booking/Flightbooking";
import SearchPage from "./pages/search/SearchPage";
import FilterPage from "./pages/search/FilterPage";
import { ProfilePage } from "./pages/profile/ProfilePage";
import { PersonalInfoPage } from "./pages/profile/PersonalInfoPage";
import { AccountSecurityPage } from "./pages/profile/AccountSecurityPage";
import { MyBookingPage } from "./pages/profile/MyBookingPage";
import { ProfileLayout } from "./pages/profile/ProfileLayout";
import { LanguagePage } from "./pages/profile/LanguagePage";
import HotelBooking from "./pages/hotel_booking/HotelBooking";
import AvailableRooms from "./pages/hotel_booking/AvailableRooms";
import HotelAbout from "./pages/hotel_booking/HotelAbout";
import CheckIn from "./components/layout/PaymentMathed/CheckIn";
import CheckOut from "./components/layout/PaymentMathed/CheckOut";
import Done from "./components/layout/PaymentMathed/Done";
import WelcomePage from "./pages/auth/welcomePage/WelcomePage";
import LoginPage from "./pages/auth/login/LoginPage";
import SignUpPage from "./pages/auth/signUpPage/SignUpPage";
import ResetPasswordPage from "./pages/auth/resetPasswordPage/ResetPasswordPage";
import ForgetPasswordPage from "./pages/auth/forgetPasswordPage/ForgetPasswordPage";
import SuccessResetPassword from "./pages/auth/successResetPassword/SuccessResetPassword";
import OtpCodePage from "./pages/auth/otpCodePage/OtpCodePage";
import Destination from "./pages/destination/page";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Auth routes */}
        <Route path="/welcome-page" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route
          path="/success-reset-password"
          element={<SuccessResetPassword />}
        />
        <Route path="/verify-otp" element={<OtpCodePage />} />
        <Route index element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="/flights" element={<Flightlayout />}>
          <Route index element={<FirstPage />} />
          <Route path="flightbooking" element={<Flightbooking />} />
          <Route path="chooseseat" element={<ChooseSeat />} />
          <Route path="boarding-pass" element={<BardingPass />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="checkout/done" element={<Done />} />
        </Route>
        mohamed/searcha
        {/* mohamed/searcha */}
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search/filter" element={<FilterPage />} />
        <Route path="/profile" element={<ProfileLayout />}>
          <Route index element={<ProfilePage />} />
          <Route path="personal-info" element={<PersonalInfoPage />} />
          <Route path="account-security" element={<AccountSecurityPage />} />
          <Route path="my-booking" element={<MyBookingPage />} />
          <Route path="language" element={<LanguagePage />} />
        </Route>
        {/* Hotel Booking */}
        <Route path="/hotels" element={<HotelBooking />} />
        <Route path="/hotels/availableRooms" element={<AvailableRooms />} />
        <Route path="/hotels/hotelAbout" element={<HotelAbout />} />
        {/* Payment page -> check in , check out , check out (done) */}
        <Route path="/checkin" element={<CheckIn />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/checkout/done" element={<Done />} />
      </Routes>
    </>
  );
};

export default App;
