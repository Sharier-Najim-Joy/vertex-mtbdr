import { IoArrowForward } from "react-icons/io5";
import SectionTitle from "../Shared/SectionTitle";
import { Link } from "react-router-dom";
import useAllProducts from "../../hooks/useAllProducts";

import category1 from "../../assets/images/CategoryLogo/SamwooBoiler.png";
import category2 from "../../assets/images/CategoryLogo/Typical.jpg";
import category3 from "../../assets/images/CategoryLogo/Jam.png";
import category4 from "../../assets/images/CategoryLogo/BKS.png";
import category5 from "../../assets/images/CategoryLogo/KansaiSpecial.png";
import category6 from "../../assets/images/CategoryLogo//marine.png";
import category7 from "../../assets/images/CategoryLogo/Eastman.png";
import category8 from "../../assets/images/CategoryLogo/Yamato.png";
import category9 from "../../assets/images/CategoryLogo/Inhyun.png";
import category10 from "../../assets/images/CategoryLogo/Cutex.png";
import category11 from "../../assets/images/CategoryLogo/Veit.png";
import category12 from "../../assets/images/CategoryLogo/Focus.png";

const CategoryProducts = () => {
    const [products, refetch, isItemLoading] = useAllProducts();

    // Define the categories you want to filter by
    const categories = [
        {
            name: "Samwoo Boiler",
            image: `${category1}`,
        },
        {
            name: "Typical",
            image: `${category2}`,
        },
        {
            name: "Jam International",
            image: `${category3}`,
        },
        {
            name: "BKS Bukangs",
            image: `${category4}`,
        },
        {
            name: "Kansai Special",
            image: `${category5}`,
        },
        {
            name: "Martin Group",
            image: `${category6}`,
        },
        {
            name: "Eastman",
            image: `${category7}`,
        },
        { name: "Yamato", image: `${category8}` },
        {
            name: "Inhyun Kostar",
            image: `${category9}`,
        },
        { name: "Cutex", image: `${category10}` },
        { name: "Veit", image: `${category11}` },
        { name: "Focus", image: `${category12}` },
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
