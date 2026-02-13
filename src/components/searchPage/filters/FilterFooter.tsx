import { Button } from "../../ui/button";

interface FilterFooterProps {
    onClear?: () => void;
    onShowResults?: () => void;
    resultCount: number;
}

const FilterFooter = ({ onClear, onShowResults, resultCount }: FilterFooterProps) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 flex gap-4 items-center justify-between z-10">
            <Button
                variant="outline"
                className="flex-1 py-6 text-[#2563EB] font-bold text-sm hover:bg-blue-50 rounded-xl border-blue-200"
                onClick={onClear}
            >
                Clear All
            </Button>
            <Button
                onClick={onShowResults}
                className="flex-[2] py-6 bg-[#1E3A8A] text-white font-bold text-sm rounded-lg hover:bg-[#152C6F] shadow-lg shadow-blue-900/20"
            >
                {resultCount} Tours Found
            </Button>
        </div>
    );
};

export default FilterFooter;
