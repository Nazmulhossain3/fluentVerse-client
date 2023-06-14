import DarkMode from "../../Component/DarkMode/DarkMode";
import PopularClass from "./Popular/PopularClass";
import PopularInstructor from "./Popular/PopularInstructor";
import Topslider from "./Slider/Topslider";

const Home = () => {
    return (
        <div>
           <DarkMode></DarkMode>
            <Topslider></Topslider>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>

        </div>
    );
};

export default Home;