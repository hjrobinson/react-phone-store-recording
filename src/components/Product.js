import React, { Component } from "react"; //import React as usual
import styled from "styled-components"; //import styled components module
import {Link} from "react-router-dom"; //import the Link module
import {ProductConsumer} from "../context"; //import ProductConsumer from context.js; note that because we are rendering a component we use the consumer (I guess);
import PropTypes from 'prop-types'; //import the PropTypes module

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product; //For each item the id,title,img,price, and inCart properties are retrieved; remember the products array was mapped in ProductList.js;
        return ( //apply the following code to each product
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3"> {/* more or less a css styled component; see the css below */}
                <div className="card"> {/* in order to use the value from the ProductProvider in context.js insert a ProductConsumer element here*/}
                    <ProductConsumer> 
                        {(value) => ( //return the value (the object) from the ProductProvider
                        <div className="img-container p-5" onClick={() => //more css
                            value.handleDetail(id) //on clicking fire the handleDetail function set the detailProduct equal to the product in question
                        } >
                            <Link to="/details"> 
                                <img src={img} alt="product" className="card-img-top"></img> {/* link to the details for the given product by clicking on the image */}
                            </Link>
                            <button className="cart-btn" disabled={inCart ? true : false}  //set the disabled value to true or false depending on whether the given item is in the cart
                            onClick={()=>{
                                value.addToCart(id); //on clicking the button add the given item to the cart
                                value.openModal(id); //on clicking the buton open the modal with the given item
                            }}>
                            {inCart?(<p className="text-capitalize mb-0" disabled>in cart</p>): //if the item is in the cart set the html to the first value and if not to the second value
                            (<i className="fas fa-cart-plus"/>)}
                            </button>
                        </div>
                        )}
                        
                    </ProductConsumer>
                    {/* card footer */} {/*add a footer with the given html and css to each product card*/}
                    <div className="card-footer d-flex justify-content-between"> 
                        <p className="align-self-center mb-0">{title}</p> {/*insert the title into this paragraph element */}
                       <h5 className="text-blue font-italic mb-0">
                           <span className="mr-1">$</span>
                           {price} {/* insert the price property here */}
                       </h5>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

Product.propTypes = { //propTypes ensure that the values are of the proper type for each property (an error will be thrown if they are not);
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired //Make sure that propTypes is required to enforce its use
}

//css for the ProductWrapper styled component
const ProductWrapper = styled.div`
    .card{
        border-color:transparent;
        transition:all 1s linear;
    }
    .card-footer{
        background:transparent;
        border-top:transparent;
        transition:all 1s linear;
    }
    &:hover{
        .card{
            border:0.04rem solid rgba(0,0,0,0.2);
            box-shadow:2px 2px 5px 0px 0px rgba(0,0,0,0.2);
        }
        .card-footer{
            background:rgba(247,247,247);
        }
    }
    .img-container {
        position: relative;
        overflow: hidden;
    }
    .card-img-top {
        transition: all 1s linear;
    }
    .img-container:hover .card-img-top {
        transform: scale(1.2);
    }
    .cart-btn {
        position: absolute;
        bottom:0;
        right:0;
        padding:0.2rem 0.4rem;
        background:var(--lightBlue);
        border:none;
        color:var(--mainWhite);
        font-size:1.4rem;
        border-radius:0.5rem 0 0 0;
        transform:translate(100%,100%);
        transition: all 1s linear;
    }
    .img-container:hover .cart-btn {
        transform: translate(0,0);
    }
    .cart-btn:hover {
        color: var(--mainBlue);
        cursor: pointer;
    }
`;