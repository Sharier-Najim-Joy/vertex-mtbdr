import { ImBin } from "react-icons/im";
import Swal from "sweetalert2";
import { FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../../Components/Shared/SectionTitle";
import useAllUsers from "../../hooks/useAllUsers";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const [allUsers, refetch] = useAllUsers();

    const handleUserDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/deleteUser/${id}`).then((res) => {
                    if (res.data.deletedCount > 0) {
                        Swal.fire(
                            "Deleted!",
                            "User has been deleted.",
                            "success"
                        );
                        refetch(); // Refresh user data after deletion
                    }
                });
            }
        });
    };

    const handleMakeAdmin = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to promote this user to Admin?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, promote to Admin!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
                    if (res.data.modifiedCount > 0) {
                        Swal.fire(
                            "Success!",
                            "User has been promoted to Admin.",
                            "success"
                        );
                        refetch(); // Refresh user data after promotion
                    }
                });
            }
        });
    };

    return (
        <section>
            <div className="text-center my-10 font-inter">
                <SectionTitle
                    subHeading={"How Many?"}
                    heading={"Manage All Users"}
                />
            </div>

            <div className="bg-white">
                <div className="flex justify-start items-center">
                    <h3 className="text-2xl font-Cinzel text-[#151515] font-bold">
                        Total Users: {allUsers ? allUsers.length : 0}
                    </h3>
                </div>

                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className="bg-[#D3373C] text-sm text-white capitalize">
                                <th>#</th>
                                <th>User Name</th>
                                <th>User Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUsers && allUsers.length > 0 ? (
                                allUsers.map((user, index) => (
                                    <tr
                                        key={user._id}
                                        className="text-base font-normal text-[#737373]"
                                    >
                                        <th className="text-sm">{index + 1}</th>
                                        <td className="text-sm">{user.name}</td>
                                        <td className="text-sm">
                                            {user.email}
                                        </td>
                                        <td className="text-sm">
                                            {user.role === "admin" ? (
                                                "Admin"
                                            ) : (
                                                <button
                                                    onClick={() =>
                                                        handleMakeAdmin(user)
                                                    }
                                                    className="p-3 rounded-lg text-white bg-slate-400 text-xl hover:bg-red-800 duration-300"
                                                >
                                                    <FaUsers />
                                                </button>
                                            )}
                                        </td>
                                        <th>
                                            <button
                                                onClick={() =>
                                                    handleUserDelete(user._id)
                                                }
                                                className="p-3 rounded-lg text-white bg-red-600 text-xl hover:bg-red-800 duration-300"
                                            >
                                                <ImBin />
                                            </button>
                                        </th>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center p-5">
                                        No users found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default AllUsers;
