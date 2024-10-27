import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import loadingGif from "../assets/images/loading/loading.gif";
import useAdmin from "../hooks/useAdmin";

const AdminRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    console.log(location, location.pathname);

    if (loading || isAdminLoading) {
        return (
            <>
                <div className=" md:w-1/3 w-full h-screen  mx-auto">
                    <div className="flex h-screen justify-center items-center">
                        <img
                            className="md:w-[40%] w-[50%]"
                            src={loadingGif}
                            alt=""
                        />
                    </div>
                </div>
            </>
        );
    }
    if (!user && isAdmin) {
        return (
            <Navigate to="/login" state={{ from: location }} replace={true} />
        );
    }
    return children;
};

export default AdminRoutes;
