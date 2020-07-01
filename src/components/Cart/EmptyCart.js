import React from 'react' //import React as usual

export default function EmptyCart() { //this is a React function component
    return (
        <div className="container mt-5"> {/*contaienr with margin-top of 5 pixels */}
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h1>your cart is currently empty</h1>
                </div>
            </div>
        </div>
    )
}
