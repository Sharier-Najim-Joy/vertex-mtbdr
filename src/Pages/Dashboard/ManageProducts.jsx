import { ImBin } from "react-icons/im";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAllProducts from "../../hooks/useAllProducts";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../../Components/Shared/SectionTitle";

const ManageProducts = () => {
    const [products, refetch] = useAllProducts();
    const axiosSecure = useAxiosSecure();

    const handleItemDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/product/${item._id}`);
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch data
                    refetch();
                    // alert successfully deleted item
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.name} has been deleted.`,
                        icon: "success",
                    });
                }
            }
        });
    };

    return (
        <section>
            <div className="text-center my-10">
                <SectionTitle
                    subHeading={"Hurry Up"}
                    heading={"Manage All Products"}
                ></SectionTitle>
            </div>

            <div className="bg-white">
                <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-Cinzel text-[#151515] font-bold">
                        Total Items: {products.length}
                    </h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="table ">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#D3373C] text-sm text-white capitalize">
                                <th>#</th>
                                <th>Product Image</th>
                                <th>Product Title</th>
                                <th>Category</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {products.map((item, index) => (
                                <tr
                                    key={item._id}
                                    className="text-sm font-normal text-[#737373]"
                                >
                                    <th>
                                        <p className="text-[#151515] text-sm font-bold">
                                            {index + 1}
                                        </p>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="w-16 h-16">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar Tailwind CSS Component"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.title}</td>
                                    <td>{item.category}</td>
                                    <th>
                                        <Link
                                            to={`/dashboard/updateProduct/${item._id}`}
                                            className="btn rounded-lg text-white bg-slate-400 text-xl hover:bg-red-800 duration-300"
                                        >
                                            <FaRegEdit />
                                        </Link>
                                    </th>
                                    <th>
                                        <button
                                            onClick={() =>
                                                handleItemDelete(item)
                                            }
                                            className="btn rounded-lg text-white bg-[#D3373C] text-xl hover:bg-red-800 duration-300"
                                        >
                                            <ImBin />
                                        </button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ManageProducts;
