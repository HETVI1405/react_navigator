
import React from 'react'
import Home from './Home'
import Product from './Product'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import PrivatePage from './PrivatePage'
import About from './About'
import Project from './Project'



const AllRoute = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />  
                <Route path="/Login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/project/:id" element={<Project />} />
                <Route path="/Product" element={

                    <PrivatePage>
                    <Product />
                    </PrivatePage>
                                    
                }/>
                
            </Routes>

        </div>
    )
}

export default AllRoute