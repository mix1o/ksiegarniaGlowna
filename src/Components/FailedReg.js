import React from "react";
import "../App.css";

function FailedSign(){
    return(
        <div className="failed-sign">
            <p className="reg-p red-p">Rejestracja nieudana. Proszę podać poprawne dane.</p>
            <p className="reg-p">Imie i naziwsko powinny zawierać conajmniej 3 znaki</p>
            <p className="reg-p">Email powinien zawierać @</p>
            <p className="reg-p">Hasło powinno zawierać conajmniej 5 znakow</p>
        </div>
        )
}
export default FailedSign;