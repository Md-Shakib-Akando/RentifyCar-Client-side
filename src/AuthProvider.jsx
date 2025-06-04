import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase.config';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const provider = new GoogleAuthProvider();
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const googleLogIn=()=>{
        return signInWithPopup(auth,provider);
    }
     useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unSubscribe();
        };
    }, []);
    const userInfo={
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        logIn,
        googleLogIn,
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;