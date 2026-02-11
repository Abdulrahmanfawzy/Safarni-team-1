import { Link } from "react-router-dom";
const Buttoncommon = ({ title, link }: { title: string; link?: string }) => {
  return (
    <Link
      to={link || "/"}
      className="rounded-lg pt-2.5 text-center px-4 cursor-pointer w-full h-14 bg-blue-600 text-[20px] text-white hover:bg-white hover:text-blue-600 font-bold">
      {title}
    </Link>
  );
};

export default Buttoncommon;
