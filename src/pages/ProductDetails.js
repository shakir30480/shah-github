
import {  useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import 'react-rater/lib/react-rater.css'

function ProductDetails() {

  const params=useParams();
  const productid=params.id;
  console.log(params);
  console.log(productid);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productid}`)
      .then((data) => {
        return( data.json());
      })
      .then((res) => { 
             
        setProduct(res);
        console.log(res)
        
      })
      .catch((err) => {
        console.log(err);
      });
     
  }, []);

  let ratingJSX = "";

    if (Object.keys(product).length > 0) {
        let Rate = Number(product.rating['rate']);
        for (let i = 0; i < Math.round(Rate); i++) {
            ratingJSX += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgba(0, 0, 0, 1)"}}><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg>`
        }
    }


 

  if(Object.keys(product).length >0){
    
   
    return (
      <>
    <div>
    <div>
      <div className='container'>
       <div className='row'>
       <div className=' col-md-6'>
       <img  src={product.image} style={{width:"100%",height:"200px"}}/>
         </div>
         <div className=' col-md-6'>
           <h2>{product.title}</h2>
           <h2>{product.rating['rate']}<div dangerouslySetInnerHTML={{ __html: ratingJSX }} /></h2>
           <h1><b><u>${product.price}</u></b></h1>
         </div>
       

         </div>

       </div>
     </div>
   
     
    </div>
    </>
  )
   
  }
  else {
    return(
       <>
      <div class="spinner-border text-primary p-5  mx-auto" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
      </>)
   
  }
  

  // return (
  //   
}

export default ProductDetails