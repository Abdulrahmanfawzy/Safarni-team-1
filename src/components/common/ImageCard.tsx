import React from "react";

interface ImageCardProps {
  img: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ img }) => {
  return (
    <div className="w-full h-full rounded-[30px] bg-[#F4F4F4]">
      <img src={img} alt="Image Card" className="object-cover object-center" />
    </div>
  );
};

export default ImageCard;
