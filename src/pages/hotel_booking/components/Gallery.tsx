import Hotel from "../../../assets/images/hotel.jpg";
import { Camera } from "lucide-react";
const Gallery = () => {
  return (
    <>
      
        <div className="flex justify-between mb-4 text-2xl font-medium text-gray-900">
          <div>
            Gallery <span className="text-blue-500">(200)</span>
          </div>

          <div className="flex gap-1 items-center text-xl text-blue-700 cursor-pointer">
            <Camera className="w-7 h-7" />
            Add Photo
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <img src={Hotel} alt="" className="rounded-xl h-28" />
          <img src={Hotel} alt="" className="rounded-xl h-28" />
          <img src={Hotel} alt="" className="rounded-xl h-28" />
          <img src={Hotel} alt="" className="rounded-xl h-28" />
          <img src={Hotel} alt="" className="rounded-xl h-28" />
          <img src={Hotel} alt="" className="rounded-xl h-28" />
          <img src={Hotel} alt="" className="rounded-xl h-28" />
          <img src={Hotel} alt="" className="rounded-xl h-28" />
        </div>
      
    </>
  );
};
export default Gallery;
