import { useState } from "react";
import { PageHeader } from "../../components/profile/PageHeader";
import {
    Plane,
    Car,
    Mountain,
    Hotel,
    SlidersHorizontal,
} from "lucide-react";
import { FlightBookingCard } from "../../components/profile/FlightBookingCard";
import { CarBookingCard } from "../../components/profile/CarBookingCard";
import { TourBookingCard } from "../../components/profile/TourBookingCard";
import { HotelBookingCard } from "../../components/profile/HotelBookingCard";
import {
    MOCK_FLIGHTS,
    MOCK_CARS,
    MOCK_TOURS,
    MOCK_HOTELS,
} from "../../lib/constants/mockData";
import type { BookingCategory } from "../../lib/types/booking.types";

const categories: { key: BookingCategory; label: string; icon: React.ElementType }[] = [
    { key: "flight", label: "Flight", icon: Plane },
    { key: "car", label: "Cars", icon: Car },
    { key: "tour", label: "tours", icon: Mountain },
    { key: "hotel", label: "Hotel", icon: Hotel },
];

export function MyBookingPage() {
    const [activeCategory, setActiveCategory] = useState<BookingCategory>("flight");

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <PageHeader
                title="My Booking"
                rightAction={
                    <button aria-label="Filter bookings">
                        <SlidersHorizontal className="h-5 w-5 text-foreground" />
                    </button>
                }
            />

            {/* Category Tabs */}
            <div className="flex gap-2 overflow-x-auto px-4 pb-4 pt-1 no-scrollbar">
                {categories.map((cat) => {
                    const isActive = activeCategory === cat.key;
                    return (
                        <button
                            key={cat.key}
                            onClick={() => setActiveCategory(cat.key)}
                            className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${isActive
                                ? "bg-blue-500 text-white"
                                : "bg-muted/60 text-foreground"
                                }`}
                        >
                            <cat.icon className="h-4 w-4" />
                            {cat.label}
                        </button>
                    );
                })}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 px-4 pb-6">
                {activeCategory === "flight" &&
                    MOCK_FLIGHTS.map((b) => (
                        <FlightBookingCard key={b.id} booking={b} />
                    ))}
                {activeCategory === "car" &&
                    MOCK_CARS.map((b) => (
                        <CarBookingCard key={b.id} booking={b} />
                    ))}
                {activeCategory === "tour" &&
                    MOCK_TOURS.map((b) => (
                        <TourBookingCard key={b.id} booking={b} />
                    ))}
                {activeCategory === "hotel" &&
                    MOCK_HOTELS.map((b) => (
                        <HotelBookingCard key={b.id} booking={b} />
                    ))}
            </div>
        </div>
    );
}
