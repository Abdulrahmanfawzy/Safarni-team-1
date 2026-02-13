import type { Country } from "../../lib/types/test.types";
import CountryCard from "./CountryCard";
const Countries_Data: Country[] = [
  {
    id: 1,
    tour_name: "Paris  Evening Cruise",
    tour_description: "Enjoy a romantic evening cruise in Paris.",
    tour_image: "/src/assets/country_images/Paris/Paris_Evening.png",
    tour_price: 75,
    tour_duration: "6:00 PM - 9:00 PM",
  },
  {
    id: 2,
    tour_name: "Iconic Paris Tour",
    tour_description:
      "Explore Paris's iconic landmarks and hidden gems in Paris.",
    tour_image: "/src/assets/country_images/Paris/Paris_Tour.png",
    tour_price: 50,
    tour_duration: "10:00 AM - 1:00 PM",
  },
  {
    id: 3,
    tour_name: "Paris Art & Culture Tour",
    tour_description:
      "Discover Paris's artistic side with visits to renowned museums in Paris.",
    tour_image: "/src/assets/country_images/Paris/Paris_Art.png",
    tour_price: 80,
    tour_duration: "2:00 PM - 5:00 PM",
  },
  {
    id: 4,
    tour_name: "Paris Historical Sites",
    tour_description:
      "Explore the historic heart of Paris, including Notre Dame and the Latin Quarter in Paris.",
    tour_image: "/src/assets/country_images/Paris/Paris_Sites.png",
    tour_price: 45,
    tour_duration: "9:00 AM - 12:00 PM",
  },
  {
    id: 5,
    tour_name: "Paris Louvre Museum Tour",
    tour_description:
      "A guided tour of the Louvre Museum, showcasing Paris's art ",
    tour_image: "/src/assets/country_images/Paris/Paris_Meusiem_Tour.png",
    tour_price: 55,
    tour_duration: "1:00 PM - 4:00 PM",
  },
  {
    id: 6,
    tour_name: "Paris  Evening Cruise",
    tour_description: "Enjoy a romantic evening cruise in Paris.",
    tour_image: "/src/assets/country_images/Paris/Paris_Evening(2).png",
    tour_price: 75,
    tour_duration: "6:00 PM - 9:00 PM",
  },
];
const AvaiableCountries = () => {
  return (
    <>
      <CountryCard countries={Countries_Data} />
    </>
  );
};

export default AvaiableCountries;
