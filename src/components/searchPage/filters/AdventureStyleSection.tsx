import { Car, Map } from "lucide-react";

interface AdventureStyleSectionProps {
    selectedStyles: string[];
    onToggleStyle: (style: string) => void;
}

const AdventureStyleSection = ({ selectedStyles, onToggleStyle }: AdventureStyleSectionProps) => {
    return (
        <section>
            <h3 className="font-bold text-[#1E293B] mb-1">
                Adventure Style <span className="text-gray-400 font-normal text-sm">Multi Select</span>
            </h3>
            <div className="grid grid-cols-2 gap-3 mt-4">
                {[
                    { name: "Adventure Travel", icon: <Car className="w-5 h-5" /> },
                    { name: "City Breaks", icon: <Map className="w-5 h-5" /> },
                    { name: "Water Activity", icon: <Map className="w-5 h-5" /> },
                    { name: "Road Trips", icon: <Car className="w-5 h-5" /> },
                ].map((style) => (
                    <button
                        key={style.name}
                        onClick={() => onToggleStyle(style.name)}
                        className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${selectedStyles.includes(style.name)
                                ? "border-blue-600 bg-blue-50 text-blue-700"
                                : "border-gray-100 bg-white text-gray-500 hover:bg-gray-50"
                            }`}
                    >
                        <span className={selectedStyles.includes(style.name) ? "text-blue-600" : "text-gray-400"}>
                            {style.icon}
                        </span>
                        <span className="font-medium text-sm">{style.name}</span>
                    </button>
                ))}
            </div>
        </section>
    );
};

export default AdventureStyleSection;
