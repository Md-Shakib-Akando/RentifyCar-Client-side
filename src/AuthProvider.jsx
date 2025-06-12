import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, getIdToken, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from './firebase.config';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogIn = () => {
        return signInWithPopup(auth, provider);
    }
    const LogOut = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            if (currentUser) {
                getIdToken(currentUser)
                    .then((idToken) => {
                        setToken(idToken); 
                    })
                    .catch((error) => {
                        console.log(error);
                        setToken(null);
                    });
            } else {
                setToken(null);
            }
        });
        return () => {
            unSubscribe();
        };
    }, []);
    const userInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        logIn,
        googleLogIn,
        LogOut,
        token,
        setToken,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;