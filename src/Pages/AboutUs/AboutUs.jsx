const AboutUs = () => {
    return (
        <div className="my-6">
            {/* About Banner start */}
            <div
                className="relative bg-cover bg-center w-full h-[30vh] rounded-xl"
                style={{
                    backgroundImage: `url('/src/assets/AboutImg/AboutBannerImg.png')`,
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-[#00000080] rounded-xl flex justify-start items-center">
                    <h2 className="text-5xl font-bold text-[#FFFFFF] ml-20">
                        About Us
                    </h2>
                </div>
            </div>
            {/* About Banner end */}

            {/* About Content */}
            {/* about 1st grid */}
            <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-stretch gap-8 my-10">
                {/* First Section with hover effect */}
                <div className="group col-span-1">
                    <div className="px-8 pt-8 pb-6 border-t-4 border-[#D3373C] rounded-xl space-y-3 shadow-md flex flex-col flex-grow bg-[#F3F3F3] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#D3373C] group-hover:to-[#000000] group-hover:border-[#444444]">
                        <h3 className="text-[#444444] text-xl font-bold transition-all duration-300 group-hover:text-white">
                            Company Overview
                        </h3>
                        <div className="space-y-2 flex flex-col flex-grow">
                            <p className="text-[#737373] font-normal text-base transition-all duration-300 group-hover:text-white">
                                <span className="font-bold">Introduction:</span>{" "}
                                Founded in 2016, Vertex Mtbd Resources provides
                                complete machinery solutions for the apparel
                                industry.
                            </p>
                            <p className="text-[#737373] font-normal text-base transition-all duration-300 group-hover:text-white">
                                <span className="font-bold">
                                    Mission Statement:{" "}
                                </span>
                                We are committed to delivering world-class
                                machinery and professional services to enhance
                                productivity in the textile and garment sectors.
                            </p>
                            <p className="text-[#737373] font-normal text-base transition-all duration-300 group-hover:text-white">
                                <span className="font-bold">Vision: </span>
                                Our goal is to become a leading machinery
                                distributor in Bangladesh and globally, offering
                                innovative solutions for the apparel industry.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Second Section with the same hover effect */}
                <div className="group col-span-1">
                    <div className="px-8 pt-8 pb-6 border-t-4 border-[#D3373C] rounded-xl shadow-md space-y-3 flex flex-col flex-grow bg-[#F3F3F3] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#D3373C] group-hover:to-[#000000] group-hover:border-[#444444]">
                        <h3 className="text-[#444444] text-xl font-bold transition-all duration-300 group-hover:text-white">
                            Our Products and Services
                        </h3>
                        <div className="space-y-2 flex flex-col flex-grow">
                            <p className="text-[#737373] font-normal text-base transition-all duration-300 group-hover:text-white">
                                <span className="font-bold">
                                    Machinery Offerings:
                                </span>{" "}
                                The company provides sewing machines,
                                attachments, automation, and efficiency tools.
                            </p>
                            <p className="text-[#737373] font-normal text-base transition-all duration-300 group-hover:text-white">
                                <span className="font-bold">
                                    Manufacturers:{" "}
                                </span>
                                Emphasize the trusted partnerships with leading
                                manufacturers from Europe and Asia (Italy,
                                Germany, Korea, Turkey, China, etc.).
                            </p>
                            <p className="text-[#737373] font-normal text-base transition-all duration-300 group-hover:text-white">
                                <span className="font-bold">
                                    Competitive Advantage:{" "}
                                </span>
                                Explain what sets Vertex Mtbd Resources apart,
                                such as high-quality products, innovative
                                technology, or competitive pricing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2nd grid */}
            <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-stretch gap-8 my-10">
                {/* First Section with hover effect */}
                <div className="group col-span-1">
                    <div className="px-8 pt-8 pb-6 border-t-4 border-[#D3373C] rounded-xl space-y-3 shadow-md flex flex-col flex-grow bg-[#F3F3F3] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#D3373C] group-hover:to-[#000000] group-hover:border-[#444444]">
                        <h3 className="text-[#444444] text-xl font-bold transition-all duration-300 group-hover:text-white">
                            Company Overview
                        </h3>
                        <div className="space-y-2 flex flex-col flex-grow">
                            <p className="text-[#737373] font-normal text-base transition-all duration-300 group-hover:text-white">
                                <span className="font-bold">Introduction:</span>{" "}
                                Founded in 2016, Vertex Mtbd Resources provides
                                complete machinery solutions for the apparel
                                industry.
                            </p>
                            <p className="text-[#737373] font-normal text-base transition-all duration-300 group-hover:text-white">
                                <span className="font-bold">
                                    Mission Statement:{" "}
                                </span>
                                We are committed to delivering world-class
                                machinery and professional services to enhance
                                productivity in the textile and garment sectors.
                            </p>
                            <p className="text-[#737373] font-normal text-base transition-all duration-300 group-hover:text-white">
                                <span className="font-bold">Vision: </span>
                                Our goal is to become a leading machinery
                                distributor in Bangladesh and globally, offering
                                innovative solutions for the apparel industry.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Second Section with the same hover effect */}
                <div className="group col-span-1">
                    <div className="px-8 pt-8 pb-6 border-t-4 border-[#D3373C] rounded-xl shadow-md space-y-3 flex flex-col flex-grow bg-[#F3F3F3] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#D3373C] group-hover:to-[#000000] group-hover:border-[#444444]">
                        <h3 className="text-[#444444] text-xl font-bold transition-all duration-300 group-hover:text-white">
                            Our Products and Services
                        </h3>
                        <div className="space-y-2 flex flex-col flex-grow">
                            <p className="text-[#737373] font-normal text-base transition-all duration-300 group-hover:text-white">
                                <span className="font-bold">
                                    Machinery Offerings:
                                </span>{" "}
                                The company provides sewing machines,
                                attachments, automation, and efficiency tools.
                            </p>
                            <p className="text-[#737373] font-normal text-base transition-all duration-300 group-hover:text-white">
                                <span className="font-bold">
                                    Manufacturers:{" "}
                                </span>
                                Emphasize the trusted partnerships with leading
                                manufacturers from Europe and Asia (Italy,
                                Germany, Korea, Turkey, China, etc.).
                            </p>
                            <p className="text-[#737373] font-normal text-base transition-all duration-300 group-hover:text-white">
                                <span className="font-bold">
                                    Competitive Advantage:{" "}
                                </span>
                                Explain what sets Vertex Mtbd Resources apart,
                                such as high-quality products, innovative
                                technology, or competitive pricing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3rd grid */}
            <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-stretch gap-8 my-10">
                {/* First Section with hover effect */}
                <div className="group col-span-1">
                    <div className="px-8 pt-8 pb-6 border-t-4 border-[#D3373C] rounded-xl space-y-3 shadow-md flex flex-col flex-grow bg-[#F3F3F3] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#D3373C] group-hover:to-[#000000] group-hover:border-[#444444]">
                        <h3 className="text-[#444444] text-xl font-bold transition-all duration-300 group-hover:text-white">
                            Company Overview
                        </h3>
                        <div className="space-y-2 flex flex-col flex-grow">
                            <p className="text-[#737373] font-normal text-base transition-all duration-300 group-hover:text-white">
                                <span className="font-bold">Introduction:</span>{" "}
                                Founded in 2016, Vertex Mtbd Resources provides
                                complete machinery solutions for the apparel
                                industry.
                            </p>
                            <p className="text-[#737373] font-normal text-base transition-all duration-300 group-hover:text-white">
                                <span className="font-bold">
                                    Mission Statement:{" "}
                                </span>
                                We are committed to delivering world-class
                                machinery and professional services to enhance
                                productivity in the textile and garment sectors.
                            </p>
                            <p className="text-[#737373] font-normal text-base transition-all duration-300 group-hover:text-white">
                                <span className="font-bold">Vision: </span>
                                Our goal is to become a leading machinery
                                distributor in Bangladesh and globally, offering
                                innovative solutions for the apparel industry.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Second Section with the same hover effect */}
                <div className="group col-span-1">
                    <div className="px-8 pt-8 pb-6 border-t-4 border-[#D3373C] rounded-xl shadow-md space-y-3 flex flex-col flex-grow bg-[#F3F3F3] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#D3373C] group-hover:to-[#000000] group-hover:border-[#444444]">
                        <h3 className="text-[#444444] text-xl font-bold transition-all duration-300 group-hover:text-white">
                            Our Products and Services
                        </h3>
                        <div className="space-y-2 flex flex-col flex-grow">
                            <p className="text-[#737373] font-normal text-base transition-all duration-300 group-hover:text-white">
                                <span className="font-bold">
                                    Machinery Offerings:
                                </span>{" "}
                                The company provides sewing machines,
                                attachments, automation, and efficiency tools.
                            </p>
                            <p className="text-[#737373] font-normal text-base transition-all duration-300 group-hover:text-white">
                                <span className="font-bold">
                                    Manufacturers:{" "}
                                </span>
                                Emphasize the trusted partnerships with leading
                                manufacturers from Europe and Asia (Italy,
                                Germany, Korea, Turkey, China, etc.).
                            </p>
                            <p className="text-[#737373] font-normal text-base transition-all duration-300 group-hover:text-white">
                                <span className="font-bold">
                                    Competitive Advantage:{" "}
                                </span>
                                Explain what sets Vertex Mtbd Resources apart,
                                such as high-quality products, innovative
                                technology, or competitive pricing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4rd grid */}
            <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-stretch gap-8 my-10">
                {/* First Section with hover effect */}
                <div className="group col-span-1">
                    <div className="px-8 pt-8 pb-6 border-t-4 border-[#D3373C] rounded-xl space-y-3 shadow-md flex flex-col flex-grow bg-[#F3F3F3] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#D3373C] group-hover:to-[#000000] group-hover:border-[#444444]">
                        <h3 className="text-[#444444] text-xl font-bold transition-all duration-300 group-hover:text-white">
                            Company Overview
                        </h3>
                        <div className="space-y-2 flex flex-col flex-grow">
                            <p className="text-[#737373] font-normal text-base transition-all duration-300 group-hover:text-white">
                                <span className="font-bold">Introduction:</span>{" "}
                                Founded in 2016, Vertex Mtbd Resources provides
                                complete machinery solutions for the apparel
                                industry.
                            </p>
                            <p className="text-[#737373] font-normal text-base transition-all duration-300 group-hover:text-white">
                                <span className="font-bold">
                                    Mission Statement:{" "}
                                </span>
                                We are committed to delivering world-class
                                machinery and professional services to enhance
                                productivity in the textile and garment sectors.
                            </p>
                            <p className="text-[#737373] font-normal text-base transition-all duration-300 group-hover:text-white">
                                <span className="font-bold">Vision: </span>
                                Our goal is to become a leading machinery
                                distributor in Bangladesh and globally, offering
                                innovative solutions for the apparel industry.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Second Section with the same hover effect */}
                <div className="group col-span-1">
                    <div className="px-8 pt-8 pb-6 border-t-4 border-[#D3373C] rounded-xl shadow-md space-y-3 flex flex-col flex-grow bg-[#F3F3F3] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#D3373C] group-hover:to-[#000000] group-hover:border-[#444444]">
                        <h3 className="text-[#444444] text-xl font-bold transition-all duration-300 group-hover:text-white">
                            Our Products and Services
                        </h3>
                        <div className="space-y-2 flex flex-col flex-grow">
                            <p className="text-[#737373] font-normal text-base transition-all duration-300 group-hover:text-white">
                                <span className="font-bold">
                                    Machinery Offerings:
                                </span>{" "}
                                The company provides sewing machines,
                                attachments, automation, and efficiency tools.
                            </p>
                            <p className="text-[#737373] font-normal text-base transition-all duration-300 group-hover:text-white">
                                <span className="font-bold">
                                    Manufacturers:{" "}
                                </span>
                                Emphasize the trusted partnerships with leading
                                manufacturers from Europe and Asia (Italy,
                                Germany, Korea, Turkey, China, etc.).
                            </p>
                            <p className="text-[#737373] font-normal text-base transition-all duration-300 group-hover:text-white">
                                <span className="font-bold">
                                    Competitive Advantage:{" "}
                                </span>
                                Explain what sets Vertex Mtbd Resources apart,
                                such as high-quality products, innovative
                                technology, or competitive pricing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
