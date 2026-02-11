import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import BardingPass from "./pages/flight booking/BardingPass";
import Checkout from "./pages/flight booking/Checkout";
import PaymentSuccess from "./pages/flight booking/PaymentSuccess";
import FirstPage from "./pages/flight booking/FirstPage";
import ChooseSeat from "./pages/flight booking/ChooseSeat";
import Flightlayout from "./pages/flight booking/Flightlayout";
import Flightbooking from "./pages/flight booking/Flightbooking";
import { ProfilePage } from "./pages/profile/ProfilePage";
import { PersonalInfoPage } from "./pages/profile/PersonalInfoPage";
import { AccountSecurityPage } from "./pages/profile/AccountSecurityPage";
import { MyBookingPage } from "./pages/profile/MyBookingPage";
import { ProfileLayout } from "./pages/profile/ProfileLayout";
import { LanguagePage } from "./pages/profile/LanguagePage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flightlayout />}>
          <Route index path="" element={<FirstPage />} />
          <Route path="flightbooking" element={<Flightbooking />} />
          <Route path="chooseseat" element={<ChooseSeat />} />
          <Route path="boarding-pass" element={<BardingPass />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="payment-success" element={<PaymentSuccess />} />
        </Route>
        <Route path="/profile" element={<ProfileLayout />} >
          <Route index element={<ProfilePage />} />
          <Route path="personal-info" element={<PersonalInfoPage />} />
          <Route path="account-security" element={<AccountSecurityPage />} />
          <Route path="my-booking" element={<MyBookingPage />} />
          <Route path="language" element={<LanguagePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
