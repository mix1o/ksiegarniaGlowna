import React from "react"
import {Link} from "react-router-dom";
import {useCartItems} from "../hooks/cart";

function SearchBooks({id,cover,title,price,page_count,category,cover_type}){


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
        <div className="container-search-book">
        <div className="div-cover">
            <img src={cover} alt="Okładka" className="cover"></img>
        </div>
        <div className="description">
        <h3 className="book-title">{title}</h3>
        <p className="atr">Cena: <span>{price}PLN</span></p>
        <button onClick={toCart} className="btn-add">Dodaj do koszyka <i className="fas fa-shopping-basket"></i></button>
        <Link to={`/books/${id}`} className="details">Zobacz więcej <i className="fas fa-search"></i></Link>
        </div>
    </div>
    )
}
export default SearchBooks;