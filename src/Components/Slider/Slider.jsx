import { useState, useEffect } from "react";
import AOS from "aos"; // Import AOS

import banner1 from "../../assets/images/BannerPic/banner1.png";
import banner2 from "../../assets/images/BannerPic/banner2.png";
import banner3 from "../../assets/images/BannerPic/banner3.png";
import banner4 from "../../assets/images/BannerPic/banner4.png";
import banner5 from "../../assets/images/BannerPic/banner5.png";
import banner6 from "../../assets/images/BannerPic/banner6.png";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [isHovered, setIsHovered] = useState(false);

    // Autoplay effect: change slide every 3 seconds
    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                setCurrentSlide((prevSlide) =>
                    prevSlide === 6 ? 1 : prevSlide + 1
                );
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [isHovered]);

    // Refresh AOS on slide change
    useEffect(() => {
        AOS.refresh(); // Refresh AOS after changing slide
    }, [currentSlide]); // Run when currentSlide changes

    return (
        <div
            className="carousel w-full bg-fixed rounded-xl"
            onMouseEnter={() => setIsHovered(true)} // Pause on hover
            onMouseLeave={() => setIsHovered(false)} // Resume when mouse leaves
        >
            {/* Slide 1 */}
            <div
                id="slide1"
                className={`carousel-item relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] bg-center bg-cover bg-no-repeat ${
                    currentSlide === 1 ? "block" : "hidden"
                }`}
                style={{
                    backgroundImage: `url(${banner1})`,
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-[#00000080]">
                    <div className="flex justify-start items-center lg:w-2/4 w-5/6 h-full">
                        <div className="ml-20">
                            <h1
                                className="lg:text-5xl md:text-4xl text-2xl font-bold text-[#FFFFFF]"
                                data-aos="zoom-in"
                            >
                                Meet the Versatile JT124G Sewing Machine!
                            </h1>
                            <p
                                className="md:mt-5 mt-2 text-[#FFFFFF] font-normal lg:text-[18px] text-sm"
                                data-aos="fade-up"
                            >
                                JT124G Automatic Programmable Sewing Machine:
                                Precision Sewing for Clothing, Footwear,
                                Leather, and Automotive Industries – Customize
                                Projects with Ease!
                            </p>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a
                            href="#slide6"
                            onClick={() => setCurrentSlide(6)}
                            className="btn btn-circle border-none hover:text-[#FFFFFF] hover:bg-[#D3373C]"
                        >
                            ❮
                        </a>
                        <a
                            href="#slide2"
                            onClick={() => setCurrentSlide(2)}
                            className="btn btn-circle border-none hover:text-[#FFFFFF] hover:bg-[#D3373C]"
                        >
                            ❯
                        </a>
                    </div>
                </div>
            </div>

            {/* Slide 2 */}
            <div
                id="slide2"
                className={`carousel-item relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] bg-center bg-cover bg-no-repeat ${
                    currentSlide === 2 ? "block" : "hidden"
                }`}
                style={{
                    backgroundImage: `url(${banner2})`,
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-[#00000080]">
                    <div className="flex justify-start items-center lg:w-2/4 w-5/6 h-full">
                        <div className="ml-20">
                            <h1
                                className="lg:text-5xl md:text-4xl text-2xl font-bold text-[#FFFFFF]"
                                data-aos="fade-up"
                            >
                                BS-21 Automatic Button Wrapping & Knotting
                            </h1>
                            <p
                                className="md:mt-5 mt-2 text-[#FFFFFF] font-normal lg:text-[18px] text-sm"
                                data-aos="fade-up"
                            >
                                Automatic machine for wrapping and knotting
                                buttons efficiently for garment production.
                            </p>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a
                            href="#slide1"
                            onClick={() => setCurrentSlide(1)}
                            className="btn btn-circle border-none hover:text-[#FFFFFF] hover:bg-[#D3373C]"
                        >
                            ❮
                        </a>
                        <a
                            href="#slide3"
                            onClick={() => setCurrentSlide(3)}
                            className="btn btn-circle border-none hover:text-[#FFFFFF] hover:bg-[#D3373C]"
                        >
                            ❯
                        </a>
                    </div>
                </div>
            </div>

            {/* Slide 3 */}
            <div
                id="slide3"
                className={`carousel-item relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] bg-center bg-cover bg-no-repeat ${
                    currentSlide === 3 ? "block" : "hidden"
                }`}
                style={{
                    backgroundImage: `url(${banner3})`,
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-[#00000080]">
                    <div className="flex justify-start items-center lg:w-2/4 w-5/6 h-full">
                        <div className="ml-20">
                            <h1
                                className="lg:text-5xl md:text-4xl text-2xl font-bold text-[#FFFFFF]"
                                data-aos="fade-up"
                            >
                                GT 6430 H High Speed Direct Drive Electronic
                                Lock Stitch Bar-Tacking Machine
                            </h1>
                            <p
                                className="md:mt-5 mt-2 text-[#FFFFFF] font-normal lg:text-[18px] text-sm"
                                data-aos="fade-up"
                            >
                                High-speed direct drive lock stitch bar-tacking
                                machine for industrial garment reinforcement.
                            </p>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a
                            href="#slide2"
                            onClick={() => setCurrentSlide(2)}
                            className="btn btn-circle border-none hover:text-[#FFFFFF] hover:bg-[#D3373C]"
                        >
                            ❮
                        </a>
                        <a
                            href="#slide4"
                            onClick={() => setCurrentSlide(4)}
                            className="btn btn-circle border-none hover:text-[#FFFFFF] hover:bg-[#D3373C]"
                        >
                            ❯
                        </a>
                    </div>
                </div>
            </div>

            {/* Slide 4 */}
            <div
                id="slide4"
                className={`carousel-item relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] bg-center bg-cover bg-no-repeat ${
                    currentSlide === 4 ? "block" : "hidden"
                }`}
                style={{
                    backgroundImage: `url(${banner4})`,
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-[#00000080]">
                    <div className="flex justify-start items-center lg:w-2/4 w-5/6 h-full">
                        <div className="ml-20">
                            <h1
                                className="lg:text-5xl md:text-4xl text-2xl font-bold text-[#FFFFFF]"
                                data-aos="fade-up"
                            >
                                FBX1106P Waistband Attach Machine
                            </h1>
                            <p
                                className="md:mt-5 mt-2 text-[#FFFFFF] font-normal lg:text-[18px] text-sm"
                                data-aos="fade-up"
                            >
                                Specialized machine for attaching waistbands,
                                enhancing efficiency and precision in
                                production.
                            </p>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a
                            href="#slide3"
                            onClick={() => setCurrentSlide(3)}
                            className="btn btn-circle border-none hover:text-[#FFFFFF] hover:bg-[#D3373C]"
                        >
                            ❮
                        </a>
                        <a
                            href="#slide5"
                            onClick={() => setCurrentSlide(5)}
                            className="btn btn-circle border-none hover:text-[#FFFFFF] hover:bg-[#D3373C]"
                        >
                            ❯
                        </a>
                    </div>
                </div>
            </div>

            {/* Slide 5 */}
            <div
                id="slide5"
                className={`carousel-item relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] bg-center bg-cover bg-no-repeat ${
                    currentSlide === 5 ? "block" : "hidden"
                }`}
                style={{
                    backgroundImage: `url(${banner5})`,
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-[#00000080]">
                    <div className="flex justify-start items-center lg:w-2/4 w-5/6 h-full">
                        <div className="ml-20">
                            <h1
                                className="lg:text-5xl md:text-4xl text-2xl font-bold text-[#FFFFFF]"
                                data-aos="fade-up"
                            >
                                Multifuel & Biomass Duel Vertical Type Boiler
                            </h1>
                            <p
                                className="md:mt-5 mt-2 text-[#FFFFFF] font-normal lg:text-[18px] text-sm"
                                data-aos="fade-up"
                            >
                                Dual vertical boiler designed for multi-fuel and
                                biomass use, offering high efficiency and energy
                                output.
                            </p>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a
                            href="#slide4"
                            onClick={() => setCurrentSlide(4)}
                            className="btn btn-circle border-none hover:text-[#FFFFFF] hover:bg-[#D3373C]"
                        >
                            ❮
                        </a>
                        <a
                            href="#slide6"
                            onClick={() => setCurrentSlide(6)}
                            className="btn btn-circle border-none hover:text-[#FFFFFF] hover:bg-[#D3373C]"
                        >
                            ❯
                        </a>
                    </div>
                </div>
            </div>

            {/* Slide 6 */}
            <div
                id="slide6"
                className={`carousel-item relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] bg-center bg-cover bg-no-repeat ${
                    currentSlide === 6 ? "block" : "hidden"
                }`}
                style={{
                    backgroundImage: `url(${banner6})`,
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-[#00000080]">
                    <div className="flex justify-start items-center lg:w-2/4 w-5/6 h-full">
                        <div className="ml-20">
                            <h1
                                className="lg:text-5xl md:text-4xl text-2xl font-bold text-[#FFFFFF]"
                                data-aos="fade-up"
                            >
                                HP-900LFS Hashima Brand Fusing Machine
                            </h1>
                            <p
                                className="md:mt-5 mt-2 text-[#FFFFFF] font-normal lg:text-[18px] text-sm"
                                data-aos="fade-up"
                            >
                                Efficient fusing machine for high-quality fabric
                                bonding in production.
                            </p>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a
                            href="#slide5"
                            onClick={() => setCurrentSlide(5)}
                            className="btn btn-circle border-none hover:text-[#FFFFFF] hover:bg-[#D3373C]"
                        >
                            ❮
                        </a>
                        <a
                            href="#slide1"
                            onClick={() => setCurrentSlide(1)}
                            className="btn btn-circle border-none hover:text-[#FFFFFF] hover:bg-[#D3373C]"
                        >
                            ❯
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
