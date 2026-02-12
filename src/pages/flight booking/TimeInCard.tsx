import React from "react";

const TimeInCard = ({ time, location }: { time: string; location: string }) => {
  return (
    <div className="">
      <h1 className=" text-2xl">{time}</h1>
      <p className="text-gray-500 text-2xl">{location}</p>
    </div>
  );
};

export default TimeInCard;
