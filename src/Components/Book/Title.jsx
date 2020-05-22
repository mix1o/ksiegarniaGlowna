import React from 'react';
import "../../App.css"
import {Link} from "react-router-dom";
function Title({title,cover,price,page_count,category,cover_type,year_published}){
    return (
        <>
        <Link className="sign" to="/books"><i className="fas fa-arrow-left"></i>Powrót</Link>
        <div className="container-single-book">
            <div className="img-single-book">
                <img src={cover} alt="Zdjęcie okładki"/>
            </div>
            <div className="content-single-book">
            <div className="header-single-book">
                <h3 className="heading-3">{title}</h3>
            </div>
            <div className="description-single-book">
                <ul className="list-single-book">
                    <li>Cena: {price}zł</li>
                    <li>Liczba stron: {page_count}</li>
                    <li>Kategoria: {category}</li>
                    <li>Rodzaj okładki: {cover_type}</li>
                    <li>Rok wydania: {year_published}</li>
                </ul>
            </div>
            <button className="btn-add">Dodaj do koszyka <i className="fas fa-shopping-basket"></i></button>
            </div>
        </div>
        </>
    )
}


export default Title;