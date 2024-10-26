import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

// Custom hook to access authentication context
const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;
