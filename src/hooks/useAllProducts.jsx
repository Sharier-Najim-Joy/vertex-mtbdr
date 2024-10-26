import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllProducts = () => {
    const axiosPublic = useAxiosPublic();
    const {
        data: products = [],
        refetch,
        isPending: isItemLoading,
    } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await axiosPublic.get("/products");
            return res.data;
        },
    });

    return [products, refetch, isItemLoading];
};

export default useAllProducts;
