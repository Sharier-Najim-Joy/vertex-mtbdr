import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { VscThreeBars } from "react-icons/vsc";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import { MdDashboardCustomize, MdLogin } from "react-icons/md";
import useUserInfo from "../../hooks/useUserInfo";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logOut } = useAuth();
    const [users] = useUserInfo();
    const [isAdmin] = useAdmin();
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [navbarStyle, setNavbarStyle] = useState("top-0");

    const handleLogOut = async () => {
        try {
            await logOut(); // Add error handling if needed
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

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
                    to={"/allProducts"}
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
                        isActive ? "text-[#FFFFFF]" : "text-[#000000]"
                    }
                    onClick={() => setIsOpen(false)} // Close menu on click
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
                        isActive ? "text-[#FFFFFF]" : "text-[#000000]"
                    }
                    onClick={() => setIsOpen(false)} // Close menu on click
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
                    to={"/allProducts"}
                    className={({ isActive }) =>
                        isActive ? "text-[#FFFFFF]" : "text-[#000000]"
                    }
                    onClick={() => setIsOpen(false)} // Close menu on click
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
                        isActive ? "text-[#FFFFFF]" : "text-[#000000]"
                    }
                    onClick={() => setIsOpen(false)} // Close menu on click
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
                        isActive ? "text-[#FFFFFF]" : "text-[#000000]"
                    }
                    onClick={() => setIsOpen(false)} // Close menu on click
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
                        isActive ? "text-[#FFFFFF]" : "text-[#000000]"
                    }
                    onClick={() => setIsOpen(false)} // Close menu on click
                >
                    Contact Us
                </NavLink>
            </li>
        </>
    );

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            if (currentScrollPos > 100) {
                // Adjust this value as needed
                if (prevScrollPos > currentScrollPos) {
                    // User is scrolling up
                    setNavbarStyle("fixed -top-24 shadow-xl");
                } else {
                    // User is scrolling down
                    setNavbarStyle("fixed top-0 shadow-xl"); // Adjust this value based on your navbar height
                }
            } else {
                // Reset navbar to its original position when at the top
                setNavbarStyle("top-0 duration-300 ease-in-out");
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <div
            className={`left-0 w-full bg-white z-50 transition-all duration-300 ease-in-out ${navbarStyle}`}
        >
            {/* Apply sticky class conditionally */}
            <div className="w-full max-w-7xl mx-auto z-50">
                <div className="navbar flex justify-between items-center relative py-5">
                    <div className="relative">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                onClick={() => setIsOpen(!isOpen)}
                                className="lg:hidden hover:text-[#D3373C] focus:text-[#D3373C] p-2 mr-4"
                            >
                                {isOpen ? (
                                    <VscThreeBars className="text-2xl" />
                                ) : (
                                    <VscThreeBars className="text-2xl" />
                                )}
                            </div>

                            {/* Mobile Menu */}
                            <ul
                                className={`fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center gap-3 px-1 bg-[#D3373C] transform ${
                                    isOpen
                                        ? "translate-x-0"
                                        : "-translate-x-full"
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
                    {user && isAdmin && (
                        <div className="z-30">
                            <div className="dropdown dropdown-end">
                                <label
                                    tabIndex={0}
                                    className="btn btn-circle btn-sm border-[#D3373C] duration-300"
                                    data-tooltip-id="drop"
                                    data-tooltip-content={user?.displayName}
                                >
                                    <div className="w-9 rounded-full">
                                        <img
                                            referrerPolicy="no-referrer"
                                            className="rounded-full object-cover"
                                            alt=""
                                            src={
                                                users?.photoURL || user.photoURL
                                            }
                                        />
                                    </div>
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="flex flex-col gap-2 menu-sm dropdown-content mt-3 z-[1] shadow bg-[#D3373C] rounded-lg p-4 w-52"
                                >
                                    <li>
                                        <p className="text-sm font-extrabold tracking-wider text-center text-white">
                                            {user.displayName || "Not a Name"}
                                        </p>
                                    </li>
                                    <li>
                                        <Link
                                            to={"dashboard/adminHome"}
                                            className="btn p-1 rounded-none w-full bg-transparent text-white flex justify-start items-center gap-1 border-none hover:bg-red-700 duration-300"
                                        >
                                            <span className="text-2xl">
                                                <MdDashboardCustomize />
                                            </span>
                                            <span>Dashboard</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            onClick={handleLogOut}
                                            className="btn p-2 rounded-none w-full bg-transparent text-white flex justify-start items-center gap-1 border-none hover:bg-red-700 duration-300"
                                        >
                                            <span className="text-2xl">
                                                <MdLogin />
                                            </span>
                                            <span>Logout</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
