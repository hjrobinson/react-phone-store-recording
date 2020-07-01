import React from 'react' //usual

export default function CartItem({item,value}) { //take in item and value as input parameters
    const {id,title,img,price,total,count} = item; //deconstruct the list of properties from item; the values for these will be passed in from the CartList component
    const {increment,decrement,removeItem} = value; //deconstruct the list of properties from value; these properties too will be assigned values from the CartList component
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} //insert the image here
                    style={{width:"5rem", height: "5rem"}} 
                    className="img-fluid" 
                    alt="product"
                />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product : </span>
                {title} {/*insert the title */}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price : </span>
                {price} {/* insert the price */}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <span className="btn btn-black mx-1" onClick={()=>decrement(id)}> {/* execute the decrement function */}
                        - 
                    </span>
                    <span className="btn btn-black mx-1">{count}</span>
                    <span className="btn btn-black mx-1" onClick={() => increment(id)}> {/* execute the increment function */}
                        +
                    </span>
                </div>
            </div>
            {/* */}
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash"></i> 
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong> item total : $ {total} </strong> {/* insert the total property here */}
            </div>
        </div>
    )
}
