import { FaHome, FaUsers } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import {
    AiOutlineClose,
    AiOutlineMenu,
    AiOutlineProduct,
} from "react-icons/ai";
import { MdMapsHomeWork } from "react-icons/md";

import useAdmin from "../hooks/useAdmin";
import { IoBagAddSharp } from "react-icons/io5";

const Dashboard = () => {
    const [isActive, setActive] = useState(false);

    const handleToggleSidebar = () => {
        setActive(!isActive);
    };

    // TODO: get Admin value from the database
    const [isAdmin] = useAdmin();

    const AdminDashboardSidebar = (
        <>
            <li className="font-medium tracking-wider text-base hover:text-white  duration-300 capitalize">
                <NavLink
                    to={"/dashboard/adminHome"}
                    className={({ isActive }) =>
                        isActive ? "text-white" : "text-[151515]"
                    }
                >
                    <span className="flex justify-start items-center gap-2">
                        <MdMapsHomeWork className="text-2xl" />
                        <span>Admin Home</span>
                    </span>
                </NavLink>
            </li>
            <li className="font-medium tracking-wider text-base hover:text-white  duration-300 capitalize">
                <NavLink
                    to={"/dashboard/allUsers"}
                    className={({ isActive }) =>
                        isActive ? "text-white" : "text-[151515]"
                    }
                >
                    <span className="flex justify-start items-center gap-2">
                        <FaUsers className="text-2xl" />
                        <span>All Users</span>
                    </span>
                </NavLink>
            </li>
            <li className="font-medium tracking-wider text-base hover:text-white  duration-300 capitalize">
                <NavLink
                    to={"/dashboard/addProduct"}
                    className={({ isActive }) =>
                        isActive ? "text-white" : "text-[151515]"
                    }
                >
                    <span className="flex justify-start items-center gap-2">
                        <IoBagAddSharp className="text-2xl" />
                        <span>Add Product</span>
                    </span>
                </NavLink>
            </li>
            <li className="font-medium tracking-wider text-base hover:text-white  duration-300 capitalize">
                <NavLink
                    to={"/dashboard/manageProducts"}
                    className={({ isActive }) =>
                        isActive ? "text-white" : "text-[151515]"
                    }
                >
                    <span className="flex justify-start items-center gap-2">
                        <AiOutlineProduct className="text-2xl" />
                        <span>Manage Product</span>
                    </span>
                </NavLink>
            </li>
        </>
    );

    const interfaceSidebar = (
        <>
            <li className="font-medium text-base hover:text-white duration-300 uppercase">
                <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                        isActive ? "text-white" : "text-[151515]"
                    }
                >
                    <span className="flex justify-start items-center gap-2">
                        <FaHome className="text-2xl"></FaHome>
                        <span>Home</span>
                    </span>
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="flex bg-white">
            {/* dashboard side bar */}
            <div
                className={`px-5 py-6 min-h-screen bg-[#D3373C] lg:flex lg:relative fixed z-20 ${
                    isActive && "-translate-x-full"
                } lg:translate-x-0 duration-300 ease-in-out`}
            >
                <button
                    onClick={() => handleToggleSidebar(!isActive)}
                    className="absolute top-3 -right-11 lg:hidden p-3 bg-[#D3373C]"
                >
                    {isActive ? (
                        <AiOutlineMenu className="text-xl text-white" />
                    ) : (
                        <AiOutlineClose className="text-xl text-white" />
                    )}
                </button>
                <div>
                    <Link
                        to={"/"}
                        className="text-2xl tracking-widest font-semibold uppercase flex justify-center items-center text-white gap-1 mb-7"
                    >
                        <img
                            src="/src/assets/logo/vertexLogo.png"
                            alt="Vertex Logo"
                            className="lg:w-28 w-24 bg-white rounded-lg p-2"
                        />
                    </Link>
                    <div>
                        {isAdmin && (
                            <>
                                <ul className=" py-5 border-b-2 border-white space-y-4 font-inter">
                                    {AdminDashboardSidebar}
                                </ul>
                            </>
                        )}
                        <ul className="font-inter py-5 space-y-4">
                            {interfaceSidebar}
                        </ul>
                    </div>
                </div>
            </div>
            {/* dashboard content */}
            <div className="flex-1 max-w-7xl mx-auto md:px-2 px-4 bg-white font-inter">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
