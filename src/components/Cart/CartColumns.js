import React from 'react' //import React as usual

//this is a react function component (rfc) as opposed to a react class component (rcc); those are the shorthand inputs for adding the boilerplate from the es7 react snippets extension we installed in vscode
export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block"> {/*display this container only on large screens */}
            <div className="row">
                <div className="col-10 mx-auto col-lg-2"> {/* on small screens the row will be 10 columns wide but on large screens it will be 2 coluns wide; see video at 4:19 */}
                    <p className="text-uppercase">products</p>
                </div>
                <div className="col-10 mx-auto col-lg-2"> {/* on small screens the row will be 10 columns wide but on large screens it will be 2 coluns wide; see video at 4:19 */}
                    <p className="text-uppercase">name of product</p>
                </div>
                <div className="col-10 mx-auto col-lg-2"> {/* on small screens the row will be 10 columns wide but on large screens it will be 2 coluns wide; see video at 4:19 */}
                    <p className="text-uppercase">price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2"> {/* on small screens the row will be 10 columns wide but on large screens it will be 2 coluns wide; see video at 4:19 */}
                    <p className="text-uppercase">quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-2"> {/* on small screens the row will be 10 columns wide but on large screens it will be 2 coluns wide; see video at 4:19 */}
                    <p className="text-uppercase">remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2"> {/* on small screens the row will be 10 columns wide but on large screens it will be 2 coluns wide; see video at 4:19 */}
                    <p className="text-uppercase">total</p>
                </div>
            </div>
        </div>
    )
}
