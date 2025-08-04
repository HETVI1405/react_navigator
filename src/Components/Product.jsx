

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Product() {

    const [data, setdata] = useState([]);
    const [load, setload] = useState(true);
    const [error, seterror] = useState(null);
  


    const fetchUserData = () => {
        setload(false);
        axios.get("https://fakestoreapi.com/products")
            // .then((res) => res.json())
            .then((res) => {
                setload(true);
                setdata(res.data);
            })
            .catch((err) => {
                console.log(err);
                seterror(true);
                setload(true);
            });
    }

    useEffect(() => {
        fetchUserData();
    }, []);



    return load == false ? (
        "loading..."
    ) : error == true ? (
        "somthing went wrong!"
    ) : (

        <>
            <h1 className="text-center">Products Here...</h1>
            <div className="products">

                    {

                        data.map((el, i) => (

                            <div className="product" key={el.id}>
                                <Card style={{ backgroundColor: "white", border: "none" }}>

                                <Link to={`/project/${el.id}`}>
                                <Card.Img variant="top" src={el.image} style={{height:"150px",width:"150px"}} />
                                
                                </Link>

                                    
                                    <Card.Body>
                                        <Card.Title>{el.title}</Card.Title>
                                        <Card.Text>
                                            
                                            <strong>Category :</strong>{el.category}
                                            <br /><br />
                                            <b>Price : </b>${el.price}
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>

                        ))
                    }
  
            </div>
        </>

    )
}

export default Product