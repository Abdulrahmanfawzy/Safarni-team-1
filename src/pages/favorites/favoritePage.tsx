import Back from "..//../components/common/Back";
import HeartIcon from "../../components/common/HeartIcon";
import { Title } from "../../components/common/Title";
import { Card, CardContent } from "../../components/ui/card";
import { Star } from "lucide-react";

const cards = [
  {
    title: "Paris City Tour",
    subtitle: "Pickup Available",
    time: " 2 Days",
    rating: 4.1,
    reviews: 650,
    price: "150$",
    img: "/src/assets/paris.jpg",
  },
  {
    title: "Disneyland Paris",
    subtitle: "Pickup Available ",
    time: " 5 Days",
    rating: 4.5,
    reviews: 650,
    price: "1050$",
    img: "/src/assets/disney.jpg",
  },
  {
    title: "River Cruise",
    subtitle: "Pickup Available",
    time: " 6 Hour",
    rating: 4.0,
    reviews: 350,
    price: "100$",
    img: "/src/assets/cruise.jpg",
  },
  {
    title: "Eiffel Tower",
    subtitle: "Pickup Available",
    time: " 5 Days",
    rating: 4.5,
    reviews: 650,
    price: "1050$",
    img: "/src/assets/eiffel.jpg",
  },
  {
    title: "Eiffel Tower",
    subtitle: "Full Day Tours",
    rating: 4.7,
    reviews: 500,
    price: "200$",
    img: "/src/assets/eiffel-2.jpg",
  },
  {
    title: "Notre-Dame Cathedral",
    subtitle: "Full Day Tours",
    rating: 4.2,
    reviews: 420,
    price: "250$",
    img: "/src/assets/notre.jpg",
  },
  {
    title: "Galeries Lafayette",
    subtitle: "Full Day Tours",
    rating: 4.5,
    reviews: 480,
    price: "150$",
    img: "/src/assets/galerie.jpg",
  },
  {
    title: "Bois de Boulogne",
    subtitle: "Full Day Tours",
    rating: 4.7,
    reviews: 510,
    price: "200$",
    img: "/src/assets/bois.jpg",
  },
];

export default function FavoritePage() {
  return (
    <>
      <div className="space-y-6 container pb-10">
        <div className="relative my-10">
          <Back />
          <Title title="Favorite" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <Card
              key={i}
              className="overflow-hidden rounded-xl gap-1 p-1 border-0 shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition"
            >
              <div className="relative sm:p-3">
                <img
                  src={card.img}
                  alt={card.title}
                  className="rounded-xl object-cover h-[200px] w-full
                            sm:h-[260px] 
                            rounded-xl object-cover"
                />
                <button
                  className="
                  absolute top-5 right-5 lg:top-7 lg:right-7 bg-white rounded-full p-2 shadow 
                  md:top-7 md:right-7 cursor-pointer"
                >
                  <HeartIcon />
                </button>
              </div>

              <CardContent className="p-3 space-y-1.5">
                <div className="flex items-center justify-between gap-1 text-[12px]">
                  <h3 className="font-medium text-[17px] leading-tight">
                    {card.title}
                  </h3>
                  <div className="flex ">
                    <Star className="w-[20px] h-[20px] text-yellow-400 fill-yellow-400 mr-1" />
                    <span className="text-[15px] font-medium mr-1 ">
                      {card.rating}
                    </span>
                    <span className="text-[15px] text-muted-foreground">
                      ({card.reviews})
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[17px] text-muted-foreground">
                  <p>{card.subtitle}</p>
                  <div>
                    <span className="rounded-full bg-[var(--bg-primary-blue)] w-[12px] h-[12px] inline-block mr-0.5 mt-1"></span>
                    <span className="text-[#6B7280] text-[17px]">
                      {card.time}
                    </span>
                  </div>
                </div>

                <p className="text-[18px] text-muted-foreground font-medium">
                  From
                  <span className="font-bold text-[var(--text-primary-blue)] ml-1">
                    {card.price}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {" "}
                    Per Person
                  </span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
