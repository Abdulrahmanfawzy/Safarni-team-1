import type { Country } from "../../lib/types/test.types";
const CountryCard = (props: { countries: Country[] }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 mr-100 ml-100 mt-32  ">
        {props.countries.map((country) => (
          <div
            key={country.id}
            className="bg-[#FAFAFA]   border-2  p-4 rounded-lg flex"
          >
            <div>
              <img src={country.tour_image} alt={country.tour_name} />
            </div>
            <div className="text-lg">
              <h2 className="font-bold">{country.tour_name}</h2>
              <span>{country.tour_duration}</span> |
              <span> ${country.tour_price}</span>
              <h2>{country.tour_description}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CountryCard;
