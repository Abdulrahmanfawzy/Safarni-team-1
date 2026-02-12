import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(-1)}
      variant={"ghost"}
      className="cursor-pointer rounded-full absolute text-[var(--text-primary-gray)] bg-[#F3F4F6] w-[50px] h-[50px]"
    >
      <ChevronLeft className="size-6" />
    </Button>
  );
};

export default Back;
