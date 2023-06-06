import React from 'react'





function Carts(props) {
  let total=0;
  if(props.cart.length>0){
    
   
    return (
      <>
    
      
    <div className="row  bg-info">
      {
      props.cart.map((product) => {
        {total +=product.price}
        return (
          <div>
      
       <section className="h-100 h-custom">
  <div className="container py-5 h-100  bg info">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card">
          <div className="card-body p-4">

            <div className="row bg-light">

              <div className="col-lg-12">
                <h5 className="mb-3"><a href="#!" className="text-body"><i
                      className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>
                <hr/>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <p className="mb-1">Shopping cart</p>
                    <p className="mb-0">Your items add in cart</p>
                  </div>
                  <div>
                    <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!"
                        className="text-body">price</a></p>
                  </div>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div>
                          <img
                            src={product.image}style={{width:"100%",height:"150px"}}
                            className="img-fluid rounded-3" alt="Shopping item" />
                        </div>
                        <div className="ms-3">
                          <h5>{product.title}</h5>
                          <p className="small mb-0">{props.detail}</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        
                        <div>
                          <h5 className="mb-0"><b>${product.price}</b></h5>
                        </div>
                        <button className='btn btn-info ms-3'><svg xmlns="http://www.w3.org/2000/svg" width="24" onClick={()=>{props.removeToCard(props.product)}} height="24" viewBox="0 0 24 24" style={{fill: "rgba(0, 0, 0, 1)"}}><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path></svg></button>
                        {/* <button type="button" class="btn btn-primary" onClick={()=>{props.removeToCard(props.product)}}>Delete</button> */}
                      </div>
                    </div>
                  </div>
                </div>

              

      

              </div>
              

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
        );
      })}
    </div>
    <h1>Total:${total}</h1>
    </>
  )
   
  }
  else {
    return(
       <>
      <div className="spinner-border text-primary mx-auto d-block" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
      </>)
   
  }
}

export default Carts