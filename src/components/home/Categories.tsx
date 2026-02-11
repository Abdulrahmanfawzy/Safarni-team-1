
import cars from '@/assets/images/cars.jpg';
import flight from '@/assets/images/flight.jpg';
import hotel from '@/assets/images/hotel.jpg';
import tours from '@/assets/images/tours.jpg';
import { NavLink } from 'react-router-dom';


const Categories = () => {

    const categories = [
      { id: 1, name: 'Flight', img: flight, path: '/flights' },
      { id: 2, name: 'Cars', img: cars, path: '/cars' },
      { id: 3, name: 'Tours', img: tours, path: '/tours' },
      { id: 4, name: 'Hotel', img: hotel, path: '/hotels' },
    ];
    return (
        <div className="categories">
               <section className="mt-8">
                  <h2 className="text-2xl  text-text-primary-gray mb-6">Categories</h2>

                  <div className="flex items-center justify-between gap-4 overflow-x-auto pb-2">
                    {categories.map((cat) => (
                      <NavLink 
                        key={cat.id} 
                        to={cat.path} 
                        className="flex flex-col items-center min-w-[100px] group"
                      >
                        <div className="w-17 h-17 md:w-24 md:h-24 lg:w-35 lg:h-35 rounded-full overflow-hidden border-2 border-transparent shadow-sm">
                          <img 
                            src={cat.img} 
                            alt={cat.name} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>

                        <span className="mt-3 text-text-secondary-blue font-bold text-lg md:text-xl">
                          {cat.name}
                        </span>
                      </NavLink>
                    ))}
                  </div>
                </section>
        </div>
    );
}
export default Categories;