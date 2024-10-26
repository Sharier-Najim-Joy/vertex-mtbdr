import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/authPage/SignUp/SignUp";
import SignIn from "../Pages/authPage/SignIn/SignIn";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Products from "../Pages/Products/Products";
import CategoryWiseProduct from "../Components/CategoryWiseProduct/CategoryWiseProduct";
import AdminRoutes from "./AdminRoutes";
import AdminHome from "../Pages/Dashboard/AdminHome";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers";
import ManageProducts from "../Pages/Dashboard/ManageProducts";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import UpdateProducts from "../Components/UpdateProducts";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <AboutUs />,
            },
            {
                path: "/allProducts",
                element: <Products />,
            },
            {
                path: "/products/:id",
                element: <ProductDetails />,
            },
            {
                path: "/category/:categoryName",
                element: <CategoryWiseProduct />,
            },
        ],
    },
    {
        path: "dashboard",
        element: (
            <AdminRoutes>
                <Dashboard />
            </AdminRoutes>
        ),
        children: [
            // admin related routes
            {
                path: "adminHome",
                element: (
                    <AdminRoutes>
                        <AdminHome />
                    </AdminRoutes>
                ),
            },
            {
                path: "allUsers",
                element: (
                    <AdminRoutes>
                        <AllUsers />
                    </AdminRoutes>
                ),
            },
            {
                path: "addProduct",
                element: (
                    <AdminRoutes>
                        <AddProduct />
                    </AdminRoutes>
                ),
            },
            {
                path: "manageProducts",
                element: (
                    <AdminRoutes>
                        <ManageProducts />
                    </AdminRoutes>
                ),
            },
            {
                path: "updateProduct/:id",
                element: (
                    <AdminRoutes>
                        <UpdateProducts />
                    </AdminRoutes>
                ),
            },
        ],
    },
    {
        path: "/login",
        element: <SignIn />,
    },
    {
        path: "/signUp",
        element: <SignUp />,
    },
]);

export default router;
