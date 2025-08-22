import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

function Description() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  async function fetchDescription() {
    try {
      const res = await axios.get(`http://localhost:3000/product/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchDescription();
  }, [id]);

  if (!product) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <Card style={{ width: "28rem" }}>
        <Card.Img
          variant="top"
          src={product.image}
          style={{ height: "350px", objectFit: "contain", padding: "15px" }}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            <strong>Price:</strong> ${product.price} <br />
            <strong>Category:</strong> {product.category} <br />
            <strong>Description:</strong> {product.description}
          </Card.Text>
          <Button variant="success">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Description;
