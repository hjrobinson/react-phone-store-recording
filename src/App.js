// import React from 'react';
//see:https://stackoverflow.com/questions/46019268/why-is-component-not-defined
import React, { Component } from 'react'; //import React as usual
import { Route, Switch } from 'react-router-dom';
import './App.css'; //import App.css
import "bootstrap/dist/css/bootstrap.min.css"; //import Bootstrap css
import Navbar from './components/Navbar'; //import the Navbar component
import ProductList from './components/ProductList'; //import the ProductList component
import Details from './components/Details'; //import the Details component
import Cart from './components/Cart/Cart'; //import the Cart component //Note that rather than updating the path at 4:14 he created a package.json file in the Cart folder and set added: {"main":"Cart.js"} I decided not to do this and just used the automated path update from the prompt that occurs when saving in vs code
import Default from './components/Default'; //import the Default component
import Modal from './components/Modal'; //import the Modal https://www.youtube.com/watch?v=f2_2MNLf1mE

class App extends Component {
  render() {
    return (
     <React.Fragment> {/*insert React.Fragment when you don't want to use a specific parent element such as a div; the ProductList component also makes use of a React.Fragment; see:https://www.youtube.com/watch?v=f2_2MNLf1mE */}
      <Navbar /> {/* insert the Navbar component at the top of the page */}
      <Switch> {/*use a Switch element to add Routes */}
        <Route exact path="/" component={ProductList} /> {/* for the home page load the ProductList component; be sure to set the exact path to "/"*/}
        <Route path="/details" component={Details} /> {/* set the route for the Details component */}
        <Route path="/cart" component={Cart} /> {/* set the route for the cart component */}
        <Route component={Default} /> {/* set the route for the Default component; this is what is returned when the url (the slug) you type in doesn't match any of the established routes; it will display the page not found message */}
      </Switch>
      <Modal />
     </React.Fragment>
    );
  }
}

export default App; //export this component so that it can be used in other files
