import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SortSection from "../../components/searchPage/filters/SortSection";
import BudgetSection from "../../components/searchPage/filters/BudgetSection";
import AdventureStyleSection from "../../components/searchPage/filters/AdventureStyleSection";
import LocationSection from "../../components/searchPage/filters/LocationSection";
import RatingSection from "../../components/searchPage/filters/RatingSection";
import FilterFooter from "../../components/searchPage/filters/FilterFooter";

const FilterPage = () => {
    const navigate = useNavigate();
    const [priceRange, setPriceRange] = useState([0, 8500]);
    const [selectedSort, setSelectedSort] = useState("Most Reviewed");
    const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
    const [location, setLocation] = useState("Paris");

    const toggleStyle = (style: string) => {
        if (selectedStyles.includes(style)) {
            setSelectedStyles(selectedStyles.filter((s) => s !== style));
        } else {
            setSelectedStyles([...selectedStyles, style]);
        }
    };

    return (
        <div className="min-h-screen bg-white pb-24">
            {/* Header */}
            <div className="px-6 py-4 flex items-center gap-2">
                <button
                    onClick={() => navigate(-1)}
                    className="p-3 rounded-full hover:bg-gray-100 transition-all active:scale-95 bg-gray-50"
                >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
            </div>

            <div className="px-6 space-y-8">
                <SortSection
                    selectedSort={selectedSort}
                    onSortChange={setSelectedSort}
                />

                <hr className="border-gray-100" />

                <BudgetSection
                    priceRange={priceRange}
                    onPriceRangeChange={setPriceRange}
                />

                <hr className="border-gray-100" />

                <AdventureStyleSection
                    selectedStyles={selectedStyles}
                    onToggleStyle={toggleStyle}
                />

                <hr className="border-gray-100" />

                <LocationSection
                    location={location}
                    onLocationChange={setLocation}
                />

                <hr className="border-gray-100" />

                <RatingSection />
            </div>

            <FilterFooter
                resultCount={56}
                onShowResults={() => navigate("/search")}
                onClear={() => {
                    setPriceRange([0, 8500]);
                    setSelectedSort("Most Reviewed");
                    setSelectedStyles([]);
                    setLocation("");
                }}
            />
        </div>
    );
};

export default FilterPage;
