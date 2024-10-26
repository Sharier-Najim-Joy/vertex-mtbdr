import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";

export const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`, // API URL
    withCredentials: true, // Allow sending cookies
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth(); // Call useAuth as a function

    useEffect(() => {
        const reqInterceptor = axiosSecure.interceptors.request.use(
            (config) => {
                return config; // Cookie will be sent automatically
            }
        );

        const resInterceptor = axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                const status = error.response ? error.response.status : null;
                if (status === 401 || status === 403) {
                    await logOut(); // Ensure async log out completes
                    navigate("/login"); // Redirect to login
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosSecure.interceptors.request.eject(reqInterceptor);
            axiosSecure.interceptors.response.eject(resInterceptor);
        };
    }, [logOut, navigate]);

    return axiosSecure;
};

export default useAxiosSecure;
