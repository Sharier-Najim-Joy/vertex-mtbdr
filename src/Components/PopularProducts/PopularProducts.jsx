import { IoArrowForward } from "react-icons/io5";
import SectionTitle from "../Shared/SectionTitle";
import { Link } from "react-router-dom";
import useAllProducts from "../../hooks/useAllProducts";
import loadingGif from "../../assets/images/loading/loading.gif";
const PopularProducts = () => {
    const [products, isItemLoading] = useAllProducts();

    // Filter the products to show only the popular ones
    const popularProducts = products.filter(
        (product) => product.popularCategory === "popular"
    );
    console.log(popularProducts);

    // if (isItemLoading) {
    //     return (
    //         <div className=" md:w-1/3 w-full h-screen  mx-auto">
    //             <div className="flex h-screen justify-center items-center">
    //                 <img
    //                     className="md:w-[40%] w-[50%]"
    //                     src={loadingGif}
    //                     alt=""
    //                 />
    //             </div>
    //         </div>
    //     ); // Or you can add a spinner here
    // }

    return (
        <div className="my-20">
            <SectionTitle
                subHeading={"Products"}
                data-aos="fade-up"
                heading={"Our Popular Products"}
                description={
                    "Our popular products feature sleek, modern designs and advanced functionality, including sewing machines and precision tools"
                }
            />

            <div
                className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-stretch gap-6"
                data-aos="fade-down"
            >
                {popularProducts.map((product, index) => (
                    <Link
                        key={index} // Assuming each product has a unique `id`
                        to={`/products/${product._id}`}
                        className="flex flex-col pb-4 rounded-xl space-y-2 group shadow shadow-[#D3373C33] hover:shadow-lg hover:shadow-[#D3373C40] duration-300 h-full"
                    >
                        {/* Image Section */}
                        <div className="flex justify-center items-center overflow-hidden rounded-t-xl">
                            <img
                                src={product.image} // Use product's image from the fetched data
                                alt={product.title}
                                className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="px-6 py-4 flex flex-col justify-between gap-3 items-start flex-grow">
                            <h3 className="text-base text-[#444444] font-bold capitalize">
                                {product.title}
                            </h3>
                            <p className="text-sm text-[#444444] font-normal capitalize mb-2">
                                {product.shortDescription}
                            </p>
                            <div className="flex justify-between items-center w-full mt-auto">
                                <p className="text-[#D3373C] text-base font-bold tracking-wider">
                                    More Details
                                </p>
                                <IoArrowForward className="text-xl text-[#D3373C]" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PopularProducts;
