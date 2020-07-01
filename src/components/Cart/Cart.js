import React, { Component } from "react"; //import React as usual
import Title from "../Title"; //import the Title component
import CartColumns from './CartColumns'; //import the CartColumns component
import EmptyCart from './EmptyCart'; //import the EmptyCart component
import {ProductConsumer} from '../../context'; //import ProductConsumer object/property (not sure what to call it) from context.js
import CartList from './CartList'; //import the CartList component
import CartTotals from './CartTotals'; //import the CartTotals component

export default class Cart extends Component { //export the Cart component
    render() {
        return(
            <section>
                <ProductConsumer>
                    {value => {
                        const { cart } = value;
                        if (cart.length > 0 ) {
                            return(
                                <React.Fragment>
                                    <Title name="your" title="cart" /> {/* insert the title component here and pass in values for the name and title properties */}
                                    <CartColumns/>
                                    <CartList value={value}/> {/*assign the entire value object to the property value so that the object can be used in the CartList component */}
                                    <CartTotals value={value}/> {/*same as above except with the CartTotals component */}
                                </React.Fragment>
                            );
                        } else {
                            return <EmptyCart />
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}