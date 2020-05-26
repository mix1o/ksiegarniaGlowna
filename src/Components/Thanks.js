import React from "react";
import {Link} from "react-router-dom"
function Thanks(){
    return (
        <div className="thanks-container">
            <i className="fas fa-times"></i>
            <p className="thanks-text">Dziękuje za złożenie zamówienia</p>
            <Link to="/" className="sign">Powrót</Link>
        </div>
    )
}
export default Thanks;