import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";
import SectionTitle from "./Shared/SectionTitle";
import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import loadingGif from "../assets/loading/loading.gif";
import { useForm } from "react-hook-form";

const UpdateProducts = () => {
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

    const { id } = useParams();
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Initialize useForm hook only once at the top level
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const res = await axiosPublic.get(`/products/${id}`);
                setDetails(res.data);
            } catch (error) {
                console.error(error);
                setError("Failed to fetch product details.");
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [id, axiosPublic]);

    if (loading) {
        return (
            <div className=" md:w-1/3 w-full h-screen mx-auto">
                <div className="flex h-screen justify-center items-center">
                    <img
                        className="md:w-[40%] w-[50%]"
                        src={loadingGif}
                        alt="Loading"
                    />
                </div>
            </div>
        );
    }

    if (error) {
        return <div className="text-center text-red-600">{error}</div>;
    }

    const { title, description, category, popularCategory, shortDescription } =
        details || {};

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        },
    });

    const onSubmit = async (data) => {
        console.log(data);

        const updatedProduct = {
            title: data.title,
            category: data.category,
            popularCategory: data.popularCategory,
            shortDescription: data.shortDescription,
            description: data.description,
        };

        try {
            const res = await axiosSecure.patch(
                `/product/${id}`,
                updatedProduct
            );
            console.log(res.data);

            if (res.data.modifiedCount > 0) {
                Toast.fire({
                    icon: "success",
                    title: `${data.title} updated successfully`,
                });
                // naviagte
                navigate("/dashboard/manageProducts");
            }
        } catch (error) {
            console.error("Failed to update product:", error);
        }
    };

    return (
        <section>
            <div className="text-center my-10">
                <SectionTitle
                    subHeading={"Upgrading"}
                    heading={"Update Product"}
                />
            </div>

            <div className="w-5/6 mx-auto p-14 bg-white mb-10">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-base font-semibold text-[#444444]">
                            Product Title*
                        </label>
                        <input
                            type="text"
                            className="border-2 border-gray-300 rounded-md p-2 w-full text-base text-[#A1A1A1]"
                            placeholder="Product title"
                            defaultValue={title}
                            {...register("title", { required: true })}
                        />
                    </div>

                    <div className="flex justify-center items-center gap-8 w-full">
                        <div className="flex flex-col w-full space-y-2">
                            <label className="text-base font-semibold text-[#444444]">
                                Category*
                            </label>
                            <select
                                defaultValue={category}
                                className="border-2 border-gray-300 rounded-md p-2 w-full text-base text-[#A1A1A1]"
                                {...register("category", { required: true })}
                            >
                                <option disabled value="default">
                                    Category
                                </option>
                                <option value="Samwoo Boiler">
                                    Samwoo Boiler
                                </option>
                                <option value="Jam International">
                                    Jam International
                                </option>
                                <option value="Typical">Typical</option>
                                <option value="BKS Bukangs">BKS Bukangs</option>
                                <option value="Inhyun koster">
                                    Inhyun koster
                                </option>
                                <option value="Kansai Special">
                                    Kansai Special
                                </option>
                                <option value="Cutex">Cutex</option>
                                <option value="Eastman">Eastman</option>
                                <option value="Veit">Veit</option>
                                <option value="Yamato">Yamato</option>
                                <option value="Focus">Focus</option>
                                <option value="Martin Group">
                                    Martin Group
                                </option>
                            </select>
                        </div>

                        <div className="flex flex-col w-full space-y-2">
                            <label className="text-base font-semibold text-[#444444]">
                                Popular Category*
                            </label>
                            <select
                                defaultValue={popularCategory}
                                className="border-2 border-gray-300 rounded-md p-2 w-full text-base text-[#A1A1A1]"
                                {...register("popularCategory", {
                                    required: true,
                                })}
                            >
                                <option disabled value="default">
                                    Popular Category
                                </option>
                                <option value="popular">Popular</option>
                                <option value="nonPopular">Non Popular</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-base font-semibold text-[#444444]">
                            Short Description*
                        </label>
                        <input
                            type="text"
                            className="border-2 border-gray-300 rounded-md p-2 w-full text-base text-[#A1A1A1]"
                            placeholder="Short description"
                            defaultValue={shortDescription}
                            {...register("shortDescription", {
                                required: true,
                            })}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-base font-semibold text-[#444444]">
                            Product Description*
                        </label>
                        <textarea
                            className="border-2 h-36 border-gray-300 rounded-md p-2 w-full text-base text-[#A1A1A1]"
                            placeholder="Product description"
                            defaultValue={description}
                            {...register("description", { required: true })}
                        ></textarea>
                    </div>

                    <button className="relative inline-flex items-center justify-start px-8 py-2 overflow-hidden font-semibold transition-all bg-[#D3373C] rounded-md group">
                        <span className="relative w-full text-center text-white transition-colors duration-100 ease-in-out group-hover:text-white">
                            <span>Update Product</span>
                        </span>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default UpdateProducts;
