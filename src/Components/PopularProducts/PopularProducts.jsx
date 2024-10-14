import { IoArrowForward } from "react-icons/io5";
import SectionTitle from "../Shared/SectionTitle";
import { Link } from "react-router-dom";

const PopularProducts = () => {
    return (
        <div className="my-20">
            <SectionTitle
                subHeading={"Products"}
                heading={"Our Popular Products"}
                description={
                    "Our popular products feature sleek, modern designs and advanced functionality, including sewing machines and precision tools"
                }
            />

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center gap-6">
                {/* Product 1 */}
                <Link
                    to={"/"}
                    className="px-6 pt-6 pb-4 rounded-xl space-y-2 group shadow shadow-[#D3373C33] hover:shadow-lg hover:shadow-[#D3373C40] duration-300"
                >
                    <div className="flex justify-center items-center overflow-hidden">
                        <img
                            src="/src/assets/Products/samwooboiler.jpg"
                            alt="Product 1"
                            className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                        />
                    </div>
                    <h3 className="text-xl text-[#444444] font-bold capitalize">
                        Vertical Type Multi-Fuel and Biomass Boiler
                    </h3>
                    <div className="flex justify-between items-center">
                        <p className="text-[#D3373C] text-base font-bold tracking-wider">
                            More Details
                        </p>
                        <IoArrowForward className="text-xl text-[#D3373C]" />
                    </div>
                </Link>
                <Link
                    to={"/"}
                    className="px-6 pt-6 pb-4 rounded-xl space-y-2 group shadow shadow-[#D3373C33] hover:shadow-lg hover:shadow-[#D3373C40] duration-300"
                >
                    <div className="flex justify-center items-center overflow-hidden">
                        <img
                            src="/src/assets/Products/samwooboiler.jpg"
                            alt="Product 1"
                            className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                        />
                    </div>
                    <h3 className="text-xl text-[#444444] font-bold capitalize">
                        Vertical Type Multi-Fuel and Biomass Boiler
                    </h3>
                    <div className="flex justify-between items-center">
                        <p className="text-[#D3373C] text-base font-bold tracking-wider">
                            More Details
                        </p>
                        <IoArrowForward className="text-xl text-[#D3373C]" />
                    </div>
                </Link>
                <Link
                    to={"/"}
                    className="px-6 pt-6 pb-4 rounded-xl space-y-2 group shadow shadow-[#D3373C33] hover:shadow-lg hover:shadow-[#D3373C40] duration-300"
                >
                    <div className="flex justify-center items-center overflow-hidden">
                        <img
                            src="/src/assets/Products/samwooboiler.jpg"
                            alt="Product 1"
                            className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                        />
                    </div>
                    <h3 className="text-xl text-[#444444] font-bold capitalize">
                        Vertical Type Multi-Fuel and Biomass Boiler
                    </h3>
                    <div className="flex justify-between items-center">
                        <p className="text-[#D3373C] text-base font-bold tracking-wider">
                            More Details
                        </p>
                        <IoArrowForward className="text-xl text-[#D3373C]" />
                    </div>
                </Link>
                <Link
                    to={"/"}
                    className="px-6 pt-6 pb-4 rounded-xl space-y-2 group shadow shadow-[#D3373C33] hover:shadow-lg hover:shadow-[#D3373C40] duration-300"
                >
                    <div className="flex justify-center items-center overflow-hidden">
                        <img
                            src="/src/assets/Products/samwooboiler.jpg"
                            alt="Product 1"
                            className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                        />
                    </div>
                    <h3 className="text-xl text-[#444444] font-bold capitalize">
                        Vertical Type Multi-Fuel and Biomass Boiler
                    </h3>
                    <div className="flex justify-between items-center">
                        <p className="text-[#D3373C] text-base font-bold tracking-wider">
                            More Details
                        </p>
                        <IoArrowForward className="text-xl text-[#D3373C]" />
                    </div>
                </Link>
                <Link
                    to={"/"}
                    className="px-6 pt-6 pb-4 rounded-xl space-y-2 group shadow shadow-[#D3373C33] hover:shadow-lg hover:shadow-[#D3373C40] duration-300"
                >
                    <div className="flex justify-center items-center overflow-hidden">
                        <img
                            src="/src/assets/Products/samwooboiler.jpg"
                            alt="Product 1"
                            className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                        />
                    </div>
                    <h3 className="text-xl text-[#444444] font-bold capitalize">
                        Vertical Type Multi-Fuel and Biomass Boiler
                    </h3>
                    <div className="flex justify-between items-center">
                        <p className="text-[#D3373C] text-base font-bold tracking-wider">
                            More Details
                        </p>
                        <IoArrowForward className="text-xl text-[#D3373C]" />
                    </div>
                </Link>
                <Link
                    to={"/"}
                    className="px-6 pt-6 pb-4 rounded-xl space-y-2 group shadow shadow-[#D3373C33] hover:shadow-lg hover:shadow-[#D3373C40] duration-300"
                >
                    <div className="flex justify-center items-center overflow-hidden">
                        <img
                            src="/src/assets/Products/samwooboiler.jpg"
                            alt="Product 1"
                            className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                        />
                    </div>
                    <h3 className="text-xl text-[#444444] font-bold capitalize">
                        Vertical Type Multi-Fuel and Biomass Boiler
                    </h3>
                    <div className="flex justify-between items-center">
                        <p className="text-[#D3373C] text-base font-bold tracking-wider">
                            More Details
                        </p>
                        <IoArrowForward className="text-xl text-[#D3373C]" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default PopularProducts;
