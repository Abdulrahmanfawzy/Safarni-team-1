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
import SearchPage from "./pages/search/SearchPage";
import FilterPage from "./pages/search/FilterPage";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/flights" element={<Flightlayout />}>
          <Route index element={<FirstPage />} />
          <Route path="flightbooking" element={<Flightbooking />} />
          <Route path="chooseseat" element={<ChooseSeat />} />
          <Route path="boarding-pass" element={<BardingPass />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="payment-success" element={<PaymentSuccess />} />
        </Route>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search/filter" element={<FilterPage />} />
      </Routes>

    </>
  );
};

export default App;
