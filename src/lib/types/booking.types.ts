export type BookingCategory = "flight" | "car" | "tour" | "hotel";

export type BookingStatus =
    | "pending"
    | "confirmed"
    | "cancelled"
    | "completed"
    | "refunded";

// --- Flight Booking ---
export interface FlightBooking {
    id: number;
    category: "flight";
    airline: string;
    airline_logo?: string;
    date: string;
    departure_time: string;
    arrival_time: string;
    departure_code: string;
    arrival_code: string;
    duration: string;
    gate: string;
    seat: string;
    terminal: string;
    flight_number: string;
    status: BookingStatus;
}

// --- Car Booking ---
export interface CarBooking {
    id: number;
    category: "car";
    model: string;
    image: string;
    transmission: string;
    seats: number;
    status: string; // e.g. "Closed", "Active"
}

// --- Tour Booking ---
export interface TourBooking {
    id: number;
    category: "tour";
    title: string;
    image: string;
    badge: string; // e.g. "Full Day Tour"
    rating: number;
    price_per_person: number;
}

// --- Hotel Booking ---
export interface HotelBooking {
    id: number;
    category: "hotel";
    name: string;
    image: string;
    price: number;
    original_price?: number;
    rating: number;
    location: string;
}

export type BookingItem =
    | FlightBooking
    | CarBooking
    | TourBooking
    | HotelBooking;
