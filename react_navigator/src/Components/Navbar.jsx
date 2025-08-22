import { NavLink } from "react-router-dom";


function Navbar() {
  const isLoggedIn = localStorage.getItem("token") ? false : true;

  const PageData = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Edit", path: "/edit" },
    { id: 3, title: "Product", path: "/product" },
    { id: 4, title: "Add Product", path: "/addproduct" },
  ];

  return (
    <div className="navbar-container">
      <div className="nav-links">
        {PageData.map((el) => (
          <NavLink
            key={el.id}
            to={el.path}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {el.title}
          </NavLink>
        ))}
      </div>

      {isLoggedIn ? (
        <button className="auth-btn login-btn">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Login
          </NavLink>
        </button>
      ) : (
        <button
          className="auth-btn logout-btn"
          onClick={() => {
            localStorage.removeItem("token");
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
}

export default Navbar;
