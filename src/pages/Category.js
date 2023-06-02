import { useEffect, useState } from "react";
import Electronic from "../images/electronics.jpg"





function Category(props) {
  const [icategory, setIcategory] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        setIcategory(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
   
        <>
     
        
        <h1>Our Category</h1>
      <div className="row">
        {
        icategory.map((category) => {
          return (
            <div class="col-md-3" style={{ marginBottom: "30px" }}>
               <div className='container'>
            <div className='row'>
            <div class="card" style={{width: "18rem"}}>
                <img src={Electronic} class="card-img-top" alt="..."  style={{width:"100%",height:"150px"}}/>
                <div class="card-body">
                  <h5 class="card-title text-truncate">{icategory.title}</h5>
                 
                  <a href="#" class="btn btn-primary">
                    Order now
                  </a>
                </div>
              </div>
            </div>

        </div>
              
            </div>
         
          );
        })}
      </div>
      
      </>
    )
     
   
 
}

export default Category