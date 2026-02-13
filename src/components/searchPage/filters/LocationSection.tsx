import { Map, X } from "lucide-react";
import { Input } from "../../ui/input";

interface LocationSectionProps {
    location: string;
    onLocationChange: (location: string) => void;
}

const LocationSection = ({ location, onLocationChange }: LocationSectionProps) => {
    return (
        <section>
            <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-[#1E293B]">Location</h3>
                <Map className="w-5 h-5 text-blue-400" />
            </div>

            <div className="border border-gray-200 rounded-xl p-2 flex items-center gap-2 mb-3">
                {location && (
                    <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md">
                        <span className="text-sm font-medium text-[#1E293B]">{location}</span>
                        <button onClick={() => onLocationChange("")} className="hover:text-red-500">
                            <X className="w-3 h-3 text-gray-400" />
                        </button>
                    </div>
                )}
                <Input
                    placeholder="Search .."
                    className="flex-1 border-none shadow-none focus-visible:ring-0 h-auto p-0 text-sm py-1 placeholder:text-gray-400"
                />
            </div>
        </section>
    );
};

export default LocationSection;
