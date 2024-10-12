import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { VscThreeBars } from "react-icons/vsc";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navOptionsLg = (
        <>
            <li className="font-extrabold text-base duration-300 capitalize">
                <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                        isActive ? "text-[#D3373C]" : "text-[#444444]"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li className="font-extrabold text-base duration-300 capitalize">
                <NavLink
                    to={"/about"}
                    className={({ isActive }) =>
                        isActive ? "text-[#D3373C]" : "text-[#444444]"
                    }
                >
                    About Us
                </NavLink>
            </li>
            <li className="font-extrabold text-base duration-300 capitalize">
                <NavLink
                    to={"/products"}
                    className={({ isActive }) =>
                        isActive ? "text-[#D3373C]" : "text-[#444444]"
                    }
                >
                    Products
                </NavLink>
            </li>
            <li className="font-extrabold text-base duration-300 capitalize">
                <NavLink
                    to={"/chemicals"}
                    className={({ isActive }) =>
                        isActive ? "text-[#D3373C]" : "text-[#444444]"
                    }
                >
                    Chemicals
                </NavLink>
            </li>
            <li className="font-extrabold text-base duration-300 capitalize">
                <NavLink
                    to={"/gallery"}
                    className={({ isActive }) =>
                        isActive ? "text-[#D3373C]" : "text-[#444444]"
                    }
                >
                    Gallery
                </NavLink>
            </li>
            <li className="font-extrabold text-base duration-300 capitalize">
                <NavLink
                    to={"/contact"}
                    className={({ isActive }) =>
                        isActive ? "text-[#D3373C]" : "text-[#444444]"
                    }
                >
                    Contact Us
                </NavLink>
            </li>
        </>
    );

    const navOptionsMd = (
        <>
            <li
                className={`font-extrabold text-base duration-50 capitalize animate__animated animate__bounceInUp animate__delay-0.1s ${
                    isOpen ? "" : "hidden"
                }`}
            >
                <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                        isActive ? "text-[#FFFFFF]" : "text-[#444444]"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li
                className={`font-extrabold text-base duration-75 capitalize animate__animated animate__bounceInUp animate__delay-0.1s ${
                    isOpen ? "" : "hidden"
                }`}
            >
                <NavLink
                    to={"/about"}
                    className={({ isActive }) =>
                        isActive ? "text-[#FFFFFF]" : "text-[#444444]"
                    }
                >
                    About Us
                </NavLink>
            </li>
            <li
                className={`font-extrabold text-base duration-100 capitalize animate__animated animate__bounceInUp animate__delay-0.3s ${
                    isOpen ? "" : "hidden"
                }`}
            >
                <NavLink
                    to={"/products"}
                    className={({ isActive }) =>
                        isActive ? "text-[#FFFFFF]" : "text-[#444444]"
                    }
                >
                    Products
                </NavLink>
            </li>
            <li
                className={`font-extrabold text-base duration-200 capitalize animate__animated animate__bounceInUp animate__delay-0.5s ${
                    isOpen ? "" : "hidden"
                }`}
            >
                <NavLink
                    to={"/chemicals"}
                    className={({ isActive }) =>
                        isActive ? "text-[#FFFFFF]" : "text-[#444444]"
                    }
                >
                    Chemicals
                </NavLink>
            </li>
            <li
                className={`font-extrabold text-base duration-300 capitalize animate__animated animate__bounceInUp animate__delay-0.7s ${
                    isOpen ? "" : "hidden"
                }`}
            >
                <NavLink
                    to={"/gallery"}
                    className={({ isActive }) =>
                        isActive ? "text-[#FFFFFF]" : "text-[#444444]"
                    }
                >
                    Gallery
                </NavLink>
            </li>
            <li
                className={`font-extrabold text-base duration-400 capitalize animate__animated animate__bounceInUp animate__delay-0.9s ${
                    isOpen ? "" : "hidden"
                }`}
            >
                <NavLink
                    to={"/contact"}
                    className={({ isActive }) =>
                        isActive ? "text-[#FFFFFF]" : "text-[#444444]"
                    }
                >
                    Contact Us
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="w-full max-w-7xl mx-auto z-50">
            <div className="navbar flex justify-between items-center relative py-5">
                {/* NavLeft */}
                <div className="relative">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden hover:text-[#D3373C] focus:text-[#D3373C] p-2 mr-4"
                        >
                            {isOpen ? (
                                <IoClose className="text-2xl" />
                            ) : (
                                <VscThreeBars className="text-2xl" />
                            )}
                        </div>

                        {/* Mobile Menu */}
                        <ul
                            className={`fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center gap-3 px-1 bg-[#D3373C] transform ${
                                isOpen ? "translate-x-0" : "-translate-x-full"
                            } transition-transform duration-500 ease-in-out lg:hidden z-40`}
                        >
                            <div
                                className="absolute top-4 right-3"
                                onClick={() => setIsOpen(false)}
                            >
                                <IoClose className="text-3xl hover:text-[#D3373C] hover:bg-[#FFFFFF] rounded-md bg-[#D3373C] text-[#FFFFFF] duration-300" />
                            </div>
                            {navOptionsMd}
                        </ul>
                    </div>
                    <Link to={"/"}>
                        <img
                            src="/src/assets/logo/vertexLogo.png"
                            alt="Vertex Logo"
                            className="lg:w-28 w-24"
                        />
                    </Link>
                </div>
                {/* NavCenter */}
                <div className="hidden lg:flex">
                    <ul className="flex justify-center items-center gap-8 px-1">
                        {navOptionsLg}
                    </ul>
                </div>
                {/* NavEnd */}
                <div className="z-30">
                    <Link
                        to={"/login"}
                        className="relative inline-flex items-center justify-start px-8 py-2 overflow-hidden font-semibold transition-all bg-[#D3373C] rounded-md group"
                    >
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                        </span>
                        <span className="absolute -bottom-2 left-0 w-full h-full transition-all duration-100 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#EF1D23] rounded-md group-hover:mb-12 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-100 ease-in-out group-hover:text-white">
                            Login
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
