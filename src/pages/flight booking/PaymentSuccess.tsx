import React from "react";
import Buttoncommon from "../../components/common/Buttoncommon";
import H1 from "../../components/common/h1";
import SubTitle from "../../components/common/SubTitle";
import ImageCard from "../../components/common/ImageCard";
import Back from "../../components/common/back";
import success from "../../assets/success.png";
import { BookCheck } from "lucide-react";

const PaymentSuccess = () => {
  return (
    <section className="pl-25 pr-10">
      <Back />
      <div className="max-w-screen h-full  flex justify-center items-center gap-x-6  pb-18">
        <div className="w-[50%] h-full ">
          <div className="w-152 h-183.5 pr-25">
            <ImageCard img={success} />
          </div>
        </div>
        <div className="w-[50%] h-full">
          <div className="space-y-4 h-full px-14 flex flex-col justify-start">
            <div className="w-full flex flex-col justify-center items-center gap-y-2">
              <div className="p-3 rounded-full bg-green-500 text-white">
                <BookCheck className="size-5  " />
              </div>
              <H1 title={"Payment Succeful!"} />
              <SubTitle subtitle={"Thank you For Your Trust"} />
            </div>

            <div className="w-full flex flex-col items-center justify-center">
              <Buttoncommon title="Back To Home" link="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSuccess;
