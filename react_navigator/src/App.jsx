import { useState } from 'react'
import './index.css'
import Navbar from './Components/Navbar'
import AllRoutes from './Routing/AllRoutes'

function App() {

  return (
   <div className='container'>

    <Navbar />

    <hr />

    <AllRoutes />
    
   </div>
  )
}

export default App