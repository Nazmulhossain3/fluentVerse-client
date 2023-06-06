import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Main = () => {
    return (
        <div className="w-[1000px] mx-auto" >
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;