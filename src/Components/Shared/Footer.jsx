import { AiOutlineTwitter } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-[#000000]">
            <div className="grid grid-cols-4 justify-center items-start max-w-7xl mx-auto gap-12 py-28">
                {/* Left */}
                <div className="col-span-1 space-y-5">
                    <Link to={"/"}>
                        <img
                            src="/src/assets/logo/vertexLogo.png"
                            alt="Vertex Logo"
                            className="lg:w-28 w-24"
                        />
                    </Link>
                    <p className="text-[#E8E8E8] font-normal text-base">
                        Vertex Mtbd Resources: Innovative solutions empowering
                        individuals and businesses to thrive and succeed.
                    </p>
                    <div className="flex justify-start items-center gap-3">
                        <a
                            href="#"
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
                            href="#"
                            target="_blank"
                            className="p-3 rounded-full text-[#FFFFFF] bg-[#2c2c2c] transition-colors duration-500 
               hover:bg-gradient-to-r hover:from-[#D3373C] hover:to-[#000000]"
                        >
                            <AiOutlineTwitter className="text-xl" />
                        </a>
                        <a
                            href="#"
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
        </div>
    );
};

export default Footer;
