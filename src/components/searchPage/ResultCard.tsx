import { Heart, Star } from "lucide-react";
import type { SearchResult } from "../../types/result";

interface ResultCardProps {
    result: SearchResult;
}

const ResultCard = ({ result }: ResultCardProps) => {
    return (
        <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="relative mb-3">
                <img
                    src={result.image}
                    alt={result.title}
                    className="w-full h-40 object-cover rounded-xl"
                />
                <button className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full hover:bg-white transition-colors">
                    <Heart className="w-5 h-5 text-red-500" />
                </button>
            </div>

            <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-[#1E293B] text-sm">{result.title}</h3>
                <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-semibold text-[#1E293B]">{result.rating}</span>
                    <span className="text-xs text-gray-400">({result.reviews})</span>
                </div>
            </div>

            <div className="flex items-center gap-4 mb-1">
                {result.pickupAvailable && (
                    <div className="text-xs text-gray-500">Pickup Available</div>
                )}
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                    <span className="text-xs text-gray-500">{result.duration}</span>
                </div>
            </div>

            <div className="flex items-center gap-1 text-sm">
                <span className="text-gray-500">From</span>
                <span className="font-bold text-blue-600">{result.price}$</span>
                <span className="text-gray-500">per Person</span>
            </div>
        </div>
    );
};

export default ResultCard;
