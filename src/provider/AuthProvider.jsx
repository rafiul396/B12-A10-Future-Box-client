import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.init';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null)

    const createUserByGoogle = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
            const subscriber = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser)
                // setLoading(false)
            })
            return () => {
                subscriber();
            }
        }, [])

    const authInfo = {
        createUserByGoogle,
        user,
        setUser,
        logOut
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;