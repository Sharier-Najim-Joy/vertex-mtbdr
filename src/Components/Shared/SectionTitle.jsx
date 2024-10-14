const SectionTitle = ({ subHeading, heading, description }) => {
    return (
        <div className="my-10 text-center space-y-2">
            <h5 className="text-xl font-bold text-[#D3373C]">{subHeading}</h5>
            <h2 className="font-bold text-4xl text-[#151515] lg:w-3/4 w-full mx-auto">
                {heading}
            </h2>
            <p className="text-base font-normal text-[#737373] w-2/4 mx-auto pt-5">
                {description}
            </p>
        </div>
    );
};

export default SectionTitle;
