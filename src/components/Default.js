import React, { Component } from "react"; //import React as usual

export default class Default extends Component { //include the html and the page not found message and export the component; this will be the default page that is loaded when there is no matching route for a specific component
    render() {
        console.log(this.props);
        return(
          <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h1 className="display-3">404</h1>
                        <h1>error</h1>
                        <h2>page not found</h2>
                        <h3>
                            the requested URL
                            <span className="text-danger">
                                {this.props.location.pathname} {/* insert the pathname (the url slug) */}
                            </span> {" "} {/* insert a space */}
                            was not found
                        </h3>
                    </div>
                </div>
          </div>
        )
    }
}