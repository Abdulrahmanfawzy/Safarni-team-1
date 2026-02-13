import type { HotelBooking } from "../../lib/types/booking.types";
import { Star, MapPin, Building } from "lucide-react";

interface HotelBookingCardProps {
    booking: HotelBooking;
}

export function HotelBookingCard({ booking }: HotelBookingCardProps) {
    return (
        <div className="flex gap-3 rounded-2xl border border-border bg-white p-3 shadow-sm">
            {/* Image */}
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-muted">
                {booking.image ? (
                    <img
                        src={booking.image}
                        alt={booking.name}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-100 to-amber-200">
                        <Building className="h-8 w-8 text-amber-400" />
                    </div>
                )}
                {/* Price badge */}
                <div className="absolute left-1 top-1 rounded-md bg-red-500 px-1.5 py-0.5 text-xs font-bold text-white">
                    ${booking.price}
                    {booking.original_price && (
                        <span className="ml-0.5 line-through opacity-70">
                            {booking.original_price}
                        </span>
                    )}
                </div>
            </div>

            {/* Details */}
            <div className="flex flex-1 flex-col justify-center">
                <div className="flex items-start justify-between">
                    <h3 className="text-[15px] font-semibold text-foreground">
                        {booking.name}
                    </h3>
                    <div className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-foreground">
                            {booking.rating}
                        </span>
                    </div>
                </div>
                <div className="mt-1.5 flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{booking.location}</span>
                </div>
            </div>
        </div>
    );
}
