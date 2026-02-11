interface SortSectionProps {
    selectedSort: string;
    onSortChange: (sort: string) => void;
}

const SortSection = ({ selectedSort, onSortChange }: SortSectionProps) => {
    return (
        <section>
            <h3 className="font-bold text-[#1E293B] mb-3">Sort By</h3>
            <div className="flex flex-wrap gap-2">
                {[
                    "Price (Low to High)",
                    "Price (High to Low)",
                    "Biggest Deals (Highest Saving)",
                    "Most Reviewed",
                    "Most Popular",
                ].map((sort) => (
                    <button
                        key={sort}
                        onClick={() => onSortChange(sort)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${selectedSort === sort
                                ? "bg-transparent border-blue-600 text-blue-600"
                                : "bg-white border-gray-100 text-gray-500 hover:bg-gray-50"
                            }`}
                    >
                        {sort}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default SortSection;
