import React from "react";
import { useNavigate } from "react-router-dom";

import "./cart.css";


 const Cart = () => {
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart"></div>
      <div className="checkout">
        <p> Subtotal:</p>
        <button onClick={() => navigate("/")}> Continue Shopping </button>
        <button></button>
      </div>
    </div>
  );
};


export default Cart