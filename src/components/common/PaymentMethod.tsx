import React from "react";
import { Button } from "../ui/button";

const PaymentMethod = ({ title, img }: { title: string; img: string }) => {
  return (
    <Button
      variant={"outline"}
      className="bg-bg-muted-gray w-36.75 h-13 py-2 px-4 rounded-4xl text-text-secondary-gray text-25 font-medium hover:bg-bg-muted-gray hover:text-text-secondary-gray flex items-center justify-center gap-x-2 focus:bg-bg-secondary-blue focus:text-text-secondary-gray ">
      <img src={img} alt="" className="size-5" />
      {title}
    </Button>
  );
};

export default PaymentMethod;
