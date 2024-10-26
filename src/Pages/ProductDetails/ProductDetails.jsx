import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa";
import loadingGif from "../../assets/loading/loading.gif";
const ProductDetails = () => {
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
            <div className=" md:w-1/3 w-full h-screen  mx-auto">
                <div className="flex h-screen justify-center items-center">
                    <img
                        className="md:w-[40%] w-[50%]"
                        src={loadingGif}
                        alt=""
                    />
                </div>
            </div>
        );
    }

    if (error) {
        return <div className="text-center text-red-600">{error}</div>;
    }

    const {
        title,
        description,
        image,
        video,
        specifications = [],
        machinesEquipped = [],
    } = details || {};

    return (
        <div className="my-10">
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
                <div className="col-span-2 space-y-4">
                    <div className="grid grid-cols-6 justify-start items-center gap-5">
                        <h3 className="col-span-5 text-2xl font-bold text-[#151515] capitalize">
                            {title}
                        </h3>
                        {video ? (
                            <a
                                href={video}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="col-span-1 flex justify-center items-center flex-col pr-5"
                                aria-label="Watch on YouTube"
                            >
                                <FaYoutube className="text-5xl text-[#ff0000]" />
                                <p className="text-sm font-bold">
                                    Youtube Video
                                </p>
                            </a>
                        ) : (
                            <div className="col-span-1 flex justify-center items-center flex-col pr-5 opacity-50 cursor-not-allowed">
                                <FaYoutube className="text-5xl text-[#ff0000]" />
                                <p className="text-sm font-bold text-gray-400">
                                    No Video
                                </p>
                            </div>
                        )}
                    </div>
                    <img
                        src={image || "/path/to/default/image.jpg"}
                        alt={title || "Product image"}
                        className="w-full rounded-xl shadow-xl"
                    />
                    <p className="text-base text-[#737373] capitalize">
                        {description}
                    </p>
                </div>

                <div className="col-span-1 space-y-4">
                    <div>
                        {Array.isArray(specifications) &&
                        specifications.length > 0 ? (
                            <div className="space-y-4 px-8 pt-6 pb-4 border-t-4 border-[#D3373C] rounded-xl shadow-md flex flex-col bg-[#F3F3F3]">
                                <h3 className="text-[#444444] text-xl font-bold">
                                    Specification
                                </h3>
                                <div className="space-y-2">
                                    {specifications.map(
                                        (machineDescription, index) => (
                                            <li
                                                className="text-[#737373] font-normal text-base capitalize"
                                                key={index}
                                            >
                                                {machineDescription}
                                            </li>
                                        )
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4 px-8 pt-6 pb-4 border-t-4 border-[#D3373C] rounded-xl shadow-md flex flex-col bg-[#F3F3F3]">
                                <p className="text-[#737373] font-normal text-base">
                                    No Specifications available.
                                </p>
                            </div>
                        )}
                    </div>
                    <div>
                        {Array.isArray(machinesEquipped) &&
                        machinesEquipped.length > 0 ? (
                            <div className="space-y-4 px-8 pt-6 pb-4 border-t-4 border-[#D3373C] rounded-xl shadow-md flex flex-col bg-[#F3F3F3]">
                                <h3 className="text-[#444444] text-xl font-bold">
                                    Machines Equipped
                                </h3>
                                <div className="space-y-2">
                                    {machinesEquipped.map(
                                        (machineDescription, index) => (
                                            <li
                                                className="text-[#737373] font-normal text-base capitalize"
                                                key={index}
                                            >
                                                {machineDescription}
                                            </li>
                                        )
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4 px-8 pt-6 pb-4 border-t-4 border-[#D3373C] rounded-xl shadow-md flex flex-col bg-[#F3F3F3]">
                                <p className="text-[#737373] font-normal text-base">
                                    No machines equipped available.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
