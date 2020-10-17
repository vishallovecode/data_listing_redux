import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Product Book
        </Link>
        <div>
          <Link to="/Products/add" className="btn btn-light ml-auto">
            Create Product
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
