import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PageHeaderProps {
    title: string;
    rightAction?: React.ReactNode;
}

export function PageHeader({ title, rightAction }: PageHeaderProps) {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-between px-4 py-3">
            <button
                onClick={() => navigate(-1)}
                className="flex h-10 w-10 items-center justify-center rounded-full"
                aria-label="Go back"
            >
                <ChevronLeft className="h-6 w-6 text-foreground" />
            </button>
            <h1 className="text-lg font-semibold text-foreground">{title}</h1>
            <div className="h-10 w-10 flex items-center justify-center">
                {rightAction ?? null}
            </div>
        </div>
    );
}