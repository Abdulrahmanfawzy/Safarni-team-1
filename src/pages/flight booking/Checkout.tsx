import ImageCard from "../../components/common/ImageCard";
import card from "../../assets/card.png";
import H1 from "../../components/common/H1";
import SubTitle from "../../components/common/SubTitle";

import PaymentMethod from "../../components/common/PaymentMethod";
import Buttoncommon from "../../components/common/Buttoncommon";
import Back from "../../components/common/Back";
import InputFiled from "../../components/common/InputFiled";
const Checkout = () => {
  return (
    <section className="pl-25 pr-10">
      <Back />
      <div className="max-w-screen h-full  flex justify-center items-center gap-x-6  pb-18">
        <div className="w-[50%] h-full ">
          <div className="w-152 h-183.5 pr-25">
            <ImageCard img={card} />
          </div>
        </div>
        <div className="w-[50%] h-full">
          <div className="space-y-4 h-full px-14 flex flex-col justify-start">
            <div className="w-full flex flex-col justify-center items-center gap-y-2">
              <H1 title={"payment method"} />
              <SubTitle subtitle={"Please select your payment method"} />
              <div className="flex justify-center items-center gap-x-2">
                <PaymentMethod title="paypal" img={""} />
                <PaymentMethod title="paypal" img={""} />
                <PaymentMethod title="paypal" img={""} />
              </div>
            </div>
            <div className="inputfiled w-full space-y-4 hidden">
              <InputFiled
                name="full name "
                id="fullname"
                htmlfor="fullname"
                placeholder="Mohammed souliman"
              />
              <InputFiled
                name="Your Email"
                id="email"
                htmlfor="email"
                placeholder="mohammed@mohammed.com"
              />
              <div className="grid grid-cols-6 gap-x-3">
                <InputFiled
                  name="Valid date"
                  id="date"
                  htmlfor="date"
                  className="col-span-5"
                  placeholder="12-6-2024"
                />
                <InputFiled
                  name="Cvv"
                  id="cvv"
                  htmlfor="cvv"
                  className="col-span-1"
                  placeholder="552"
                />
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <div
                onClick={() => {
                  document
                    .querySelector(".inputfiled")
                    ?.classList.remove("hidden");
                  document
                    .querySelector(".addcardbtn")
                    ?.classList.add("hidden");
                }}
                className="addcardbtn flex justify-center items-center p-2 text-text-primary-gray text-22 capitalize cursor-pointer mb-2">
                add card +
              </div>
              <Buttoncommon title="checkout" link="/flights/payment-success" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
