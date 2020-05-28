import React from 'react';
import "../../App.css"
import {Link} from "react-router-dom";
import {useCartItems} from "../../hooks/cart"
import {useCookies} from 'react-cookie';

function Title({id,title,cover,price,page_count,category,cover_type,year_published}){


    const [cookies] = useCookies({});
    const {user} = cookies;

    const [items, addItem, removeItem, updateItem] = useCartItems()

    const book = {
        id: id,
        cover: cover,
        title: title,
        price: price,
        page_count: page_count,
        category: category,
        cover_type: cover_type,
        quantity: 1,
    };


    const toCart = () =>{
        addItem(book);
    }



    return (
        <>
        <Link className="sign" to="/books"><i className="fas fa-arrow-left"></i>Powrót</Link>
        <Link to="/cart" className="showCart">Koszyk<i className="fas fa-shopping-cart"></i></Link>

        {user && <Link className="sign" to="/userpanel">Panel</Link>}
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
            <button onClick={toCart} className="btn-add">Dodaj do koszyka <i className="fas fa-shopping-basket"></i></button>
            </div>
        </div>
        </>
    )
}


export default Title;