import React from 'react'; //import React as usual

export default function Title({name,title}) { //Title function takes in name and title as input parameters
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize">
                    {name} <strong className="text-blue">{title}</strong> {/*place the properties here */}
                </h1>
            </div>
        </div>
    )
}