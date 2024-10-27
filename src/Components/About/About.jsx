import { Link } from "react-router-dom";
import AboutImg from "../../assets/images/AboutImg/OwnerAboutImg.png";
const About = () => {
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-8 my-20 lg:w-4/5 w-full mx-auto">
            <div className="col-span-1" data-aos="fade-up">
                <img src={AboutImg} alt="About Image" />
            </div>
            <div
                className="col-span-1 items-center space-y-4"
                data-aos="zoom-in"
            >
                <h5 className="text-xl font-bold text-[#D3373C]">About Us</h5>
                <h2 className="font-bold text-4xl text-[#151515] lg:w-3/4 w-full">
                    World-Class Apparel Industry Solutions Since 2016
                </h2>
                <div className="space-y-2">
                    <p className="text-base text-[#737373] font-normal">
                        Since 2016, Vertex Mtbd Resources BD has been delivering
                        top-quality apparel industry solutions. We distribute
                        world-class machinery from leading manufacturers across
                        Europe and Asia, including industrial sewing and
                        automated machines, to boost productivity.
                    </p>
                    <p className="text-base text-[#737373] font-normal">
                        We are committed to offering competitive prices and
                        exceptional sales and after-sales service. We look
                        forward to continuing our partnership with you.
                    </p>
                </div>
                <Link
                    to={"/about"}
                    className="relative inline-flex items-center justify-start px-8 py-3 overflow-hidden font-semibold transition-all bg-[#D3373C] rounded-md group"
                >
                    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-100 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#EF1D23] rounded-md group-hover:mb-12 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-100 ease-in-out group-hover:text-white">
                        More About Us
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default About;
