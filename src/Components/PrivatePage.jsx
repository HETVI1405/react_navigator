
import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './AuthContext'

const PrivatePage = ({children}) => {
    
 const {token} = useContext(AuthContext)


    if (!token) {
        return <Navigate to = {"/Login"}/>
    }
    else{
       return children;
       
    }
}

export default PrivatePage