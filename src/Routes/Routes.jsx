import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/authPage/SignUp/SignUp";
import SignIn from "../Pages/authPage/SignIn/SignIn";
import AboutUs from "../Pages/AboutUs/AboutUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <AboutUs />,
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
