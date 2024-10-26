import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: allUsers, refetch } = useQuery({
        queryKey: ["allUsers"],
        queryFn: async () => {
            const response = await axiosSecure.get("/allUsers");
            return response.data;
        },
    });
    return [allUsers, refetch];
};

export default useAllUsers;
