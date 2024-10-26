import { FaYoutube } from "react-icons/fa";

const ProductInfo = ({ product }) => {
    const {
        title,
        description,
        image,
        video,
        specifications = [],
        machinesEquipped = [],
    } = product || {};

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
                            specifications.map((spec, index) => (
                                <div
                                    className="px-8 pt-8 pb-6 border-t-4 border-[#D3373C] rounded-xl space-y-3 shadow-md flex flex-col flex-grow bg-[#F3F3F3]"
                                    key={spec._id || index}
                                >
                                    <h3 className="text-[#444444] text-xl font-bold">
                                        Machine Equipped:{" "}
                                        {spec.machineName || "Unknown Machine"}
                                    </h3>
                                    <div className="space-y-2 flex flex-col flex-grow">
                                        <p className="text-[#737373] font-normal text-base">
                                            <span className="font-bold">
                                                Introduction:
                                            </span>{" "}
                                            {spec.introduction ||
                                                "No introduction available."}
                                        </p>
                                    </div>
                                </div>
                            ))
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

export default ProductInfo;
