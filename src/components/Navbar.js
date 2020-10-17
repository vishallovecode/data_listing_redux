import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
 
  var user=JSON.parse(localStorage.getItem('user'));
  const logouthandler=()=>{
    localStorage.removeItem("user")
  }
 
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
       {`${user && user.firstName} ${user && user.lastName}`}
        </Link>
        < Link  to='/login' class="btn btn-info btn-lg" onClick={logouthandler} >
          <span class="glyphicon glyphicon-log-out"></span> Log out
        </Link >
        <div>
          <Link to="/Products/add" className="btn btn-light ml-auto">
           Add Product
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
