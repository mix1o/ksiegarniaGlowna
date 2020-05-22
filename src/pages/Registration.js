import React,{useState} from "react";
import {Link} from "react-router-dom";
import FailedReg from "../Components/FailedReg";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SuccessReg from "../Components/SuccessReg";

function Registration(){
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success,setSuccess] = useState(false)

    const addClient = () => {
        fetch(`api/clients`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                firstname,
                lastname,
            })
        })
        .then(response => {
            return response.json().then(json => [response.status, json]);
        })
        .then(([status, json]) => {
            if(status === 200) {
                setError(null);
                setSuccess(true);
            } else {
                setError(true);
            }
            console.log("Nowy użytkownik",json)
        }).then(setEmail(""),setFirstname(""),setLastname(""),setPassword(""));
    }

    return(
        <>
        <div className="container-registration-parent">
                {error && <FailedReg />}
                {success === false && <div className="container-registration">
                <h3 className="heading-3">Zarejestruj się</h3>
                <form className="form">
                    <label>Imie: </label><input placeholder="imie" className="input" type="text" value={firstname} onChange={e => setFirstname(e.target.value)}/>
                    <label>Nazwisko: </label><input placeholder="nazwisko" className="input" type="text" value={lastname} onChange={e => setLastname(e.target.value)}/>
                    <label>E-mail: </label><input placeholder="e-mail" className="input" type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <label>Hasło: </label><input placeholder="hasło" className="input" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </form>
                    <Link to="/" className="sign lower"><i className="fas fa-arrow-left"></i>Powrót</Link>
                    <button onClick={addClient} className="sign lower">Zarejestruj się</button>
            </div>}
            {success === true && <SuccessReg/>}
            </div>
            <Footer/>
            </>
    )
}
export default Registration;