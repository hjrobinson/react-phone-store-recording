import React, { Component } from 'react'; //import React
import {storeProducts, detailProduct} from './data'; //import the storeProducts array and the detailProduct object from data.js

const ProductContext = React.createContext(); //set ProductContext equal to React.createContext(); we create a context so that we do not have to use prop drilling where we pass the props down the chain from component to component
//Provider
//Consumer

class ProductProvider extends Component { //define the ProductProvider component
    state= { //define the following properties in the state object
        products:[], //keep track of the products that have been added to the products array
        detailProduct:detailProduct, //remember detailProduct is the object from data.js (we're just assigning an initial value here)
        cart:[], //array to store the items that have been added to your cart
        modalOpen:false, //keep track of whether the modal is open or not
        modalProduct:detailProduct, //same as above detailProduct
        cartSubTotal: 0, //store the cart subtotal
        cartTax: 0, //store the cart tax
        cartTotal: 0 //store the cart total
    };
    componentDidMount() { //execute the following code after this component mounts;componentDidMount() is invoked immediately after a component is mounted (inserted into the tree); see:https://reactjs.org/docs/react-component.html
        this.setProducts(); //execute this.setProducts
    }
    setProducts = () => { //we'll essentially be making a copy of the data in storeProducts and using it instead of using storeProducts directly because we do not want to use that data by reference        let tempProducts = []; //set tempProducts equal to an empty array;
        let tempProducts = [];
        storeProducts.forEach(item =>{ //for each item in storeProducts execute the following code
            const singleItem = {...item}; //singleItem is each object in storeProducts; ex: {"id":1,"title":"Google Pixel - Black","img":"img/product-1.png","price":10,"company":"GOOGLE","info":"Lorem ipsum dolor....
            tempProducts = [...tempProducts,singleItem]; //during each iteration of the loop add the next singleItem to the tempProducts array

        })
        this.setState(()=>{
            return {products:tempProducts} //after adding each singleItem to the tempProducts array set products' value equal to the tempProducts array;
        })
    }

    getItem = (id) => { //getItem function uses id as an input parameter;
        const product = this.state.products.find(item=> item.id === id); //set product equal to the first item in the products array where the item's id matches the input id
       
        return product; //return the product
    }

    handleDetail = id => { //test in Babel.js: https://babeljs.io/, I guess (but don't know for sure) that id without parentheses is the same as having id with parentheses;
        const product = this.getItem(id); //set product equal to the returned value from this.getItem(id);
        this.setState(() => {
          return { detailProduct: product }; //set detailProduct's value equal to the returned product
        });
    };
    addToCart = id => { //id as input parameter
        let tempProducts = [...this.state.products]; //this equals to an array of products that the user has added to the cart
        const index = tempProducts.indexOf(this.getItem(id)); //basically gets the id number of the product in question that was added to the cart
        const product = tempProducts[index]; //returns the product that was added
        product.inCart = true; //update the inCart property to true
        product.count = 1; //update the product count to 1
        const price = product.price; //update the price to price property of the product
        product.total = price; //update the product total to the price
        this.setState(() => {
            return {products: tempProducts,cart:[...this.state.cart,product]}; //set products equal to tempProducts, cart to the array of items in the cart with recently added product
        },
        () => {
            this.addTotals(); //add the totals for all the items in the callback after adding an item to the cart
        });
    };

    openModal = id => { //id as input parameter
       const product = this.getItem(id); //get the item with the given id
       this.setState(() => {
           return {modalProduct:product,modalOpen:true}; //set modalProduct to the value of the product and set modalOpen to true
       })
    }

    closeModal = () => {
        this.setState(()=> {
            return {modalOpen:false}; //reset modalOpen to false upon closing
        })
    }

