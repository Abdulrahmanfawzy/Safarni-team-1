import React from "react";

const H1 = ({ title }: { title: string }) => {
  return (
    <h1 className="w-full text-center text-[26px] leading-8.75 font-medium text-gray-900">
      {title}
    </h1>
  );
};

export default H1;
