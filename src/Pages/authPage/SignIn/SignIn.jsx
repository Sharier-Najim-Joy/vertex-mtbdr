import { useForm } from "react-hook-form";
import { CgFacebook } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import useSweetAlert from "../../../hooks/useSweetAlert";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const SignIn = () => {
    const { signIn, googleAuth } = useAuth();
    const [show, setShow] = useState(false);
    const Toast = useSweetAlert();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        signIn(data.email, data.password)
            .then((result) => {
                console.log(result.user);
                Toast.fire({
                    icon: "success",
                    title: "Signed in successfully",
                });
                navigate("/", { replace: true });
            })
            .catch((err) => {
                console.error(err);
                Toast.fire({
                    icon: "error",
                    title: "Invalid email or password",
                });
            });
    };

    const handleGoogleSignIn = () => {
        googleAuth().then((result) => {
            console.log(result.user);
            const userInfo = {
                name: result.user.displayName,
                email: result.user.email,
                photoURL: result.user.photoURL,
            };
            console.log(userInfo);
            axiosPublic.post("/users", userInfo).then((res) => {
                console.log(res.data);

                // navigate
                navigate(from, { replace: true });

                // success alert
                Toast.fire({
                    icon: "success",
                    title: "Signed in successfully",
                });
            });
        });
    };

    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-2 justify-center items-center lg:px-10 px-0 h-screen gap-5 max-w-7xl mx-auto">
            <div className="lg:col-span-3 hidden lg:flex justify-center items-center lg:px-20 md:px-6">
                <img
                    src="/src/assets/login&SignUp/Frame.png"
                    alt="Login page Image"
                />
            </div>
            <div className="lg:col-span-2 col-span-1 p-16 shadow-lg shadow-[#D3373C33] rounded-xl grid grid-cols-1">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                    <h3 className="text-center font-semibold text-[#444444] text-[40px] pb-4">
                        Login
                    </h3>
                    <div className="space-y-2">
                        <label className="text-base font-semibold text-[#444444]">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="border border-[#E8E8E8] rounded-md p-2 w-full text-base text-[#444444] hover:border-[#D3373C] focus:border-[#D3373C] duration-300"
                            placeholder="Type here"
                            {...register("email", { required: true })}
                        />
                        {errors.email && (
                            <span className="text-sm font-bold text-red-600">
                                Email is required.
                            </span>
                        )}
                    </div>
                    <div className="space-y-2">
                        <label className="text-base font-semibold text-[#444444]">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={show ? "text" : "password"}
                                name="password"
                                className="border border-[#E8E8E8] rounded-md p-2 w-full text-base text-[#444444] hover:border-[#D3373C] focus:border-[#D3373C] duration-300"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                })}
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={() => setShow(!show)}
                                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                            >
                                {show ? "Hide" : "Show"}
                            </button>
                        </div>
                        {errors.password?.type === "required" && (
                            <span className="text-sm font-bold text-red-600">
                                Password is required.
                            </span>
                        )}
                    </div>
                    <div className="w-full my-4">
                        <button className="relative w-full inline-flex items-center justify-start px-8 py-2 overflow-hidden font-semibold transition-all bg-[#D3373C] rounded-md group">
                            <span className="relative w-full text-center text-white transition-colors duration-100 ease-in-out group-hover:text-white">
                                Login
                            </span>
                        </button>
                    </div>
                </form>
                {/* Google SignIn */}
                <div className="py-4 space-y-4">
                    <p className="font-medium text-[18px] text-[#444444] text-center">
                        Or Sign In with
                    </p>
                    <div className="flex justify-center items-center gap-4">
                        <button
                            onClick={handleGoogleSignIn}
                            className="bg-[#F5F5F8] p-3 rounded-full hover:bg-[#D3D3D3] transition-all"
                        >
                            <FcGoogle className="text-2xl" />
                        </button>
                        <button className="bg-[#F5F5F8] p-3 rounded-full hover:bg-[#D3D3D3] transition-all">
                            <CgFacebook className="text-2xl text-[#3B5998]" />
                        </button>
                    </div>
                </div>
                <p className="text-[#737373] font-normal text-base text-center">
                    <small>You have no account? Please</small>{" "}
                    <Link className="text-[#D3373C] font-bold" to={"/signUp"}>
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