    increment = id => { //this is the method used for increasing the number of orders for a specific item
        let tempCart = [...this.state.cart]; //set tempCart to the current state of the cart;
        const selectedProduct = tempCart.find(item=>item.id===id); //get the item with the matching id;

        const index = tempCart.indexOf(selectedProduct); //get the index of the selected product
        const product = tempCart[index]; //get the item from the tempCart using the index (I'm not sure if this is necessary)
        
        product.count = product.count + 1; //add one to the product count
        product.total = product.count * product.price; //update the total product price since there are now more items

        //update the state for the affected properties then update the overall totals
        this.setState(()=>{
            return {
                cart:[...tempCart]
            }
        },
        ()=>{
            this.addTotals()
        }
        )
    }

    
    decrement = id => { //this is the method used for dereasing the number of orders for a specific item
        let tempCart = [...this.state.cart]; //set tempCart to the current state of the cart;
        const selectedProduct = tempCart.find(item=>item.id===id); //get the item with the matching id;

        const index = tempCart.indexOf(selectedProduct); //get the index of the selected product
        const product = tempCart[index]; //get the item from the tempCart using the index (I'm not sure if this is necessary)
        
        product.count = product.count - 1; //decrease the total number of a specific product by one
       
        if(product.count === 0){ //if the product count is equal to zero...
            this.removeItem(id) //remove the item with the give id (see removeItem below)
        } else { //otherwise...
            product.total = product.count * product.price; //multiply the count by the price to get an updated total of a specific product
             //update the state for the affected properties then update the overall totals
            this.setState(
                ()=>{
                    return {
                        cart:[...tempCart]
                    }
                },
                ()=>{
                    this.addTotals()
                }
            )
        }
    }

    removeItem = id => { //method for removing an item from the cart
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id); //reset the tempCart to items other than the removed item by filtering the item array (I assume it's an array; see W3's description of the filter method:https://www.w3schools.com/jsref/jsref_filter.asp)
        
        //reset the object properties of the removed item that were changed
        const index = tempProducts.indexOf(this.getItem(id)); //get the index of the removed item
        let removedProduct = tempProducts[index]; //use the index to get the removed item from the tempProducts array

        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        //reset the state of cart and products to their temp counterparts;
        this.setState(()=>{
            return {
                cart:[...tempCart],
                products:[...tempProducts]
            }
        },
        () => {
            this.addTotals() //update the price totals to account for the removed item;
        }
        )
    }

    clearCart = () => { //method for clearing the cart
        this.setState(()=>{
            return {cart:[]} //reset the cart to an empty array
        },()=>{
            this.setProducts(); //reset the objects in state to new fresh copies upon clearing the cart (this will remove "In Cart" from the items);
            this.addTotals(); //reset the price totals
        });
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item=>(subTotal += item.total)); //add each item's price until a subtotal is arrived at
        const tempTax = subTotal * 0.1; //multiply subTotal by the taxrate to get the value for tempTax
        const tax = parseFloat(tempTax.toFixed(2)); //set tax to the tempTax value to two decimal places I'm not sure if it rounds up or not
        const total = subTotal + tax; //add subTotal and tax to get a total price
       console.log("Cyrus: " + total)
        this.setState(()=>{ //set the state for the following properties
            return {
                cartSubTotal:subTotal,
                cartTax:tax,
                cartTotal:total
            }
        })
    }
    render() {
        console.log(this.props.children)
        return (
            <ProductContext.Provider value={{ //set the value property of ProductContext.Provider to the following values; pass the values using the code above;
                ...this.state,
                handleDetail:this.handleDetail, //set handleDetail to the function of the same name
                addToCart:this.addToCart, //set addToCart to the function of the same name
                openModal:this.openModal, //set openModal to the function of the same name
                closeModal:this.closeModal, //set closeModal to the function of the same name
                increment:this.increment, //set increment to the function of the same name
                decrement:this.decrement, //set decrement to the function of the same name
                removeItem:this.removeItem, //set removeItem to the function of the same name
                clearCart:this.clearCart //set clearCart to the function of the same name
            }}>
                {this.props.children} {/*include the children of the components that you pass the value into*/}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer; //set ProductConsumer to the ProductContext.Consumer property

export {ProductProvider, ProductConsumer }; //export ProductProvider and ProductConsumer so that it can be used in other parts of your application