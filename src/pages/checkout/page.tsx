import PaymentPages from "./_components/payment-pages";
import SideComponents from "./_components/side-component";

export default function Checkout() {
  return (
    <div className="grid grid-cols-2 gap-6 my-6 w-full">
      <SideComponents />
      <PaymentPages />
    </div>
  );
}
