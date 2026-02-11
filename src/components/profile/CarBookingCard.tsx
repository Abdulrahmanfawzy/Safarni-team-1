import type { CarBooking } from "../../lib/types/booking.types";
import { Car } from "lucide-react";

interface CarBookingCardProps {
    booking: CarBooking;
}

export function CarBookingCard({ booking }: CarBookingCardProps) {
    return (
        <div className="rounded-2xl border border-border bg-white p-4 shadow-sm">
            <div className="flex items-start gap-4">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                        {booking.model}
                    </h3>
                    <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{booking.transmission}</span>
                        <span>{booking.seats} seats</span>
                        <span>{booking.status}</span>
                    </div>
                </div>
                <div className="flex h-20 w-28 items-center justify-center rounded-xl bg-muted/50">
                    {booking.image ? (
                        <img
                            src={booking.image}
                            alt={booking.model}
                            className="h-full w-full rounded-xl object-cover"
                        />
                    ) : (
                        <Car className="h-10 w-10 text-muted-foreground/50" />
                    )}
                </div>
            </div>
        </div>
    );
}
