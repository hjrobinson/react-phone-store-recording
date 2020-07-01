import React from 'react'; //import React as usual
import CartItem from './CartItem'; //import the CartItem component

export default function CartList({value}) { //add input parameter of value here; I think this comes from the Cart component
    const {cart} = value; //deconstruct value to get the cart property

    return (
        <div className="container-fluid"> {/* use container-fluid to run the element across the length of the screen (I think) */}
            {cart.map(item=>{ //map each (return each) item in the cart
                return <CartItem key={item.id} item={item} value={value}/> //return each cart item and pass in values for the properties
                //to elaborate a little more..
                //pass in the id from item.id to set the value for the key
                //pass in the value for the item
                //pass in the value for value (this is from the input parameter which comes from the Cart component)

            })}
        </div>
    )
}
