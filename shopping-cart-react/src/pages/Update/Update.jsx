import React, { useState } from "react";
import axios from "axios";
import "./Update.css";
import { useNavigate } from "react-router-dom";


function Update({ idup }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState("clothes");
  const [imageUrl, setimageUrl] = useState("");

  const navigation=useNavigate()

  const info = {
    name: name,
    price: price,
    categories: categories,
    imageUrl: imageUrl,
  };

  const handleSubmit = () => {
    console.log(info, "the info");
    if(idup===0){
        return;
    }
    else{
    axios.put(`http://localhost:3000/api/items/update/${idup}`, info).then((res) => {
        window.alert("item Updated successfully");
        console.log(info + idup);
        navigation("/")
        console.log(res);
      })
      .catch((err) => {
        console.log(info + idup);

        console.log(err);
      });
    }
      
  };
  return (
    <div className="FormContainer">
      <div className="FormGroup">
        <label className="Label" htmlFor="title">
          Update-Title:
        </label>
        <input
          className="Input"
          type="text"
          id="title"
          name="title"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="FormGroup">
        <label className="Label" htmlFor="category">
          Update-Category:
        </label>
        <select
          className="Select"
          id="category"
          name="category"
          onChange={(e) => setCategories(e.target.value)}
        >
          <option value="">Select category</option>
          <option value="femme">femme</option>
          <option value="Homme">Homme</option>
          <option value="enfant">enfant</option>
        </select>
      </div>
      <div className="FormGroup">
        <label className="Label" htmlFor="image">
          Image URL:
        </label>
        <input
          className="Input"
          type="text"
          id="image"
          name="image"
          onChange={(e) => setimageUrl(e.target.value)}
        />
      </div>
      <div className="FormGroup">
        <label className="Label" htmlFor="price">
          Price:
        </label>
        <input
          className="Input"
          type="number"
          id="price"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button className="Button" type="submit" onClick={handleSubmit}>
        Add Item
      </button>
    </div>
  );
}

export default Update;
