import { Slider } from "../../ui/slider";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

interface BudgetSectionProps {
    priceRange: number[];
    onPriceRangeChange: (value: number[]) => void;
}

const data = [
    { value: 10 }, { value: 15 }, { value: 30 }, { value: 50 },
    { value: 80 }, { value: 95 }, { value: 60 }, { value: 65 },
    { value: 40 }, { value: 20 }, { value: 30 }, { value: 45 },
    { value: 25 }, { value: 15 }, { value: 5 }
];

const BudgetSection = ({ priceRange, onPriceRangeChange }: BudgetSectionProps) => {
    const minPercent = (priceRange[0] / 10000) * 100;
    const maxPercent = (priceRange[1] / 10000) * 100;

    return (
        <section>
            <h3 className="font-bold text-[#1E293B] mb-6">Budget Range</h3>

            <div className="relative h-32 w-full mb-6">
                {/* Chart */}
                <div className="absolute inset-0 pb-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.4} />
                                    <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <Tooltip cursor={false} content={<></>} />
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="none"
                                fill="url(#chartGradient)"
                                fillOpacity={1}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* Slider Overlay */}
                <div className="absolute bottom-0 left-0 right-0 px-0">
                    <Slider
                        defaultValue={[0, 8500]}
                        value={priceRange}
                        max={10000}
                        step={100}
                        onValueChange={onPriceRangeChange}
                        className="w-full"
                    />
                </div>
            </div>

            <div className="flex justify-between items-center mt-2">
                <div>
                    <p className="text-gray-500 text-sm mb-1">Min</p>
                    <p className="font-bold text-[#1E293B] text-lg">$ {priceRange[0]}</p>
                </div>
                <div className="text-right">
                    <p className="text-gray-500 text-sm mb-1">Max</p>
                    <p className="font-bold text-[#1E293B] text-lg">$ {priceRange[1]}</p>
                </div>
            </div>
        </section>
    );
};

export default BudgetSection;
