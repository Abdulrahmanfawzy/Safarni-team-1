import Hotel from "../../../assets/images/hotel.jpg";

const ImageSection = () => {
  return (
    <>
      <div className="w-[50%] h-auto relative">
        <img
          src={Hotel}
          alt="Hotel"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute bottom-10 right-18 z-50 bg-white/90 backdrop-blur-md rounded-2xl p-3 shadow-lg">
          <div className="flex gap-3">
            {/* Image 1 */}
            <img
              src={Hotel}
              alt="Hotel"
              className="w-20 h-20 object-cover rounded-xl"
            />

            {/* Image 2 */}
            <img
              src={Hotel}
              alt="Hotel"
              className="w-20 h-20 object-cover rounded-xl"
            />

            {/* Image 3 */}
            <img
              src={Hotel}
              alt="Hotel"
              className="w-20 h-20 object-cover rounded-xl"
            />

            {/* Image 4 */}
            <img
              src={Hotel}
              alt="Hotel"
              className="w-20 h-20 object-cover rounded-xl"
            />

            {/* Image 5 with Blur + Overlay */}
            <div className="relative w-20 h-20 rounded-xl overflow-hidden cursor-pointer">
              <img
                src={Hotel}
                alt="More"
                className="w-full h-full object-cover blur-[2px] scale-110"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white text-xl font-bold">+10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ImageSection;
