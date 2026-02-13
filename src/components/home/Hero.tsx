
import home1 from '@/assets/images/home1.jpg';
import home2 from '@/assets/images/home2.jpg';
import home3 from '@/assets/images/home3.jpg';
import home4 from '@/assets/images/home4.jpg';
import home5 from '@/assets/images/home5.jpg';
import heroMobile from '@/assets/images/hero-mobile.jpg';
import { Search, SlidersHorizontal } from 'lucide-react';
import { NavLink } from 'react-router-dom';


const Hero = () => {
    return (
        <div className="hero">
                        <div className="hero flex justify-around items-center">
                <div className="hidden sm:flex">
                    <div className="info flex flex-col gap-4 w-1/2 ">
                    <div className="title ">
                        <h1 className="text-6xl font-bold">Visit The Most<span className="text-text-primary-blue"> Beautiful Places</span> In The World</h1>
                        <p className="text-gray-600 mt-4 w-[75%] text-xl">Explore stunning destinations around the globe. Find travel inspiration,
                            top attractions, and plan your next adventure—all from one platform.</p>
                    </div>
                    </div>
                    <div className="gallery flex gap-4 relative">
                        <div className="group-one flex flex-col gap-4">
                            <img src={home1} alt="home1" className='w-[231px] h-[251px] rounded-tl-[32px] object-cover' />
                            <img src={home2} alt="home2" className='w-[231px] h-[251px] rounded-[16px] object-cover' />
                        </div>
                        <div className="group-two flex flex-col gap-4 justify-end">
                            <img src={home3} alt="home3" className='w-[194px] h-[221px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px] object-cover' />
                            <img src={home4} alt="home4" className='w-[194px] h-[171px] rounded-br-[32px] rounded-[16px] object-cover' />
                        </div>
                        <div className="group-three flex flex-col justify-end">
                            <img src={home5} alt="home5" className='w-[122px] h-[303px] rounded-tr-[40px] rounded-br-[40px] object-cover' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:hidden">
                <div className="hero-mobile flex justify-between items-center ">
                    <div className="welcome">
                        <h2 className='text-xl'>Welcome</h2>
                        <p className='text-gray-400'>explore The Best Places In World! </p>
                    </div>
                    <NavLink to="/profile" className='w-8 h-8 rounded-full bg-gray-200' > 
                       <img src="" alt="" />
                     </NavLink>
                </div>
                <form className="flex mt-6 max-w-full mx-auto space-x-2">   
                    <label htmlFor="simple-search" className=" sr-only">Search</label>
                    <NavLink to="/search" className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3  pointer-events-none">
                            <Search className='text-gray-400 cursor-pointer' />
                        </div>
                        <input type="text" id="simple-search" className=" px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium rounded ps-9 text-heading text-sm focus:ring-brand focus:border-brand block w-full placeholder:text-body" placeholder="Search branch name..." required />
                    </NavLink>
                    <NavLink to="/filters" className="inline-flex items-center justify-center shrink-0 border border-default-medium text-white bg-brand hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs rounded w-10 h-10 focus:outline-none">
                        <SlidersHorizontal className='text-gray-400 cursor-pointer' />
                    </NavLink>
                </form>
                <div className="image mt-6">
                    <img src={heroMobile} alt="heroMobile" className='h-full  max-h-[300px]  w-full rounded-[8px] object-cover' />
                </div>
            </div>
        </div>
    );
}
export default Hero;