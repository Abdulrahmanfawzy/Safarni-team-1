import { cn } from "../../../lib/utils";

type props = {
  title: string;
  className?: string;
};

export default function HeaderThree({ title, className }: props) {
  return (
    <h3 className={cn("text-gray-900 font-semibold text-xl", className)}>
      {title}
    </h3>
  );
}
