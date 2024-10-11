import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import "animate.css";
const Root = () => {
    return (
        <div className="font-inter">
            <header>
                <Navbar />
            </header>
            <main className="max-w-7xl mx-auto">
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Root;
