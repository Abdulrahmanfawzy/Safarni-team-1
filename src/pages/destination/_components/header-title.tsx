import { cn } from "../../../lib/utils";

type props = {
  title: string;
  className?: string;
};

export default function HeaderTitle({ title, className }: props) {
  return (
    <h2 className={cn("text-2xl text-gray-900 font-bold mb-3", className)}>
      {title}
    </h2>
  );
}
