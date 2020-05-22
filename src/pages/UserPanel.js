import React,{useState, useEffect} from "react";
import "../App.css";
import logoheader from "../img/logoheader.png";
import {Link} from "react-router-dom";
import {useCookies} from 'react-cookie';

function UserPanel(){
    const [cookies] = useCookies({});
    const {user} = cookies;

    const [search,setSearch] = useState('');
    const [searchBook, setSearchBook] = useState([]);

    const signOut = () => {
        fetch('/api/signout',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
        }).then(()=>{window.location.href="/"});
    }

    const searchTerm = (search) => {
        fetch('/api/books').then(response => response.json()).then(response =>console.log(response))
    }



    return(
        <div className="container-panel">
            <div className="panel-left">
                <p className="name">Witaj, {user && user.first_name}</p>
                <div className="user-btn-actions">
                    <button className="basket">Zobacz koszyk</button>
                    <button className="basket">Ustawienia</button>
                    <button className="basket">Edytuj profil</button>
                    <button className="basket">Kontakt</button>
                    <button className="basket">Pomoc</button>
                    <button onClick={signOut} className="basket sign-out">Wyloguj się<i className="fas fa-sign-out-alt"></i></button>
                </div>
                <p className="rights-panel">Wszelkie prawa zastrzeżone &copy;</p>
            </div>
            <div className="panel-right">
                <div className="container-search">
                    <div></div>
                    <div className="hr-inpt">
                    <h4 className="heading-4">Wszukaj książkę</h4>
                    <div className="div-book-search">
                    <input className="book-search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Wyszkuj swoje ulubione książki" type="text"/>
                    <button onClick={searchTerm} className="btn-search"><i className="fas fa-search color"></i></button>
                    </div>
                   
                    </div>
                    <img className="logo-panel" alt="Logo" src={logoheader}/>
                </div>
                <div className="last-search">
                        <h2 className="heading-2">Wyszukaj swoje ulubione książki<i className="fas fa-search"></i></h2>
                </div>
            </div>
        </div>
    )
};
export default UserPanel;