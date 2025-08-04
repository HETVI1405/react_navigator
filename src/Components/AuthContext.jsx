import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()


export function AuthContextProvider({children}){

const [token , settoken] = useState(null)

    useEffect(() => {
        const savedToken = localStorage.getItem('token')
        if (savedToken) {
            settoken(savedToken)
        }
      }, [])

    const handleLogin = (value)=>{
        settoken(value)
    }



    return <AuthContext.Provider value={{token,handleLogin}}>
        {children}
    </AuthContext.Provider>

}