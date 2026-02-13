import SuggestionItem from "./SuggestionItem";
import type { Suggestion } from "../../types/suggestion";

interface SuggestionListProps {
    suggestions: Suggestion[];
    onSelect?: (suggestion: Suggestion) => void;
}

const SuggestionList = ({ suggestions, onSelect }: SuggestionListProps) => {
    return (
        <div className="flex flex-col gap-1 overflow-y-auto max-h-[calc(100vh-180px)] pb-10 no-scrollbar">
            {suggestions.length > 0 ? (
                suggestions.map((item) => (
                    <div key={item.id} onClick={() => onSelect?.(item)}>
                        <SuggestionItem
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                        />
                    </div>
                ))
            ) : (
                <div className="py-10 text-center text-gray-500">
                    No results found for your search.
                </div>
            )}
        </div>
    );
};

export default SuggestionList;
