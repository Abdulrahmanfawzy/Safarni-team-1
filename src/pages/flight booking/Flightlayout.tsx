import React from "react";
import { Outlet } from "react-router-dom";

const Flightlayout = () => {
  return (
    <div className="w-full">
      <Outlet />
    </div>
  );
};

export default Flightlayout;
