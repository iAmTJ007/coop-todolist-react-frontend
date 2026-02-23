import { createContext,useState } from "react";
import API from "../api/axios";

export const AuthContext=createContext();

export function AuthProvider({children}){
    const [user,setUser]=useState(localStorage.getItem("user"));

    const login = async (data) => {
        const res = await API.post("/auth/login", data);
        if(!res.data.token)throw new Error("Invalid Login Credentials");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", data.username);
        setUser(data.username);
    };
    const register=async(data)=>{
        const res= await API.post("/auth/register",data);
        if(!res)throw new Error("Couldnt Register");
    };
    const logout=()=>{
        localStorage.clear();
        setUser(null);
    };
    return(
        <AuthContext.Provider value={{user,login,register,logout}}>
            {children}
        </AuthContext.Provider>
    );
}