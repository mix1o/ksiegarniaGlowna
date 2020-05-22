import React, {useState} from 'react';
import "../App.css"
import {Link} from "react-router-dom";
import FailedSign from "../Components/FailedSign";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Sign(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [failed,setFailed] = useState(false);

    const send = () => {
        fetch('/api/signin',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            })
        }).then(({status}) => {
            if(status === 200){
                window.location.href = "/userpanel";
                setFailed(false)
            }else {
                setFailed(true);
            }
        })
    
    }


    return(
        <>
        <div className="container-sign-parent">
            {failed && <FailedSign />}
        <div className="container-sign">
            <h3 className="heading-3">Zaloguj się</h3>
            <form className="form">
                <label>E-mail: <input placeholder="e-mail" className="input" type="text" value={email} onChange={e => setEmail(e.target.value)}/></label>
                <label>Hasło: <input placeholder="hasło" className="input" type="password" value={password} onChange={e => setPassword(e.target.value)}></input></label>
            </form>
                <Link to="/" className="sign"><i className="fas fa-arrow-left"></i>Powrót</Link>
                <button className="sign lower" onClick={() => send()}>Zaloguj się</button>
        </div>
        </div>
        <Footer/>
        </>
    )
}

export default Sign;