import { ChevronLeft, SlidersHorizontal } from "lucide-react";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

interface SearchHeaderProps {
    query: string;
    onQueryChange: (query: string) => void;
}

const SearchHeader = ({ query, onQueryChange }: SearchHeaderProps) => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center gap-2 py-4">
            <button
                onClick={() => navigate(-1)}
                className="p-3 rounded-full hover:bg-gray-100 transition-all active:scale-95"
            >
                <ChevronLeft className="w-6 h-6 text-[#1E293B]" />
            </button>
            <div className="flex-1 flex gap-2">
                <Input
                    placeholder="Search city, country..."
                    value={query}
                    onChange={(e) => onQueryChange(e.target.value)}
                />
                <button
                    onClick={() => navigate("/search/filter")}
                    className="p-3 bg-[#F5F7FA] rounded-2xl hover:bg-gray-200 transition-colors"
                >
                    <SlidersHorizontal className="w-5 h-5 text-[#1E293B]" />
                </button>
            </div>
        </div>
    );
};

export default SearchHeader;

