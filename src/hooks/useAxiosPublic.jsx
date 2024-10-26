import axios from "axios";

// Create an Axios instance with a base URL from environment variables
const axiosPublic = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
});

// Custom hook that returns the Axios instance
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
