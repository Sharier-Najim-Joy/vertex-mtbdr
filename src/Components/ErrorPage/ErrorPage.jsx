import { Link } from "react-router-dom";
import errorImg from "../../assets/images/ErrorPage/Error.png";

const ErrorPage = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className="space-y-2 text-center flex justify-center items-center flex-col">
                <img
                    src={errorImg}
                    alt="Error"
                    className="max-w-xs md:max-w-md lg:max-w-lg h-auto"
                />
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
                    Page is under maintenance
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                    We are currently performing maintenance. Please check back
                    later.
                </p>
                <Link
                    to={"/"}
                    className="relative inline-flex items-center justify-start px-8 py-2 overflow-hidden font-semibold transition-all bg-[#D3373C] rounded-md group"
                >
                    <span className="relative w-full text-center text-white transition-colors duration-100 ease-in-out group-hover:text-white">
                        Please Back to Home
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
