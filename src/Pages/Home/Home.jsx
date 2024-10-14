import About from "../../Components/About/About";
import CategoryProducts from "../../Components/categoryProducts/CategoryProducts";
import PopularProducts from "../../Components/PopularProducts/PopularProducts";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
    return (
        <div className="">
            <Slider />
            <About />
            <PopularProducts />
            <CategoryProducts />
        </div>
    );
};

export default Home;
