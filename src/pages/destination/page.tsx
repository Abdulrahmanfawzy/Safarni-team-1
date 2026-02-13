import PartOne from "./_components/part-one";
import BestTime from "./sections/best-time";
import Reviews from "./sections/reviews";
import TopActivates from "./sections/top-activates";

export default function Destination() {
  return (
    <div className="space-y-3 my-8">
      <PartOne />
      <TopActivates />
      <BestTime />
      <Reviews />
    </div>
  );
}
