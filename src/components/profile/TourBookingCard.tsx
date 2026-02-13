import type { TourBooking } from "../../lib/types/booking.types";
import { Star, MapPin } from "lucide-react";

interface TourBookingCardProps {
    booking: TourBooking;
}

export function TourBookingCard({ booking }: TourBookingCardProps) {
    return (
        <div className="flex gap-3 rounded-2xl border border-border bg-white p-3 shadow-sm">
            {/* Image */}
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-muted">
                {booking.image ? (
                    <img
                        src={booking.image}
                        alt={booking.title}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-100 to-emerald-200">
                        <MapPin className="h-8 w-8 text-emerald-400" />
                    </div>
                )}
            </div>

            {/* Details */}
            <div className="flex flex-1 flex-col justify-center">
                <span className="mb-1 inline-block w-fit rounded-md bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-600">
                    {booking.badge}
                </span>
                <div className="flex items-center justify-between">
                    <h3 className="text-[15px] font-semibold text-foreground">
                        {booking.title}
                    </h3>
                    <div className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-foreground">
                            {booking.rating}
                        </span>
                    </div>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                    From{" "}
                    <span className="font-semibold text-primary">
                        {booking.price_per_person}$
                    </span>{" "}
                    Per Person
                </p>
            </div>
        </div>
    );
}
