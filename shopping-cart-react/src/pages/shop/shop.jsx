import React from "react";

import  Product  from "./product";
import "./shop.css";
import HeroSection from "../../components/HeroSection";

 const Shop = ({data,setTrigger ,setIdup}) => {


  return (
    <div className="shop">
      
   <HeroSection/>
     
      <div className="products">
        {data.map((product) => (
          <Product data={product} setIdup={setIdup} setTrigger={setTrigger}/>
        ))}
      </div>
    </div>
  );
};

export default Shop
