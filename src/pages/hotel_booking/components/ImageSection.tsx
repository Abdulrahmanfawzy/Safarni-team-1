import Hotel from "../../../assets/images/hotel.jpg";
import Back from "../../../components/common/Back";

const ImageSection = () => {
  return (
    <>
      <div
        className="
          w-full 
          md:w-[50%] 
          h-[45vh] md:h-auto 
          relative
        "
      >
        <div className="absolute top-12 left-8 block md:hidden">
          <Back />
        </div>
        <img
          src={Hotel}
          alt="Hotel"
          className="w-full h-full object-cover rounded-none md:rounded-2xl"
        />

        {/* Thumbnails Overlay - CENTERED */}
        <div
          className="
            absolute 
            bottom-4 md:bottom-10
            w-[84%]
            md:w-[75%]
            left-[48%]
            -translate-x-1/2
            z-50 
            bg-white/90 
            backdrop-blur-md 
            rounded-lg 
            p-1.5 
            shadow-lg
          "
        >
          <div className="flex gap-1.5 md:gap-3">
            {/* Image 1 */}
            <img
              src={Hotel}
              alt="Hotel"
              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg"
            />

            {/* Image 2 */}
            <img
              src={Hotel}
              alt="Hotel"
              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg"
            />

            {/* Image 3 */}
            <img
              src={Hotel}
              alt="Hotel"
              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg"
            />

            {/* Image 4 */}
            <img
              src={Hotel}
              alt="Hotel"
              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg"
            />

            {/* Image 5 with Blur + Overlay */}
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden cursor-pointer">
              <img
                src={Hotel}
                alt="More"
                className="w-full h-full object-cover blur-[2px] scale-110"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white text-sm md:text-xl font-bold">
                  +10
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSection;
