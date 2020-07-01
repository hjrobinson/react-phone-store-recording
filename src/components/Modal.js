import React, { Component } from 'react'; //import React as usual
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return(
           <ProductConsumer>
               {(value) => { //get the value obeject from ProductProvider in context.js
                   const {modalOpen, closeModal} = value; //get the modalOpen and closeModal properties from value;
                   const {img, title, price} = value.modalProduct; //get these properties from value.modalProduct; note that when you getting nested properties you need to get them from the nested object; you can't just get them from the top level;

                   if(!modalOpen) { //if modalOpen is false return null? I guess this is because you do not want to automatically open the modal on page load (on the products page or when going to the details page)
                       return null;
                   } else{ //otherwise load the modal content
                       return (
                        <ModalContainer> {/*ModalContainer styled component */}
                            <div className="container">
                                <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                            <h5>item added to the cart</h5>
                                            <img src={img} className="img-fluid" alt="product"/> 
                                            <h5>{title}</h5> {/*insert the title property here */}
                                            <h5 className="text-muted">price : ${price}</h5> {/*insert the price property here */}
                                            <Link to='/'> {/*link back to the home page (or the products page) with this button */}
                                                <ButtonContainer onClick={()=> closeModal()}> {/* close the modal when clicking on the store button */}
                                                    store
                                                </ButtonContainer>
                                            </Link>
                                            <Link to='/cart'> {/*go to the cart page when clicking on the go to cart button */}
                                                <ButtonContainer cart onClick={()=> closeModal()}> {/* close the modal when clicking on the cart button */}
                                                    go to cart
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                </div>
                            </div>
                        </ModalContainer>
                       );
                   }
               }}
           </ProductConsumer>
        )
    }
}
//add css to the ModalContainer styled component
const ModalContainer = styled.div` 
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,0.3);
    display:flex;
    align-items:center;
    justify-content:center;
    #modal {
        background: var(--mainWhite);
    }
`