import React, { Component } from 'react' //import React as usual
import Product from './Product'; //import the Product component; try to get your head wrapped around this: we import the component then pass properties from ProductList into Product; see product.id and product below
import Title from './Title'; //import the Title component (which is a function)

import {ProductConsumer} from '../context';

export default class ProductList extends Component {

    render() {
        return (
            <React.Fragment> {/*use React.Fragment as a starting point for adding html into a component because a parent element is always needed; the other component we use it in is in App.js; see:https://www.youtube.com/watch?v=f2_2MNLf1mE */}
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" /> {/* Assign/pass values to the name and title parameters/properties in the Title component */}
                        <div className="row">
                            <ProductConsumer>
                                {(value)=>{ //retreive the value which is an object from the ProductProvider in context.js
                                   return value.products.map( product => { //map each item in the products array from the ProductProvider which includes this.state from that component
                                       return <Product key={product.id} product={product}/>; //assign values and pass key and product properties into the Product component
                                   })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
                // <Product />
        );
    }
}



//Left off at 1:38:21