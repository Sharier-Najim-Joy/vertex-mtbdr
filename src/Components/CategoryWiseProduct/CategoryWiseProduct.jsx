import { Link, useParams } from "react-router-dom";
import useAllProducts from "../../hooks/useAllProducts";
import { IoArrowForward } from "react-icons/io5";
import loadingGif from "../../assets/loading/loading.gif";
const CategoryWiseProduct = () => {
    const { categoryName } = useParams(); // Get the category name from the URL
    const [products, refetch, isItemLoading] = useAllProducts(); // Fetch all products

    // Filter products based on the category name
    const filteredProducts = products.filter(
        (product) => product.category === categoryName
    );

    if (isItemLoading) {
        return (
            <div className=" md:w-1/3 w-full h-screen  mx-auto">
                <div className="flex h-screen justify-center items-center">
                    <img
                        className="md:w-[40%] w-[50%]"
                        src={loadingGif}
                        alt=""
                    />
                </div>
            </div>
        ); // You can replace this with a loading spinner if desired
    }

    return (
        <div>
            <h3 className="text-2xl font-bold mb-4">
                Products in {categoryName}
            </h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-stretch gap-6 my-10">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Link
                            key={product._id}
                            to={`/products/${product._id}`}
                            className="col-span-1 flex flex-col pb-4 rounded-xl space-y-2 group shadow shadow-[#D3373C33] hover:shadow-lg hover:shadow-[#D3373C40] duration-300 h-full"
                        >
                            {/* Image Section */}
                            <div className="flex justify-center items-center overflow-hidden rounded-t-xl">
                                <img
                                    src={product.image}
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
                    ))
                ) : (
                    <p>No products found in this category.</p>
                )}
            </div>
        </div>
    );
};

export default CategoryWiseProduct;
