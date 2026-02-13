import {  Bed, Bath, SquareDashed, Camera } from "lucide-react";
const About = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between pt-2 text-gray-900 font-normal text-22">
          <div className="flex gap-1 items-center">
            <Bed className="text-blue-500 w-7 h-7" />3 Beds
          </div>

          <div className="flex gap-1 items-center">
            <Bath className="text-blue-500 w-7 h-7" />2 Bath
          </div>

          <div className="flex gap-1 items-center">
            <SquareDashed className="text-blue-500 w-7 h-7" />
            1,848 Sqft
          </div>
        </div>

        <div className="flex justify-between pt-2 text-2xl font-medium text-gray-900">
          <div>
            Gallery <span className="text-blue-500">(200)</span>
          </div>

          <div className="flex gap-1 items-center  text-xl text-blue-700 cursor-pointer">
            <Camera className="w-7 h-7" />
            Add Photo
          </div>
        </div>

        <p className="text-2xl text-gray-500 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard du
          <span className="text-blue-500 cursor-pointer"> ...Read More </span>
        </p>
      </div>
    </>
  );
};
export default About;
