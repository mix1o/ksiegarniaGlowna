import React from "react"
import "../App.css"
import {Link} from "react-router-dom";

function Book({id,cover,title,price,page_count,category,cover_type}){

    return (
        <div className="container-book">
            <div className="div-cover">
                <img src={cover} alt="Okładka" className="cover"></img>
            </div>
            <div className="description">
            <h3 className="book-title">{title}</h3>
            <p className="atr">Cena: <span>{price}PLN</span></p>
            <button className="btn-add">Dodaj do koszyka <i className="fas fa-shopping-basket"></i></button>
            <Link to={`/books/${id}`} className="details">Zobacz więcej <i className="fas fa-search"></i></Link>
            </div>
        </div>
    )
}


export default Book;