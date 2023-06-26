import React, { useState } from 'react';
import axios from 'axios';
import "./Add.css"
import { useNavigate } from "react-router-dom";



const AddItemForm = () => {
  const [name,setName]=useState('')
  const [price,setPrice]=useState('')
  const [categories,setCategories]=useState('clothes')
  const [imageUrl,setimageUrl]=useState('')

  
  const info={
    name:name,
    price:price,
    categories:categories,
    imageUrl:imageUrl
  }
  
  const navigation=useNavigate()
  console.log(info);

  const handleSubmit =  () => {
     axios.post('http://localhost:3000/api/items/post', info).then((res)=>{
    console.log(res);
    window.alert('item added successfully')
      navigation("/")
     }).catch((err)=>{
      console.log(err);
     })
  };

  return (
    <div className="FormContainer">
      <div className="FormGroup">
        <label className="Label" htmlFor="title">
          Title:
        </label>
        <input
          className="Input"
          type="text"
          id="title"
          name="title"
          onChange={(e)=>setName(e.target.value)}
          
        />
      </div>
      <div className="FormGroup">
        <label className="Label" htmlFor="category">
          Category:
        </label>
        <select
          className="Select"
          id="category"
          name="category"
          onChange={(e)=>setCategories(e.target.value)}
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
          onChange={(e)=>setimageUrl(e.target.value)}
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
          onChange={(e)=>setPrice(e.target.value)}
        />
      </div>
      <button className="Button" type="submit" onClick={handleSubmit}>
        Add Item
      </button>
    </div>
  );
};

export default AddItemForm;
