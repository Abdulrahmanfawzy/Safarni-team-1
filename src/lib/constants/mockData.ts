import type { User } from "../types/user.types";
import type {
    FlightBooking,
    CarBooking,
    TourBooking,
    HotelBooking,
} from "../types/booking.types";

export const MOCK_USER: User = {
    id: 1,
    name: "Knee Due",
    email: "kneedue@gmail.com",
    phone: "01283529928",
    country: "200-298 Clipper St San Francisco",
    profile_picture: null,
    is_verified: true,
    status: "active",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-06-15T00:00:00Z",
};

export const MOCK_FLIGHTS: FlightBooking[] = [
    {
        id: 1,
        category: "flight",
        airline: "Air Canada",
        airline_logo: undefined,
        date: "December 19th, 2022",
        departure_time: "07h05",
        arrival_time: "20h05",
        departure_code: "YUL",
        arrival_code: "NRT",
        duration: "18h00",
        gate: "8",
        seat: "6",
        terminal: "3",
        flight_number: "AC005",
        status: "confirmed",
    },
];

export const MOCK_CARS: CarBooking[] = [
    {
        id: 2,
        category: "car",
        model: "S 500 Sedan",
        image: "",
        transmission: "Automatic",
        seats: 5,
        status: "Closed",
    },
];

export const MOCK_TOURS: TourBooking[] = [
    {
        id: 3,
        category: "tour",
        title: "Eiffel Tower",
        image: "",
        badge: "Full Day Tour",
        rating: 4.5,
        price_per_person: 230,
    },
];

export const MOCK_HOTELS: HotelBooking[] = [
    {
        id: 4,
        category: "hotel",
        name: "GoldenValley",
        image: "",
        price: 350,
        original_price: undefined,
        rating: 4.5,
        location: "New York,USA",
    },
];
