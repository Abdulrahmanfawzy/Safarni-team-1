import React from "react";
import type { LucideIcon } from "lucide-react";


interface SuggestionItemProps {
    icon: LucideIcon | React.ReactNode;
    title: string;
    description: string;
}

const SuggestionItem: React.FC<SuggestionItemProps> = ({
    icon,
    title,
    description,
}) => {
    const renderIcon = () => {
        if (!icon) return null;
        if (React.isValidElement(icon)) {
            return icon;
        }
        const Icon = icon as React.ElementType;
        return <Icon className="w-6 h-6 text-blue-600" />;
    };

    return (
        <div className="flex items-center gap-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors rounded-lg px-2">
            <div className="w-12 h-12 flex items-center justify-center bg-[#EBF1FF] rounded-xl overflow-hidden">
                {renderIcon()}
            </div>
            <div className="flex flex-col">
                <h3 className="text-[#1E293B] font-semibold text-lg">{title}</h3>
                {description && <p className="text-gray-500 text-sm">{description}</p>}
            </div>
        </div>
    );
};

export default SuggestionItem;
