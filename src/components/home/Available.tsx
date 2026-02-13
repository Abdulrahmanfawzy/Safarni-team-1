import home1 from '@/assets/images/home1.jpg';
import home2 from '@/assets/images/home2.jpg';
import home3 from '@/assets/images/home3.jpg';
import home4 from '@/assets/images/home4.jpg';
import type { TourCard } from "../../types/index";
import { Star } from "lucide-react";    

const Available = () => {
        const availableTours: TourCard[] = [
          { id: 1, title: 'Luxor', location: 'Giza', rating: 4.3, image: home1, price: 150 },
          { id: 2, title: 'Dahab', location: 'Cairo', rating: 4.5, image: home2, price: 250 },
          { id: 3, title: 'Fayoum', location: 'Luxor', rating: 4.2, image: home3, price: 200 },
          { id: 4, title: 'Marsa Alam', location: 'Alexandria', rating: 4.8, image: home4, price: 220 },
        ];
    return (
        <div>
                <section className="mt-10 px-4 mb-20 lg-mb-12">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-text-primary-gray">Available Tours</h2>
                    <button className="text-text-secondary-blue font-semibold text-sm">View all</button>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {availableTours.map((tour) => (
                      <div key={tour.id} className="bg-white p-3 rounded-[24px] shadow-sm border border-gray-50 flex gap-4 items-center hover:shadow-md transition-shadow cursor-pointer">
                        <div className="flex-shrink-0">
                          <img 
                            src={tour.image} 
                            className="w-24 h-24 md:w-32 md:h-32 rounded-[20px] object-cover" 
                            alt={tour.title} 
                          />
                        </div>
                        <div className="flex-1 flex flex-col justify-between h-full py-1">
                          <div>
                            <div className="flex justify-between items-start">
                              <p className="text-gray-400 text-[10px] md:text-xs font-medium uppercase tracking-wider">Full Day Tour</p>
                              <div className="flex items-center gap-1 bg-white shadow-sm px-2 py-0.5 rounded-full border border-gray-50">
                                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                <span className="text-xs font-bold">{tour.rating}</span>
                              </div>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-text-primary-gray mt-1">{tour.title}</h3>
                          </div>
                          <p className="text-sm text-gray-500 mt-2">
                            From <span className="text-text-secondary-blue font-extrabold text-lg">${tour.price}</span> Per Person
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
        </div>
    );
}
export default Available;