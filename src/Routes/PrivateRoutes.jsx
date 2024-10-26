import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    console.log(location, location.pathname);

    if (loading) {
        return (
            <>
                <div className=" md:w-1/3 w-full h-screen  mx-auto">
                    <div className="flex h-screen justify-center items-center">
                        <h3 className="text-3xl">Loading.........</h3>
                    </div>
                </div>
            </>
        );
    }
    if (!user) {
        return (
            <Navigate to="/login" state={{ from: location }} replace={true} />
        );
    }
    return children;
};

// PrivateRoutes.propTypes = {
//     children: PropTypes.node,
// }

export default PrivateRoute;
