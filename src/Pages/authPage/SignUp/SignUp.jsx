import { useForm } from "react-hook-form";
import { CgFacebook } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import "./signUp.css";
import { useState } from "react";

const SignUp = () => {
    const [show, setShow] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-2 justify-center items-center lg:px-10 px-0 h-screen gap-5 max-w-7xl mx-auto">
            <div className="lg:col-span-3 grid-cols-1 lg:flex justify-center items-center lg:px-20 md:px-6 md:flex hidden">
                <img
                    src="/src/assets/login&SignUp/Frame.png"
                    alt="SignUp page Image"
                />
            </div>
            <div className="lg:col-span-2 col-span-1 lg:p-16 p-6 shadow-lg shadow-[#D3373C33] rounded-xl grid grid-cols-1">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                    <h3 className="text-center font-semibold text-[#444444] text-[40px] pb-4">
                        Sign Up
                    </h3>
                    <div className="space-y-2">
                        <label className="text-base font-semibold text-[#444444]">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="border border-[#E8E8E8] rounded-md p-2 w-full text-base text-[#444444] hover:border-[#D3373C] focus:border-[#D3373C] duration-300"
                            placeholder="Type here"
                            {...register("name", { required: true })}
                        />
                        {errors.name && (
                            <span className="text-xs font-bold text-red-500">
                                Name is required
                            </span>
                        )}
                    </div>
                    <div className="space-y-2">
                        <label className="text-base font-semibold text-[#444444]">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="border border-[#E8E8E8] rounded-md p-2 w-full text-base text-[#444444] hover:border-[#D3373C] focus:border-[#D3373C] duration-300"
                            placeholder="Type here"
                            {...register("email", {
                                required: true,
                                pattern:
                                    /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/,
                            })}
                        />
                        {errors.email && (
                            <span className="text-xs font-bold text-red-600">
                                Email is required and should be valid (no
                                uppercase)
                            </span>
                        )}
                    </div>
                    <div className="space-y-2">
                        <label className="text-base font-semibold text-[#444444]">
                            Phone no
                        </label>
                        <input
                            type="number"
                            name="number"
                            className="border border-[#E8E8E8] rounded-md p-2 w-full text-base text-[#444444] hover:border-[#D3373C] focus:border-[#D3373C] duration-300"
                            placeholder="phone no"
                            {...register("number", {
                                required: true,
                                pattern: /^(?:\+88|88)?(01[3-9]\d{8})$/,
                            })}
                            step="1"
                            min="0"
                            style={{ appearance: "textfield" }} // Optional inline style
                        />
                        {errors.number?.type === "required" && (
                            <span className="text-xs font-bold text-red-600">
                                Phone number is required
                            </span>
                        )}
                        {errors.number?.type === "pattern" && (
                            <span className="text-xs font-bold text-red-600">
                                Please enter a valid Bangladeshi phone number
                                (starts with +880 or 01)
                            </span>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="text-base font-semibold text-[#444444]">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="border border-[#E8E8E8] rounded-md p-2 w-full text-base text-[#444444] hover:border-[#D3373C] focus:border-[#D3373C] duration-300"
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern:
                                    /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                            })}
                            placeholder="enter your password"
                        />
                        {errors.password?.type === "required" && (
                            <span className="text-xs font-bold text-red-600">
                                password is required
                            </span>
                        )}
                        {errors.password?.type === "minLength" && (
                            <span className="text-xs font-bold text-red-600">
                                Password must be 6 characters or longer
                            </span>
                        )}
                        {errors.password?.type === "maxLength" && (
                            <span className="text-xs font-bold text-red-600">
                                Password less then 20 characters
                            </span>
                        )}
                        {errors.password?.type === "pattern" && (
                            <span className="text-xs font-bold text-red-600">
                                Password must be one uppercase, one lowercase,
                                one number and one special characters
                            </span>
                        )}
                    </div>
                    <div className="w-full my-4">
                        <button className="relative w-full inline-flex items-center justify-start px-8 py-2 overflow-hidden font-semibold transition-all bg-[#D3373C] rounded-md group">
                            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                            </span>
                            <span className="absolute -bottom-2 left-0 w-full h-full transition-all duration-100 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#EF1D23] rounded-md group-hover:mb-12 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-center text-white transition-colors duration-100 ease-in-out group-hover:text-white">
                                Sign Up
                            </span>
                        </button>
                    </div>
                </form>
                {/* signIn Google and facebook */}
                <div className="py-4 space-y-4">
                    <p className="font-medium text-[18px] text-[#444444] text-center">
                        Or Sign Up with
                    </p>
                    <div className="flex justify-center items-center gap-4">
                        <a
                            href="https://www.facebook.com/profile.php?id=61566573161860"
                            target="_blank"
                            className="bg-[#F5F5F8] p-3 rounded-full text-[#3B5998] hover:bg-[#D3D3D3]  duration-300 transition-all"
                        >
                            <CgFacebook className="text-2xl" />
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=61566573161860"
                            target="_blank"
                            className="bg-[#F5F5F8] p-3 rounded-full hover:bg-[#D3D3D3] duration-300 transition-all"
                        >
                            <FcGoogle className="text-2xl" />
                        </a>
                    </div>
                </div>
                {/* new user */}
                <p className="text-[#737373] font-normal text-base text-center">
                    <small>Already have an account?</small>{" "}
                    <Link className="text-[#D3373C] font-bold" to={"/login"}>
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
