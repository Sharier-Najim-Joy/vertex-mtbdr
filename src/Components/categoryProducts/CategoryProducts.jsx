import { IoArrowForward } from "react-icons/io5";
import SectionTitle from "../Shared/SectionTitle";
import { Link } from "react-router-dom";
import useAllProducts from "../../hooks/useAllProducts";

const CategoryProducts = () => {
    const [products, refetch, isItemLoading] = useAllProducts();

    // Define the categories you want to filter by
    const categories = [
        {
            name: "Samwoo Boiler",
            image: "/src/assets/CategoryLogo/SamwooBoiler.png",
        },
        { name: "Typical", image: "/src/assets/CategoryLogo/Typical.jpg" },
        {
            name: "Jam International",
            image: "/src/assets/CategoryLogo/Jam.png",
        },
        { name: "BKS Bukangs", image: "/src/assets/CategoryLogo/BKS.png" },
        {
            name: "Kansai Special",
            image: "/src/assets/CategoryLogo/KansaiSpecial.png",
        },
        { name: "Martin Group", image: "/src/assets/CategoryLogo/marine.png" },
        { name: "Eastman", image: "/src/assets/CategoryLogo/Eastman.png" },
        { name: "Yamato", image: "/src/assets/CategoryLogo/Yamato.png" },
        { name: "Inhyun Kostar", image: "/src/assets/CategoryLogo/Inhyun.png" },
        { name: "Cutex", image: "/src/assets/CategoryLogo/Cutex.png" },
        { name: "Veit", image: "/src/assets/CategoryLogo/Veit.png" },
        { name: "Focus", image: "/src/assets/CategoryLogo/Focus.png" },
    ];

    // Check if products are still loading
    if (isItemLoading) {
        return <div>Loading...</div>; // You can replace this with a loading spinner if desired
    }

    return (
        <div className="my-10">
            <SectionTitle
                data-aos="fade-down"
                subHeading={"Categories"}
                heading={"Our Product Category"}
                description={
                    "Offering a wide range of garment machineries, including cutting, sewing, finishing, embroidery, and printing equipment for efficient apparel production."
                }
            />

            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 justify-center items-center my-10 gap-12">
                {categories.map((category) => {
                    // Filter products based on the category name
                    const filteredProducts = products.filter(
                        (product) => product.category === category.name
                    );

                    return (
                        <Link
                            data-aos="fade-up"
                            to={`/category/${category.name}`} // Use category.name to match the URL structure
                            key={category.name}
                            className="border-t-2 border-[#D3373C] px-6 pt-10 pb-4 rounded-lg space-y-6 group shadow shadow-[#D3373C33] hover:shadow-lg hover:shadow-[#D3373C40] duration-300"
                        >
                            <div className="flex justify-center items-center">
                                <img src={category.image} alt={category.name} />
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-[#D3373C] text-base font-bold tracking-wider">
                                    See All ({filteredProducts.length}){" "}
                                    {/* Display number of products in category */}
                                </p>
                                <IoArrowForward className="text-xl text-[#D3373C]" />
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default CategoryProducts;
