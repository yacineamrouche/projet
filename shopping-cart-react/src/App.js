import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Shop  from "./pages/shop/shop";
import  Cart  from "./pages/cart/cart";
import { useEffect, useState } from "react";
import axios from "axios";
import Update from "./pages/Update/Update";
import Add from "./pages/Add/Add.jsx"
import Navbar from './components/Navbar.jsx';


function App() {
  const [data, setData] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [idup,setIdup]=useState(0)

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/items/getall")
      .then(({ data }) => {
        setData(data);
        setTrigger(false);
      })
      .catch((err) => console.log(err));
  }, [trigger]);


  
  return (
    <div className="App">
      <Router>
       <Navbar/>
        <Routes>
          <Route  path="/"  element={<Shop data={data} setTrigger={setTrigger} setIdup={setIdup} />} />  
          <Route path="/cart" element={<Cart />} />
          <Route path="/Update" element={<Update idup={idup} />} />
          <Route path="/Add" element={<Add/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
