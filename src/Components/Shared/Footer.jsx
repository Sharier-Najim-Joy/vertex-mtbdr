import { AiOutlineTwitter } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-[#000000]">
            <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 lg:text-left text-center justify-center items-start max-w-7xl mx-auto gap-12 px-4 lg:py-28 md:py-10 py-10">
                {/* Left */}
                <div className="col-span-2 space-y-3 flex justify-start lg:items-start items-center flex-col">
                    <Link to={"/"}>
                        <img
                            src="/src/assets/logo/vertexLogo.png"
                            alt="Vertex Logo"
                            className="lg:w-28 w-28 p-1 bg-white rounded-lg"
                        />
                    </Link>
                    <p className="text-[#E8E8E8] font-normal text-base">
                        Vertex Mtbd Resources: Innovative solutions empowering
                        individuals and businesses to thrive and succeed.
                    </p>
                    <div className="flex justify-center items-start flex-col gap-1">
                        <div className="flex justify-center items-center gap-2">
                            <IoLocationSharp className="text-2xl text-[#D3373C]" />
                            <a
                                target="_blank"
                                href="https://maps.app.goo.gl/z7oHnQwy36Za3Rgy7"
                                className="text-sm text-[#E8E8E8]"
                            >
                                Dhaka Office: 19 Rd No 4/A, Uttara, Dhaka 1230,
                                Bangladesh
                            </a>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <span>
                                <IoLocationSharp className="text-2xl text-[#D3373C]" />
                            </span>
                            <a
                                target="_blank"
                                href="https://maps.app.goo.gl/z7oHnQwy36Za3Rgy7"
                                className="text-sm text-[#E8E8E8]"
                            >
                                Chittagong Office: Jashim Mansion, 4th floor
                                saltgola, Western Marine Side, Newmoring,
                                Chittagong 4100, Bangladesh
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-start items-center gap-3">
                        <a
                            href="https://www.google.com"
                            target="_blank"
                            className="p-3 rounded-full text-[#FFFFFF] bg-[#2c2c2c] transition-colors duration-500 
               hover:bg-gradient-to-r hover:from-[#D3373C] hover:to-[#000000]"
                        >
                            <FaGoogle className="text-xl" />
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=61566573161860"
                            target="_blank"
                            className="p-3 rounded-full text-[#FFFFFF] bg-[#2c2c2c] transition-colors duration-500 
               hover:bg-gradient-to-r hover:from-[#D3373C] hover:to-[#000000]"
                        >
                            <CgFacebook className="text-xl" />
                        </a>
                        <a
                            href="https://x.com/VertexMTBD"
                            target="_blank"
                            className="p-3 rounded-full text-[#FFFFFF] bg-[#2c2c2c] transition-colors duration-500 
               hover:bg-gradient-to-r hover:from-[#D3373C] hover:to-[#000000]"
                        >
                            <AiOutlineTwitter className="text-xl" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/vertex-mtbd-resources"
                            target="_blank"
                            className="p-3 rounded-full text-[#FFFFFF] bg-[#2c2c2c] transition-colors duration-500 
               hover:bg-gradient-to-r hover:from-[#D3373C] hover:to-[#000000]"
                        >
                            <FaLinkedinIn className="text-xl" />
                        </a>
                    </div>
                </div>
                {/* Mid Footer (Links) */}
                <div className="col-span-1 space-y-7">
                    <h2 className="text-[#E8E8E8] font-bold text-xl capitalize">
                        Quick Links
                    </h2>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                to={"/"}
                                className="text-base text-[#E8E8E8] hover:text-[#D3373C] font-medium duration-300"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to={"/products"}
                                className="text-base text-[#E8E8E8] hover:text-[#D3373C] font-medium duration-300"
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/Chemical"}
                                className="text-base text-[#E8E8E8] hover:text-[#D3373C] font-medium duration-300"
                            >
                                Chemicals
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/gallery"}
                                className="text-base text-[#E8E8E8] hover:text-[#D3373C] font-medium duration-300"
                            >
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/contact"}
                                className="text-base text-[#E8E8E8] hover:text-[#D3373C] font-medium duration-300"
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-span-1 space-y-7">
                    <h2 className="text-[#E8E8E8] font-bold text-xl capitalize">
                        Company
                    </h2>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                to={"/"}
                                className="text-base text-[#E8E8E8] hover:text-[#D3373C] font-medium duration-300"
                            >
                                Why Vertex Mtbd Resources
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/"}
                                className="text-base text-[#E8E8E8] hover:text-[#D3373C] font-medium duration-300"
                            >
                                About Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-span-1 space-y-7">
                    <h2 className="text-[#E8E8E8] font-bold text-xl capitalize">
                        Support
                    </h2>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                to={"/"}
                                className="text-base text-[#E8E8E8] hover:text-[#D3373C] font-medium duration-300"
                            >
                                Support Center
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/"}
                                className="text-base text-[#E8E8E8] hover:text-[#D3373C] font-medium duration-300"
                            >
                                Feedback
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/"}
                                className="text-base text-[#E8E8E8] hover:text-[#D3373C] font-medium duration-300"
                            >
                                Accessibility
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-[#777777] text-center p-2 text-[#E8E8E8]">
                <h5>
                    Copyright By &copy;
                    <a
                        target="_blank"
                        href="https://www.facebook.com/profile.php?id=61565615517879"
                        className="hover:text-[#D3373C]"
                    >
                        Copsum Studio
                    </a>
                </h5>
            </div>
        </div>
    );
};

export default Footer;
