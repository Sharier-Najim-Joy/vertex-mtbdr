import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import "animate.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Root = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false,
            mirror: true,
            offset: 100, // Increased offset for more reliable triggering
        });
        Aos.refresh(); // Ensures AOS re-checks all animations
    }, []);

    return (
        <div className="font-inter">
            <div className="lg:px-2 px-3">
                <header className="">
                    <Navbar />
                </header>
                <main className="max-w-7xl mx-auto">
                    <Outlet />
                </main>
            </div>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Root;
