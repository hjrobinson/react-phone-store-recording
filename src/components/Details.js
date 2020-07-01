import React, { Component } from "react"; //import React Component
import {ProductConsumer} from '../context'; //import ProductConsumer from context.js
import {Link} from 'react-router-dom';  //import Link from react-router-dom
import {ButtonContainer} from './Button'; //import ButtonContainer from button.js
export default class Details extends Component { //export this details compoenent
    render() {
        return( //return the following component and its children
          <ProductConsumer>
              {(value)=>{ //bring in the value from ProductProvider in context.js
                  const {id,company,img,info,price,title,inCart}= value.detailProduct; //bring in the properties from the value.detailProduct object;
                  return (
                      <div className="container py-5">
                            {/*title*/}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1> {/*insert the title property here */}
                                </div>
                            </div>
                            {/* end title */}
                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3"> {/* set the row width to 6 columns wide if smaller than a medium screen; my is just the top and bottom margins in pixels */}
                                    <img src={img} className="img-fluid" alt="product" /> {/*use image-fluid to scale the image to fit the parent element */}
                                </div>
                                {/* product text*/}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model : {title}</h2> {/*insert the title property here */}
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by: <span className="text-uppercase">{company}</span> {/*insert the company property here */}
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price : <span>$</span>
                                            {price} {/*insert the price property here */}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        some info about product:
                                    </p>
                                    <p className="text-muted lead">{info}</p> {/* insert the info property here */}
                                    {/* buttons */}
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>
                                                back to products
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart //this is the props.cart property passed into Button.js
                                        disabled={inCart?true:false} //make this button disabled if the product is already in the cart
                                        onClick={() => {
                                            value.addToCart(id); //execute the addToCart function with the input id if the button is clicked.
                                            value.openModal(id); //then open the modal with the input id as the input parameter
                                        }}
                                        >
                                            {inCart ? "inCart" : "add to cart"} {/*if inCart if strue set the inCart property to inCart otherwise set it to "add to cart" */}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                      </div>
                  );
              }}
          </ProductConsumer>
        );
    }
}