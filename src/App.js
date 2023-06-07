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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [products, setProducts] = useState([]);
  const [cart,setCart]=useState([]);
  const [query, setQuery]=useState("")
  const [filterproducts,setFilterproduct]=useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        setProducts(res);
        setFilterproduct(res)
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  const notify = () => toast.success("Add a item in cart !");
  const addToCard=(product)=>{
    const newAr=[...cart,product];
    setCart(newAr);
    notify();
  }

  const removeToCard=(index)=>{
    const newAr=cart.toSpliced(index,1)
    setCart(newAr);
  }

  const SearchEngin=(search)=>{
    const newAr=products.filter( (item)=>{
      return item.title.toLowerCase().includes(search.toLowerCase());
    });
    setFilterproduct(newAr)
  }

  const removeAllCard=(index)=>{
    const newAr=cart.toSpliced(index)
    setCart(newAr);
  }
  


  return (
    <div>
      <div className="Container">
      
      <ToastContainer 
       position= "top-center"
       autoClose= {500}
       hideProgressBar= {false}
       closeOnClick= {false}
       pauseOnHover= {false}
       draggable= {false}
       progress= {undefined}
       theme= "light"
      />
        <Header cart={cart} />
        <Routes>
          <Route path="/" element={<Home SearchEngin={SearchEngin} addToCard={addToCard} products={filterproducts} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/carts" element={<Carts removeAllCard={removeAllCard} removeToCard={removeToCard} cart={cart} />} />
        </Routes>
        <Foter />
      </div>
    </div>
  );
}

export default App;
