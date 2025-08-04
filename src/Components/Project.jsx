

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Project = () => {

  const [oneData,setoneData] = useState({})
  const {id} = useParams()


  const getProduct=()=>{

    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((data) => {
        setoneData(data.data);
        console.log(data)
      })
      .catch((err) => {
        console.log(err);
      });

  }

  useEffect(()=>{
    getProduct()
  },[])

  return (

    <>

<div className="description">
        <h1 className='text-center'>Description here...</h1>
        <div className="container des-container  mt-5">

            <img src={oneData.image} alt="" height={400} width={400}/>
            <div className="des-text" style={{width:"50%"}}>
            <h3>{oneData.title}</h3>
            <h3>{oneData.price}</h3>
            <h6>{oneData.category}</h6>
            <p>{oneData.description}</p>
            <button className='cart-btn'>Add Cart</button>
            </div>
 
        </div>
        </div>
    </>
    
  )
}

export default Project