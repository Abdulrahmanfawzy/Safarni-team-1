import React from "react";

const SubTitle = ({ subtitle }: { subtitle: string }) => {
  return (
    <h3 className="w-full text-center text-[18px] leading-8.75 font-medium text-text-primary-gray">
      {subtitle}
    </h3>
  );
};

export default SubTitle;
