import type { FlightBooking } from "../../lib/types/booking.types";
import { Plane } from "lucide-react";

interface FlightBookingCardProps {
    booking: FlightBooking;
}

export function FlightBookingCard({ booking }: FlightBookingCardProps) {
    return (
        <div className="rounded-2xl border border-border bg-white p-4 shadow-sm">
            {/* Airline + date */}
            <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50">
                    <div className="h-5 w-5 rounded-full border-2 border-red-500" />
                </div>
                <div className="flex-1">
                    <p className="text-[15px] font-semibold text-foreground">
                        {booking.airline}
                    </p>
                </div>
                <p className="text-sm text-muted-foreground">{booking.date}</p>
            </div>

            {/* Departure → Arrival */}
            <div className="mb-4 flex items-center justify-between">
                <div className="text-center">
                    <p className="text-xl font-bold text-foreground">
                        {booking.departure_time}
                    </p>
                    <p className="text-xs text-muted-foreground">
                        {booking.departure_code}
                    </p>
                </div>
                <div className="flex flex-1 flex-col items-center px-4">
                    <div className="flex w-full items-center">
                        <div className="h-px flex-1 bg-border" />
                        <Plane className="mx-2 h-4 w-4 text-muted-foreground" />
                        <div className="h-px flex-1 bg-border" />
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                        {booking.duration}
                    </p>
                </div>
                <div className="text-center">
                    <p className="text-xl font-bold text-foreground">
                        {booking.arrival_time}
                    </p>
                    <p className="text-xs text-muted-foreground">
                        {booking.arrival_code}
                    </p>
                </div>
            </div>

            {/* Bottom info bar */}
            <div className="flex items-center justify-between border-t border-border/50 pt-3">
                <div className="text-center">
                    <p className="text-sm font-semibold text-foreground">
                        {booking.gate}
                    </p>
                    <p className="text-xs text-muted-foreground">Gate</p>
                </div>
                <div className="text-center">
                    <p className="text-sm font-semibold text-foreground">
                        {booking.seat}
                    </p>
                    <p className="text-xs text-muted-foreground">Seat</p>
                </div>
                <div className="text-center">
                    <p className="text-sm font-semibold text-foreground">
                        {booking.terminal}
                    </p>
                    <p className="text-xs text-muted-foreground">Terminal</p>
                </div>
                <div className="text-center">
                    <p className="text-sm font-semibold text-foreground">
                        {booking.flight_number}
                    </p>
                    <p className="text-xs text-muted-foreground">Flight</p>
                </div>
            </div>
        </div>
    );
}
