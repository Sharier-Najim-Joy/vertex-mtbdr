import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserInfo = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: users, refetch } = useQuery({
        queryKey: ["users", user?.email],
        queryFn: async () => {
            if (user) {
                const res = await axiosSecure.get(`users/${user?.email}`);
                return res.data;
            }
        },
    });
    return [users, refetch];
};

export default useUserInfo;
