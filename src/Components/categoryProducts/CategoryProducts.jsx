import { IoArrowForward } from "react-icons/io5";
import SectionTitle from "../Shared/SectionTitle";
import { Link } from "react-router-dom";

const CategoryProducts = () => {
    return (
        <div className="my-10">
            <SectionTitle
                subHeading={"Categories"}
                heading={"Our Product Category"}
                description={
                    "Offering a wide range of garment machineries, including cutting, sewing, finishing, embroidery, and printing equipment for efficient apparel production."
                }
            />

            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 justify-center items-center my-10 gap-12">
                <Link
                    to={"/"}
                    className="border-t-2 border-[#D3373C] px-6 pt-10 pb-4 rounded-lg space-y-6 group shadow shadow-[#D3373C33] hover:shadow-lg hover:shadow-[#D3373C40] duration-300"
                >
                    <div className="flex justify-center items-center">
                        <img src="/src/assets/CategoryLogo/SamwooBoiler.png" />
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-[#D3373C] text-base font-bold tracking-wider">
                            See All
                        </p>
                        <IoArrowForward className="text-xl text-[#D3373C]" />
                    </div>
                </Link>
                <Link
                    to={"/"}
                    className="border-t-2 border-[#D3373C] px-6 pt-10 pb-4 rounded-lg space-y-6 group shadow shadow-[#D3373C33] hover:shadow-lg hover:shadow-[#D3373C40] duration-300"
                >
                    <div className="flex justify-center items-center">
                        <img src="/src/assets/CategoryLogo/Typical.jpg" />
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-[#D3373C] text-base font-bold tracking-wider">
                            See All
                        </p>
                        <IoArrowForward className="text-xl text-[#D3373C]" />
                    </div>
                </Link>
                <Link
                    to={"/"}
                    className="border-t-2 border-[#D3373C] px-6 pt-10 pb-4 rounded-lg space-y-6 group shadow shadow-[#D3373C33] hover:shadow-lg hover:shadow-[#D3373C40] duration-300"
                >
                    <div className="flex justify-center items-center">
                        <img src="/src/assets/CategoryLogo/Jam.png" />
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-[#D3373C] text-base font-bold tracking-wider">
                            See All
                        </p>
                        <IoArrowForward className="text-xl text-[#D3373C]" />
                    </div>
                </Link>
                <Link
                    to={"/"}
                    className="border-t-2 border-[#D3373C] px-6 pt-10 pb-4 rounded-lg space-y-6 group shadow shadow-[#D3373C33] hover:shadow-lg hover:shadow-[#D3373C40] duration-300"
                >
                    <div className="flex justify-center items-center">
                        <img src="/src/assets/CategoryLogo/BKS.png" />
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-[#D3373C] text-base font-bold tracking-wider">
                            See All
                        </p>
                        <IoArrowForward className="text-xl text-[#D3373C]" />
                    </div>
                </Link>
                <Link
                    to={"/"}
                    className="border-t-2 border-[#D3373C] px-6 pt-10 pb-4 rounded-lg space-y-6 group shadow shadow-[#D3373C33] hover:shadow-lg hover:shadow-[#D3373C40] duration-300"
                >
                    <div className="flex justify-center items-center">
                        <img src="/src/assets/CategoryLogo/KansaiSpecial.png" />
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-[#D3373C] text-base font-bold tracking-wider">
                            See All
                        </p>
                        <IoArrowForward className="text-xl text-[#D3373C]" />
                    </div>
                </Link>
                <Link
                    to={"/"}
                    className="border-t-2 border-[#D3373C] px-6 pt-10 pb-4 rounded-lg space-y-6 group shadow shadow-[#D3373C33] hover:shadow-lg hover:shadow-[#D3373C40] duration-300"
                >
                    <div className="flex justify-center items-center">
                        <img src="/src/assets/CategoryLogo/marine.png" />
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-[#D3373C] text-base font-bold tracking-wider">
                            See All
                        </p>
                        <IoArrowForward className="text-xl text-[#D3373C]" />
                    </div>
                </Link>
                <Link
                    to={"/"}
                    className="border-t-2 border-[#D3373C] px-6 pt-10 pb-4 rounded-lg space-y-6 group shadow shadow-[#D3373C33] hover:shadow-lg hover:shadow-[#D3373C40] duration-300"
                >
                    <div className="flex justify-center items-center">
                        <img src="/src/assets/CategoryLogo/Eastman.png" />
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-[#D3373C] text-base font-bold tracking-wider">
                            See All
                        </p>
                        <IoArrowForward className="text-xl text-[#D3373C]" />
                    </div>
                </Link>
                <Link
                    to={"/"}
                    className="border-t-2 border-[#D3373C] px-6 pt-10 pb-4 rounded-lg space-y-6 group shadow shadow-[#D3373C33] hover:shadow-lg hover:shadow-[#D3373C40] duration-300"
                >
                    <div className="flex justify-center items-center">
                        <img src="/src/assets/CategoryLogo/Yamato.png" />
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-[#D3373C] text-base font-bold tracking-wider">
                            See All
                        </p>
                        <IoArrowForward className="text-xl text-[#D3373C]" />
                    </div>
                </Link>
                <Link
                    to={"/"}
                    className="border-t-2 border-[#D3373C] px-6 pt-10 pb-4 rounded-lg space-y-6 group shadow shadow-[#D3373C33] hover:shadow-lg hover:shadow-[#D3373C40] duration-300"
                >
                    <div className="flex justify-center items-center">
                        <img src="/src/assets/CategoryLogo/Inhyun.png" />
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-[#D3373C] text-base font-bold tracking-wider">
                            See All
                        </p>
                        <IoArrowForward className="text-xl text-[#D3373C]" />
                    </div>
                </Link>
                <Link
                    to={"/"}
                    className="border-t-2 border-[#D3373C] px-6 pt-10 pb-4 rounded-lg space-y-6 group shadow shadow-[#D3373C33] hover:shadow-lg hover:shadow-[#D3373C40] duration-300"
                >
                    <div className="flex justify-center items-center">
                        <img src="/src/assets/CategoryLogo/Cutex.png" />
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-[#D3373C] text-base font-bold tracking-wider">
                            See All
                        </p>
                        <IoArrowForward className="text-xl text-[#D3373C]" />
                    </div>
                </Link>
                <Link
                    to={"/"}
                    className="border-t-2 border-[#D3373C] px-6 pt-10 pb-4 rounded-lg space-y-6 group shadow shadow-[#D3373C33] hover:shadow-lg hover:shadow-[#D3373C40] duration-300"
                >
                    <div className="flex justify-center items-center">
                        <img src="/src/assets/CategoryLogo/Veit.png" />
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-[#D3373C] text-base font-bold tracking-wider">
                            See All
                        </p>
                        <IoArrowForward className="text-xl text-[#D3373C]" />
                    </div>
                </Link>
                <Link
                    to={"/"}
                    className="border-t-2 border-[#D3373C] px-6 pt-10 pb-4 rounded-lg space-y-6 group shadow shadow-[#D3373C33] hover:shadow-lg hover:shadow-[#D3373C40] duration-300"
                >
                    <div className="flex justify-center items-center">
                        <img src="/src/assets/CategoryLogo/Focus.png" />
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-[#D3373C] text-base font-bold tracking-wider">
                            See All
                        </p>
                        <IoArrowForward className="text-xl text-[#D3373C]" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default CategoryProducts;
