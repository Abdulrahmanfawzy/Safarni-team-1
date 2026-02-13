import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(-1)}
      variant={"outline"}
      className="rounded-full size-15 my-2">
      <ChevronLeft className="size-8 " />
    </Button>
  );
};

export default Back;
