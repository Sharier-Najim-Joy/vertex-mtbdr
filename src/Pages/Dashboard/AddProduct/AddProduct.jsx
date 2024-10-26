import { useForm } from "react-hook-form";
import { RiRestaurantFill } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../Components/Shared/SectionTitle";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProduct = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

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

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            // Image upload to ImgBB
            const imageFile = new FormData();
            imageFile.append("image", data.image[0]);
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: {
                    "content-type": "multipart/form-data",
                },
            });

            if (res.data.success) {
                // Prepare the product data
                const productItem = {
                    title: data.title,
                    image: res.data.data.display_url,
                    category: data.category,
                    popularCategory: data.popularCategory,
                    shortDescription: data.shortDescription,
                    description: data.description,
                };

                // Save product to the database
                const productRes = await axiosSecure.post(
                    "/addProduct",
                    productItem
                );
                if (productRes.data.insertedId) {
                    reset();
                    Toast.fire({
                        icon: "success",
                        title: `${data.title} added successfully`,
                    });
                }
            } else {
                // Handle image upload failure
                Swal.fire(
                    "Error",
                    "Image upload failed. Please try again.",
                    "error"
                );
            }
        } catch (error) {
            // Handle any other error (API failure, network issue, etc.)
            Swal.fire(
                "Error",
                "Failed to add product. Please try again.",
                "error"
            );
        }
    };

    return (
        <section>
            <div className="text-center my-10">
                <SectionTitle
                    subHeading={"What is new?"}
                    heading={"Add a Product"}
                />
            </div>

            <div className="w-5/6 mx-auto bg-white mb-10">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Product Title */}
                    <div className="space-y-2">
                        <label className="text-base font-semibold text-[#444444]">
                            Product Title*
                        </label>
                        <input
                            type="text"
                            className={`border-2 border-gray-300 rounded-md p-2 w-full text-base ${
                                errors.title && "border-red-500"
                            }`}
                            placeholder="Title"
                            {...register("title", {
                                required: "Title is required",
                            })}
                        />
                        {errors.title && (
                            <p className="text-red-500 text-sm">
                                {errors.title.message}
                            </p>
                        )}
                    </div>

                    {/* Category and Popular Category */}
                    <div className="flex justify-center items-center gap-8 w-full">
                        <div className="flex flex-col w-full space-y-2">
                            <label className="text-base font-semibold text-[#444444]">
                                Category*
                            </label>
                            <select
                                defaultValue="default"
                                className={`border-2 border-gray-300 rounded-md p-2 w-full text-base ${
                                    errors.category && "border-red-500"
                                }`}
                                {...register("category", {
                                    required: "Category is required",
                                })}
                            >
                                <option disabled value="default">
                                    Category
                                </option>
                                {/* Add your categories here */}
                                <option value="Samwoo Boiler">
                                    Samwoo Boiler
                                </option>
                                <option value="Jam International">
                                    Jam International
                                </option>
                                <option className="py-2" value="Typical">
                                    Typical
                                </option>
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
                                {/* Add more categories as needed */}
                            </select>
                            {errors.category && (
                                <p className="text-red-500 text-sm">
                                    {errors.category.message}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col w-full space-y-2">
                            <label className="text-base font-semibold text-[#444444]">
                                Popular Category*
                            </label>
                            <select
                                defaultValue="default"
                                className={`border-2 border-gray-300 rounded-md p-2 w-full text-base ${
                                    errors.popularCategory && "border-red-500"
                                }`}
                                {...register("popularCategory", {
                                    required: "Popular category is required",
                                })}
                            >
                                <option disabled value="default">
                                    Popular or non Popular Category
                                </option>
                                <option value="popular">Popular</option>
                                <option value="nonPopular">Non Popular</option>
                            </select>
                            {errors.popularCategory && (
                                <p className="text-red-500 text-sm">
                                    {errors.popularCategory.message}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Short Description */}
                    <div className="space-y-2">
                        <label className="text-base font-semibold text-[#444444]">
                            Short Description*
                        </label>
                        <input
                            type="text"
                            className={`border-2 border-gray-300 rounded-md p-2 w-full text-base ${
                                errors.shortDescription && "border-red-500"
                            }`}
                            placeholder="Short description"
                            {...register("shortDescription", {
                                required: "Short description is required",
                            })}
                        />
                        {errors.shortDescription && (
                            <p className="text-red-500 text-sm">
                                {errors.shortDescription.message}
                            </p>
                        )}
                    </div>

                    {/* Product Description */}
                    <div className="space-y-2">
                        <label className="text-base font-semibold text-[#444444]">
                            Product Description*
                        </label>
                        <textarea
                            className={`border-2 h-36 border-gray-300 rounded-md p-2 w-full text-base ${
                                errors.description && "border-red-500"
                            }`}
                            placeholder="Product details"
                            {...register("description", {
                                required: "Description is required",
                            })}
                        ></textarea>
                        {errors.description && (
                            <p className="text-red-500 text-sm">
                                {errors.description.message}
                            </p>
                        )}
                    </div>

                    {/* Image Upload */}
                    <div className="space-y-2 flex justify-center items-start flex-col">
                        <label className="text-base font-semibold text-[#444444]">
                            Upload Image*
                        </label>
                        <input
                            type="file"
                            {...register("image", {
                                required: "Image is required",
                            })}
                        />
                        {errors.image && (
                            <p className="text-red-500 text-sm">
                                {errors.image.message}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button className="relative inline-flex items-center justify-start px-8 py-2 overflow-hidden font-semibold transition-all bg-[#D3373C] rounded-md group">
                        <span className="relative w-full text-center text-white transition-colors duration-100 ease-in-out group-hover:text-white">
                            <span>Add Product</span>
                        </span>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default AddProduct;
