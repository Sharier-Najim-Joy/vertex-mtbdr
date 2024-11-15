import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./signUp.css";
import { useContext, useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { AuthContext } from "../../../Providers/AuthProvider";
import useSweetAlert from "../../../hooks/useSweetAlert";
import signInImg from "../../../assets/images/login&SignUp/Frame.png";

const SignUp = () => {
    const [show, setShow] = useState(false);
    const [password, setPassword] = useState("");
    const Toast = useSweetAlert();
    const axiosPublic = useAxiosPublic();
    const { createUser, googleAuth, updateUserProfile } =
        useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                updateUserProfile(data.name)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            number: data.number,
                            password: data.password,
                        };

                        // Send user info to the backend
                        axiosPublic.post("/users", userInfo).then((res) => {
                            if (res.data.insertedId) {
                                Toast.fire({
                                    icon: "success",
                                    title: "Sign Up successfully",
                                });
                                navigate("/");
                            }
                        });
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                const signUpError = error.message;
                console.log(signUpError);
                Toast.fire({
                    icon: "warning",
                    title: "Account Already Used",
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
            <div className="lg:col-span-3 grid-cols-1 lg:flex justify-center items-center lg:px-20 md:px-6 md:flex hidden">
                <img src={signInImg} alt="SignUp page Image" />
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
                        <div className="relative">
                            <input
                                type={show ? "text" : "password"} // Password field show/hide toggle
                                name="password"
                                className="border border-[#E8E8E8] rounded-md p-2 w-full text-base text-[#444444] hover:border-[#D3373C] focus:border-[#D3373C] duration-300"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern:
                                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                })}
                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)} // Set password state
                            />
                            {/* Eye icon will be shown only if user typed something */}
                            {password.length > 0 && (
                                <span
                                    className="absolute right-3 top-2 cursor-pointer"
                                    onClick={() => setShow(!show)}
                                >
                                    {show ? (
                                        <IoIosEyeOff className="text-2xl text-[#444444]" />
                                    ) : (
                                        <IoIosEye className="text-2xl text-[#444444]" />
                                    )}
                                </span>
                            )}
                        </div>

                        {/* Error Messages */}
                        {errors.password?.type === "required" && (
                            <span className="text-xs font-bold text-red-600">
                                Password is required
                            </span>
                        )}
                        {errors.password?.type === "minLength" && (
                            <span className="text-xs font-bold text-red-600">
                                Password must be 6 characters or longer
                            </span>
                        )}
                        {errors.password?.type === "maxLength" && (
                            <span className="text-xs font-bold text-red-600">
                                Password must be less than 20 characters
                            </span>
                        )}
                        {errors.password?.type === "pattern" && (
                            <span className="text-xs font-bold text-red-600">
                                Password must contain one uppercase letter, one
                                lowercase letter, one number, and one special
                                character
                            </span>
                        )}
                    </div>

                    <div className="w-full my-4">
                        <button className="relative w-full inline-flex items-center justify-start px-8 py-2 overflow-hidden font-semibold transition-all bg-[#D3373C] rounded-md group">
                            <span className="relative w-full text-center text-white transition-colors duration-100 ease-in-out group-hover:text-white">
                                Sign Up
                            </span>
                        </button>
                    </div>
                </form>

                {/* Google SignIn */}
                <div className="py-4 space-y-4">
                    <p className="font-medium text-[18px] text-[#444444] text-center">
                        Or Sign Up with
                    </p>
                    <div className="flex justify-center items-center gap-4">
                        <button
                            onClick={handleGoogleSignIn}
                            className="bg-[#F5F5F8] p-3 rounded-full hover:bg-[#D3D3D3] transition-all"
                        >
                            <FcGoogle className="text-2xl" />
                        </button>
                    </div>
                </div>
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
