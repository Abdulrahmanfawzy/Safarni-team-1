import { Button } from "../../../components/ui/button";
import { useState } from "react";
import PaypalComponent from "./payment-by-paypal";
import MasterCardComponent from "./payment-by-master-card";
import VisaComponent from "./payment-by-visa";
import { RiMastercardFill } from "react-icons/ri";
import { FaPaypal } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";

export default function PaymentPages() {
  // ^ state
  const [activeTab, setActiveTab] = useState("payPal");

  // ^ function
  function getActiveTab() {
    switch (activeTab) {
      case "payPal":
        return <PaypalComponent />;
      case "masterCard":
        return <MasterCardComponent />;
      case "visa":
        return <VisaComponent />;
      default:
        return <PaypalComponent />;
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 *:w-3/4 space-y-3">
      <h1 className="text-gray-900 font-bold tracking-wider text-2xl text-center">
        Payment Methed
      </h1>
      <p className="text-gray-700 font-bold text-lg">Add You Payment Methed</p>
      <div className="flex items-center justify-center gap-3.5 *:flex-1 *:flex *:items-center *:gap-3 *:py-3 *:px-6 *:rounded-md *:text-black  *:cursor-pointer">
        <Button
          className={` ${activeTab == "payPal" ? "bg-cyan-100 hover:bg-cyan-200" : "bg-gray-100 hover:bg-gray-200"}`}
          onClick={() => setActiveTab("payPal")}
        >
          <FaPaypal />
          Paypal
        </Button>
        <Button
          className={` ${activeTab == "masterCard" ? "bg-cyan-100 hover:bg-cyan-200" : "bg-gray-100 hover:bg-gray-200"}`}
          onClick={() => setActiveTab("masterCard")}
        >
          <RiMastercardFill />
          Mastercard
        </Button>
        <Button
          className={` ${activeTab == "visa" ? "bg-cyan-100 hover:bg-cyan-200 " : "bg-gray-100 hover:bg-gray-200"}`}
          onClick={() => setActiveTab("visa")}
        >
          <RiVisaLine />
          Visa
        </Button>
      </div>

      <div>{getActiveTab()}</div>
    </div>
  );
}
