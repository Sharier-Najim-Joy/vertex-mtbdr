import { useState, useEffect } from "react";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [isHovered, setIsHovered] = useState(false); // State to track hover

    // Autoplay effect: change slide every 3 seconds
    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                setCurrentSlide((prevSlide) =>
                    prevSlide === 2 ? 1 : prevSlide + 1
                );
            }, 3000); // 3 seconds interval
            return () => clearInterval(interval); // Cleanup on component unmount
        }
    }, [isHovered]); // Re-run when hover state changes

    return (
        <div
            className="carousel w-full bg-fixed rounded-xl"
            onMouseEnter={() => setIsHovered(true)} // Pause on hover
            onMouseLeave={() => setIsHovered(false)} // Resume when mouse leaves
        >
            <div
                id="slide1"
                className={`carousel-item relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] bg-center bg-cover bg-no-repeat ${
                    currentSlide === 1 ? "block" : "hidden"
                }`}
                style={{
                    backgroundImage: `url('/src/assets/BannerPic/VersatileJT124GSewing.png')`,
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-[#00000080]">
                    <div className="flex justify-start items-center w-2/4 h-full">
                        <div className="ml-20">
                            <h1 className="text-6xl font-bold text-[#FFFFFF]">
                                Meet the Versatile JT124G Sewing Machine!
                            </h1>
                            <p className="mt-5 text-[#FFFFFF] font-normal text-[18px]">
                                JT124G Automatic Programmable Sewing Machine:
                                Precision Sewing for Clothing, Footwear,
                                Leather, and Automotive Industries – Customize
                                Projects with Ease!
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
                            href="#slide2"
                            onClick={() => setCurrentSlide(2)}
                            className="btn btn-circle border-none hover:text-[#FFFFFF] hover:bg-[#D3373C]"
                        >
                            ❯
                        </a>
                    </div>
                </div>
            </div>

            <div
                id="slide2"
                className={`carousel-item relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] bg-center bg-cover bg-no-repeat ${
                    currentSlide === 2 ? "block" : "hidden"
                }`}
                style={{
                    backgroundImage: `url('/src/assets/BannerPic/SamwooBoiler.png')`,
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-[#00000080]">
                    <div className="flex justify-start items-center w-2/4 h-full">
                        <div className="ml-20">
                            <h1 className="text-6xl font-bold text-[#FFFFFF]">
                                Meet the Versatile JT124G Sewing Machine!
                            </h1>
                            <p className="mt-5 text-[#FFFFFF] font-normal text-[18px]">
                                JT124G Automatic Programmable Sewing Machine:
                                Precision Sewing for Clothing, Footwear,
                                Leather, and Automotive Industries – Customize
                                Projects with Ease!
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
