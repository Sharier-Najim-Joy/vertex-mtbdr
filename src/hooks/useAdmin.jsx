import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, "isAdmin"],
        enabled: !loading && !!user?.email, // Ensure user is not loading and has an email
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(
                    `/users/admin/${user?.email}`,
                    {
                        withCredentials: true, // Ensure cookies are sent with the request
                    }
                );
                return res.data?.admin;
            } catch (error) {
                console.error("Error fetching admin status:", error);
                throw error; // Propagate the error to react-query
            }
        },
        onError: (error) => {
            console.error("Error fetching admin status:", error);
        },
    });

    return [isAdmin, isAdminLoading];
};

export default useAdmin;
