import { Star } from "lucide-react";
import home1 from '@/assets/images/home1.jpg';
import home2 from '@/assets/images/home2.jpg';
import home3 from '@/assets/images/home3.jpg';
import home4 from '@/assets/images/home4.jpg';
import type { TourCard } from "../../types/index";
import {  MapPin } from 'lucide-react';


const Recommendation = () => {
    const recommendations: TourCard[] = [
      { id: 1, title: 'The Pyramids', location: 'Giza', rating: 4.5, image: home1, price: 100 },
      { id: 2, title: 'The Citadel of Saladin', location: 'Cairo', rating: 4.5, image: home2, price: 200 },
      { id: 3, title: 'Karnak Temple', location: 'Luxor', rating: 4.5, image: home3, price: 300 },
      { id: 4, title: 'Library of Alexandria', location: 'Alexandria', rating: 4.5, image: home4, price: 400 },
    ];
    return (
        <div>
                <section className="mt-8 px-4 lg:px-0">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Recommendation</h2>
                    <button className="text-text-secondary-blue font-semibold text-sm">View all</button>
                  </div>

                  <div className="flex overflow-x-auto gap-4 no-scrollbar pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-4 lg:overflow-visible">
                    {recommendations.map((item) => (
                      <div 
                        key={item.id} 
                        className="bg-white p-2 rounded-[24px] shadow-sm border border-gray-50 min-w-[180px] md:min-w-[220px] lg:min-w-0"
                      >
                        <img 
                          src={item.image} 
                          className="w-full aspect-square object-cover rounded-[20px] mb-3" 
                          alt={item.title} 
                        />
                        <div className="px-1">
                          <div className="flex justify-between items-center mb-1">
                            <h3 className="text-[14px] font-bold truncate">{item.title}</h3>
                            <div className="flex items-center gap-0.5">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-[12px] font-bold">{item.rating}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-gray-400">
                            <MapPin className="w-3 h-3 text-text-secondary-blue" />
                            <span className="text-[12px]">{item.location}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>  
        </div>
    );
}
export default Recommendation;