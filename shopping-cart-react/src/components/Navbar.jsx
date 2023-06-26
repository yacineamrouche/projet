import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css"

 const Navbar = () => {
  return (
    <div className="navbar">
    
        <div>
        <Link to="/"> Shop </Link>
        </div>
        <div>
        <Link to="/Add"> Add </Link>  
        </div>
        <div>
        <Link to="/cart"> 
          <ShoppingCart size={32} />
        </Link>
        </div>
      
    </div>
  );
};

export default Navbar