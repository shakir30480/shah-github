import React from 'react'
import ProductDetails from '../pages/ProductDetails'
import { Link } from 'react-router-dom'





function ProductCard(props) {
  return (
    <div>
        <div className='container'>
            <div className='row'>
            <div class="card" style={{width: "18rem"}}>
                <img src={props.product.image} class="card-img-top" alt="..."  style={{width:"100%",height:"150px"}}/>
                <div class="card-body">
                  <h5 class="card-title text-truncate">{props.product.title}</h5>
                  <p class="card-text">
                   <h1>${props.product.price}</h1>
                  </p>
                  <button onClick={()=>{props.addToCart(props.product)}} class="btn btn-primary">
                    Order now
                  </button>
                  <Link to={`/Product/${props.product.id}`} class="btn btn-primary ms-2">
                    View
                  </Link>
                </div>
              </div>
            </div>

        </div>
    </div>
  )
}

export default ProductCard