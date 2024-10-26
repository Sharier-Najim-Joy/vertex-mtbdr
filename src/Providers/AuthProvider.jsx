import { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const axiosPublic = useAxiosPublic();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        });
    };

    const googleAuth = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () => {
        setLoading(true);
        signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("observed", currentUser);
            setUser(currentUser);
            if (currentUser) {
                const userInfo = { email: currentUser.email };
                axiosPublic
                    .post("/jwt", userInfo, {
                        withCredentials: true, // Ensure cookies are included in the response
                    })
                    .then((res) => {
                        console.log(
                            "Token received and stored in cookies",
                            res.data
                        );
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.error("Error fetching token", error);
                        setLoading(false);
                    });
            } else {
                // No need to remove the token manually as it's stored in cookies
                setLoading(false);
            }
        });

        return () => {
            unSubscribe();
        };
    }, [axiosPublic]);

    const authInfo = {
        createUser,
        signIn,
        logOut,
        googleAuth,
        loading,
        user,
        updateUserProfile,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
