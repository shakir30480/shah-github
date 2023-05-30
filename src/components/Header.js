import React from 'react'



function Header(props) {
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
                  <a href="#" class="btn btn-primary">
                    Order now
                  </a>
                </div>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Header