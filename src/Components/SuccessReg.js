import React from "react";
import "../App.css";
import {Link} from "react-router-dom";

function SuccessReg(){
    return(
        <div className="success-reg">
            <p className="success-text">Rejestracja przebiegła pomyślnie</p>
            <i className="fas fa-check-circle"></i>
            <Link to="/sign" className="sign">Zaloguj się</Link>
            <Link to="/" className="sign">Powrót do strony głównej</Link>
        </div>
    )
}
export default SuccessReg;