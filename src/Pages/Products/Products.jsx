import { IoArrowForward } from "react-icons/io5";
import useAllProducts from "../../hooks/useAllProducts";
import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState
import loadingGif from "../../assets/loading/loading.gif";
const Products = () => {
    const [products, isItemLoading] = useAllProducts();
    const [searchQuery, setSearchQuery] = useState(""); // State for search query
    const [suggestions, setSuggestions] = useState([]); // State for search suggestions
    const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products
    const [noMatch, setNoMatch] = useState(false); // State for no matching products

    // Initially, show all products
    const displayedProducts = searchQuery ? filteredProducts : products;

    // Function to handle input change
    const handleInputChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        // Update suggestions based on input
        if (query) {
            const filteredSuggestions = products.filter((product) =>
                product.title.toLowerCase().includes(query.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
            setNoMatch(false); // Reset no match state when typing
        } else {
            setSuggestions([]);
            setFilteredProducts([]); // Clear filtered products
            setNoMatch(false); // Reset no match state when query is empty
        }
    };

    // Handle search button click
    const handleSearch = () => {
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filtered); // Update filtered products
        setSuggestions([]); // Clear suggestions

        if (filtered.length === 0) {
            setNoMatch(true); // Set no match state if no products found
        } else {
            setNoMatch(false); // Reset no match state if products found
        }
    };

    // Handle key down event for the input
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
            handleInputChange(); // Call search function on Enter
        }
    };

    return (
        <div className="my-6">
            <div
                className="relative bg-cover bg-center w-full h-[30vh] rounded-xl"
                style={{
                    backgroundImage: `url('/src/assets/AboutImg/AboutBannerImg.png')`,
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-[#00000080] rounded-xl flex justify-start items-center">
                    <h2 className="text-5xl font-bold text-[#FFFFFF] lg:ml-20 ml-10 animate__animated animate__bounce">
                        Products
                    </h2>
                </div>
            </div>

            {/* Search Bar */}
            <div className="my-4 flex justify-center relative">
                <input
                    type="text"
                    placeholder="Search products..."
                    onKeyDown={handleKeyDown}
                    value={searchQuery}
                    onChange={handleInputChange} // Update search query and suggestions
                    className="px-4 py-2 rounded-l border border-gray-300 focus:outline-none focus:ring focus:ring-[#D3373C] w-1/2"
                />
                <button
                    onClick={handleSearch} // Call search on button click
                    className="px-4 py-2 bg-[#D3373C] text-white rounded-r hover:bg-[#B72D31] transition duration-300"
                >
                    Search
                </button>

                {/* Suggestions Dropdown */}
                {suggestions.length > 0 && (
                    <div className="absolute z-10 w-1/2 mt-1 bg-white border border-gray-300 rounded shadow-lg">
                        {suggestions.map((product) => (
                            <div
                                key={product._id}
                                onClick={() => {
                                    setFilteredProducts([product]); // Set filtered products to only the selected suggestion
                                    setSearchQuery(product.title); // Set input to the selected suggestion
                                    setSuggestions([]); // Clear suggestions
                                    setNoMatch(false); // Reset no match state
                                }}
                                className="px-4 py-2 hover:bg-[#D3373C] hover:text-white cursor-pointer"
                            >
                                {product.title}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <>
                {/* Display No Match Message */}
                {noMatch && !searchQuery ? null : noMatch ? (
                    <div className="flex justify-center items-center w-full my-4">
                        <p className="text-lg text-gray-500">
                            No products match your search.
                        </p>
                    </div>
                ) : null}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-stretch gap-6 my-10">
                    {displayedProducts.length > 0 ? (
                        displayedProducts.map((product) => (
                            <Link
                                data-aos="fade-up"
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
                        <div className="flex justify-center items-center w-full my-4">
                            <p className="text-lg text-gray-500">
                                No products found.
                            </p>
                        </div>
                    )}
                </div>
            </>
        </div>
    );
};

export default Products;
