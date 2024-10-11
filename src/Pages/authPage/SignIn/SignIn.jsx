import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="flex justify-center items-center h-screen gap-8 max-w-7xl mx-auto border-2">
            <div className="flex justify-center items-center p-10">
                <img
                    src="/src/assets/login&SignUp/Frame.png"
                    alt="SignUp page Image"
                    className="w-[80%]"
                />
            </div>
            <div className="p-16 border-2">
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
                            <span className="text-sm font-bold text-red-500">
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
                            <span className="text-sm font-bold text-red-600">
                                Email is required and should be valid (no
                                uppercase)
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
                            <span className="text-sm font-bold text-red-600">
                                password is required
                            </span>
                        )}
                        {errors.password?.type === "minLength" && (
                            <span className="text-sm font-bold text-red-600">
                                Password must be 6 characters or longer
                            </span>
                        )}
                        {errors.password?.type === "maxLength" && (
                            <span className="text-sm font-bold text-red-600">
                                Password less then 20 characters
                            </span>
                        )}
                        {errors.password?.type === "pattern" && (
                            <span className="text-sm font-bold text-red-600">
                                Password must be one uppercase, one lowercase,
                                one number and one special characters
                            </span>
                        )}
                    </div>
                    <div className="w-full my-4">
                        <button className="text-center px-7 pt-3 w-full pb-2 relative rounded-lg group font-bold overflow-hidden border-b-4 border-[#D1A054] text-white bg-[#D1A054] inline-block uppercase">
                            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-white group-hover:h-full"></span>
                            <span className="relative group-hover:text-[#D1A054]">
                                Sign Up
                            </span>
                        </button>
                    </div>
                    {/* new user */}
                    <p className="text-[#D1A054] font-medium text-base text-center">
                        <small>Already registered?</small>{" "}
                        <Link to={"/login"}>Go to Log in</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
