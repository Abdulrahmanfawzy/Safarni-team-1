import { Star } from "lucide-react";

const RatingSection = () => {
    return (
        <section>
            <h3 className="font-bold text-[#1E293B] mb-1">
                Rating <span className="text-gray-400 font-normal text-sm">Multi Select</span>
            </h3>
            <div className="flex justify-between mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        key={star}
                        className="w-12 h-10 rounded-full border border-gray-100 flex items-center justify-center gap-1 hover:border-blue-200 transition-colors"
                    >
                        <Star className="w-4 h-4 text-gray-400" />
                        <span className="font-bold text-[#1E293B]">{star}</span>
                    </button>
                ))}
            </div>
        </section>
    );
};

export default RatingSection;
