
import home1 from '@/assets/images/home1.jpg';
import home2 from '@/assets/images/home2.jpg';
import home3 from '@/assets/images/home3.jpg';
import home4 from '@/assets/images/home4.jpg';
import home5 from '@/assets/images/home5.jpg';
import heroMobile from '@/assets/images/hero-mobile.jpg';
import SearchComponent from '../common/Search';
import { NavLink } from 'react-router-dom';


const Hero = () => {
    return (
        <div className="hero">
            <div className="hero flex justify-around items-center">
                <div className="hidden sm:flex">
                    <div className="info flex flex-col gap-4 w-[50%] ">
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
                <SearchComponent />
                <div className="image mt-6">
                    <img src={heroMobile} alt="heroMobile" className='h-full  max-h-[300px]  w-full rounded-[8px] object-cover' />
                </div>
            </div>
        </div>
    );
}
export default Hero;