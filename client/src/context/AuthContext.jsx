import React, {createContext, useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";


export const AuthContext = createContext();



const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);

    useEffect(()=>{
        if (token){
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }else{
            delete axiosInstance.defaults.headers.common['Authorization'];
        }
    }, [token])

    const login= (newToken) => {
        localStorage.setItem('token', newToken)
        setToken(token)
    }


    const logout = () => {
        localStorage.removeItem('token')
        setToken(null)
    }

    const isAuthenticated = !!token

    return (
        <AuthContext.Provider value={{token, login, logout, isAuthenticated}}>
        {children}
        </AuthContext.Provider>
    )



}


export default AuthProvider