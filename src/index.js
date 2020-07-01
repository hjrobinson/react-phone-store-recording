import React from 'react'; //import React as usual (I think a lot (but not all) of this is boilerplate for when you create a React app)
import ReactDOM from 'react-dom'; //import ReactDOM
import './index.css'; //import the index.css
import App from './App'; //import the App component
import {BrowserRouter as Router} from 'react-router-dom'; //import BrowserRouter as Router from react-router-dom
import {ProductProvider} from './context'; //import the ProductProvider from context.js
import * as serviceWorker from './serviceWorker'; //I dunno. I think this is some kind of boilerplate

ReactDOM.render( //use ReactDOM and render the components and code below
  <ProductProvider> {/* Keep ProductProvider at the top level so it's properties and values can be accessed by other components in the app; remember we use React.creatContext() to do this in the context.js file */}
    <Router> {/*Make sure the App component is wrapped in the Router so we can use routes in it */}
      <App /> {/* Insert the App component here */}
    </Router>
  </ProductProvider>,
  document.getElementById('root') //see index.html this is where we are inserting the root element
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
