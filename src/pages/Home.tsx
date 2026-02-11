
import Hero from '../components/home/Hero';
import Categories from '../components/home/Categories';
import Recommendation from '../components/home/Recommendation';
import Available from '../components/home/Available';



const Home = () => {


    return (
        <div className="home container mx-auto  mt-2 lg:p-12 p-4">
            <Hero />
            <div className="section mt-4 mb-4">
              <Categories />
              <Recommendation />
              <Available />
            </div>
        </div>
    );
};

export default Home;