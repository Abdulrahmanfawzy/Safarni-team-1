import { useNavigate } from "react-router-dom";
const Buttoncommon = ({ title, link }: { title: string; link?: string }) => {
  const navigate = useNavigate();

  const handlesubmit = () => {
    navigate(link || "/");
  };

  return (
    <button
      type="submit"
      onClick={handlesubmit}
      className="rounded-lg text-center px-4 cursor-pointer w-full h-14 bg-bg-primary-blue text-[20px] text-white hover:bg-white hover:text-bg-primary-blue font-bold">
      {title}
    </button>
  );
};

export default Buttoncommon;
