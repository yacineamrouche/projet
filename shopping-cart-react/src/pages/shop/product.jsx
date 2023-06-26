import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ data, setTrigger, setIdup }) => {
  const [id, setId] = useState(0);

  const navgation = useNavigate();

  useEffect(() => {
    axios
      .delete(`http://localhost:3000/api/items/delete/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  console.log(id);
  return (
    <div className="product">
      <img src={data.imageUrl} alt="not Found" />
      <div className="description">
        <p>
          <b>{data.name}</b>
        </p>
        <p>$ {data.price}</p>
      </div>
      <div className="btn_wrap">
        <button
          className="addToCartBttn"
        
          onClick={() => {
            setIdup(data._id);
            navgation("/Update");
          }}
        >
          Update
        </button>
        <button
          className="addToCartBttn"
          
          onClick={() => {
            setId(data._id);
            setTrigger(true);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Product;
