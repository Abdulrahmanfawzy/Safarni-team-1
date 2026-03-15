
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

                  <div className="flex overflow-x-auto gap-2 no-scrollbar pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-4 lg:overflow-visible">
                    {categories.map((cat) => (
                      <NavLink 
                        key={cat.id} 
                        to={cat.path} 
                        className="flex flex-col items-center min-w-[100px] group"
                      >
                        <div className="w-20 h-20 md:w-[120px] md:h-[120px] lg:w-[220px] lg:h-[220px] rounded-full overflow-hidden border-2 border-transparent shadow-sm">
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