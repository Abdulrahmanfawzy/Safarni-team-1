import Hotel from "../../../assets/images/hotel.jpg";
import { Camera } from "lucide-react";

const Gallery = () => {
  return (
    <>
      {/* Header */}
      <div className="flex justify-between mb-4 text-xl md:text-2xl font-medium text-gray-900">
        <div>
          Gallery <span className="text-blue-500">(200)</span>
        </div>

        <div className="flex gap-1 items-center text-lg md:text-xl text-blue-700 cursor-pointer">
          <Camera className="w-6 h-6 md:w-7 md:h-7" />
          Add Photo
        </div>
      </div>

      {/* Gallery */}
      <div
        className="
          flex
          gap-4
          overflow-x-auto
          snap-x snap-mandatory
          scrollbar-hide
          md:grid md:grid-cols-4 md:overflow-x-visible
        "
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="
              min-w-[50%]   
              snap-start
              md:min-w-0
            "
          >
            <img
              src={Hotel}
              alt="Hotel"
              className="
                w-full
                h-40 md:h-28
                object-cover
                rounded-xl
                hover:scale-[1.03]
                transition-transform duration-300
                cursor-pointer
              "
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
