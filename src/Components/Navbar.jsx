import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineLogin } from "react-icons/md"
import { AuthContext } from './AuthContext'

const Navbar = () => {
  const { token, handleLogin } = useContext(AuthContext)
  const navigate = useNavigate()

  function handleLogout() {
    handleLogin(null)
    localStorage.removeItem('token')
    navigate("/Login")
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 shadow-sm">
      <div className="container-fluid">
       

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3 align-items-center">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>

            <li className="nav-item">
              <Link to="/Product" className="nav-link">Product</Link>
            </li>

            {!token ? (
              <li className="nav-item">
                <Link to="/Login" className="btn btn-outline-primary d-flex align-items-center">
                  <MdOutlineLogin className="me-1" /> Login
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <button onClick={handleLogout} className="btn btn-danger">Log Out</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
