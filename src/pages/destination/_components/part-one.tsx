import HeaderThree from "./header-three";
import Rating from "./rating";

export default function PartOne() {
  return (
    <div className="my-12 space-y-4">
      <div className="w-full rounded-md overflow-hidden lg:h-96 *:bg-center *:w-full *:object-cover">
        <img
          src="https://cdn.pixabay.com/photo/2016/11/21/06/53/beautiful-natural-image-1844362_640.jpg"
          alt=""
        />
      </div>

      <div className="flex items-center justify-between">
        <HeaderThree title={"Eiffel Tower"} />
        <div className="flex items-center gap-2 text-yellow-300">
          <Rating rating={4} />
          <span className="text-neutral-500 font-semibold">4.5 (675)</span>
        </div>
      </div>

      <div className="flex items-center justify-between *:text-gray-600 *:text-xl">
        <p>Tour Type</p>
        <p>7 Days and 6 Nights</p>
        <p>Paris, France</p>
      </div>
    </div>
  );
}
