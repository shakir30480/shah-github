import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Foter from "./components/Foter";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Category from "./pages/Category";
import Carts from "./pages/Carts";
import { Routes, Route } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [cart,setCart]=useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        setProducts(res);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  

  const addToCard=(product)=>{
    const newAr=[...cart,product];
    setCart(newAr);
  }
  console.log(cart)


  return (
    <div>
      <div className="Container">
        <Header cart={cart} />

        <Routes>
          <Route path="/" element={<Home addToCard={addToCard} products={products} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/carts" element={<Carts cart={cart} />} />
        </Routes>
        <Foter />
      </div>
    </div>
  );
}

export default App;
