import React from "react";

const Jumbotron = () => {

    return (
        <div className="card w-100 m-auto card text-white bg-secondary rounded-1 border-0 mt-3">
            <h5 className="card-header border-0">A Warm Welcome!</h5>
            <div className="card-body">
                <h5 className="card-title">Speciale title treatment</h5>
                <p className="card-text">Text</p>
                <a href="#" className="btn btn-primary">Call to action!</a>
            </div>
        </div>
    )
}

export default Jumbotron;