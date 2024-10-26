import { AiOutlineProduct } from "react-icons/ai";
import useAllProducts from "../../hooks/useAllProducts";
import useAuth from "../../hooks/useAuth";
import useAllUsers from "../../hooks/useAllUsers";
import { FaUsers } from "react-icons/fa";
import useUserInfo from "../../hooks/useUserInfo";

const AdminHome = () => {
    const { user } = useAuth();
    const [users] = useUserInfo();
    const [products] = useAllProducts();
    const [allUsers] = useAllUsers(); // refetch not used, so omitted

    return (
        <div className="mt-10">
            <div className="text-center mt-5 flex flex-col justify-center items-center gap-2">
                <h3 className="lg:text-2xl text-xl font-normal">
                    Hi, Welcome Back!
                </h3>
                <h2 className="lg:text-4xl text-2xl font-bold">
                    {user ? user.displayName : "User"}
                </h2>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 justify-center mx-auto items-center lg:gap-10 gap-5 mt-10 w-2/3">
                {/* Total Users Section */}
                <div className="flex justify-center items-center gap-2 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] p-12 rounded-xl">
                    <FaUsers className="lg:text-7xl text-6xl text-white" />
                    <div className="flex justify-center items-center gap-2 flex-col">
                        <span className="text-5xl font-bold text-white">
                            {allUsers ? allUsers.length : 0}{" "}
                            {/* Safely access length */}
                        </span>
                        <h3 className="lg:text-2xl text-xl text-white font-semibold">
                            Total Users
                        </h3>
                    </div>
                </div>

                {/* Total Products Section */}
                <div className="flex justify-center items-center gap-2 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] p-12 rounded-xl">
                    <AiOutlineProduct className="lg:text-7xl text-6xl text-white" />
                    <div className="flex justify-center items-center gap-2 flex-col">
                        <span className="text-5xl font-bold text-white">
                            {products ? products.length : 0}{" "}
                            {/* Safely access length */}
                        </span>
                        <h3 className="lg:text-2xl text-white font-semibold">
                            Total Products
                        </h3>
                    </div>
                </div>
            </div>
            <div className="w-2/4 mx-auto my-10 bg-slate-300 grid grid-cols-1 lg:p-20 p-10">
                <div className="rounded-full col-span-1 flex justify-center items-center">
                    <img
                        src={users?.photoURL || user.photoURL}
                        alt="Admin Profile Picture"
                        className="rounded-full w-52 border-4 border-[#D3373C]"
                    />
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
