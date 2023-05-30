import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        setProducts(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
   
   <div>
    <div className="Container-fluid"><Navigation/></div>
     <div className="container">
    
    <h1>Our Products</h1>
    <div className="row">
      {products.map((product) => {
        return (
          <div class="col-md-3" style={{ marginBottom: "30px" }}>
            
           <Header product={product}/>
          </div>
        );
      })}
    </div>
  </div>
   </div>
  );
}

export default App;
