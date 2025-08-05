import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Product() {
  const [productData, setProductData] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  async function fetchDataFromServer() {
    try {
      let url = "https://fakestoreapi.com/products";

      // Build query logic
      if (category) {
        url = `https://fakestoreapi.com/products/category/${category}`;
      }

      const response = await axios.get(url);
      let filteredData = response.data;

      // Search filter (client-side)
      if (search) {
        filteredData = filteredData.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        );
      }

      // Sorting (client-side)
      if (sort) {
        filteredData.sort((a, b) =>
          sort === "asc" ? a.price - b.price : b.price - a.price
        );
      }

      setProductData(filteredData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchDataFromServer();
  }, [search, category, sort]);

  return (
    <div className='container'>
      <h1 style={{ margin: "30px 0px" }}>Products</h1>

      <div style={{ display: "flex" }}>
        {/* Left Sidebar */}
        <div style={{ marginRight: "20px", width: "30%" }}>
          <hr />
          <div style={{ margin: "10px 0px", display: "flex" }}>
            <input
              type="text"
              placeholder="Search product..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ padding: "10px", width: "70%" }}
            />
          </div>
          <hr />
          <div>
            <p><strong>Sort</strong></p>
            <button onClick={() => setSort("asc")} style={{ marginRight: "10px" }}>
              Low to High
            </button>
            <button onClick={() => setSort("desc")}>
              High to Low
            </button>
          </div>
          <hr />
          <div>
            <p><strong>Filter by Category</strong></p>
            <select onChange={(e) => setCategory(e.target.value)} style={{ padding: "5px" }}>
              <option value="">All Categories</option>
              <option value="women's clothing">Women</option>
              <option value="men's clothing">Men</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
            </select>
          </div>
        </div>

        {/* Product Cards */}
        <div className='container' style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
          {productData.map((el, i) => (
            <Card key={el.id} style={{ width: '300px', margin: "15px 0px" }}>
              <Card.Img
                variant="top"
                src={el.image}
                style={{ width: "100%", height: "350px", padding: "10px", objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Title>{el.title.slice(0, 30)}...</Card.Title>
                <Card.Text>
                  ₹ {el.price}
                </Card.Text>
                <Link to={`/description/${el.id}`}>
                  <Button variant="primary">Add To Cart</Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
