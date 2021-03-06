import React, { useEffect, useState } from "react";
import Item from "../Components/cart/Item";
import {useCartItems} from "../hooks/cart";
import {Link} from "react-router-dom";
import Thanks from "../Components/Thanks";
import {useCookies} from 'react-cookie';
import {useCart} from "../hooks/cart";

function Cart(){

    const [cookies] = useCookies({});
    const {user} = cookies;

    const [items, addItem, removeItem, updateItem] = useCartItems();

    const [,,clearCart] = useCart();


    const addOrder = () => {
        fetch(`/api/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({data: items.map(item => ({id: item.id, quantity: parseInt(item.quantity)}))})
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            window.location.href = "/thank";
        })
       
        clearCart();
    }

 
    let isEmpty = true;

    if(items.length > 0){
        isEmpty = false;
    }



    return(
        <>
        {user && <Link to="/userpanel" className="sign">Panel</Link>}
        <Link to="/books" className="sign">Książki</Link>
        <div className="container-cart">
        <h3 className="heading-3">Koszyk</h3>
            <div className="container-items">
                {items.map(item => <Item key={item.id} quantity={item.quantity} id={item.id} price={item.price} title={item.title} cover={item.cover}/>)}
            </div>
            
            <div className="actions-cart">
            {isEmpty && <p className="empty-basket">Aktaualnie nie masz nic w koszyku</p>}
            {user && !isEmpty && <button className="cart-buy" onClick={() => addOrder()} >Kupuję</button>}
            {!user && !isEmpty && <><button className="cart-buy"><Link to="/sign" className="clear">Zaloguj się aby dokonać transakcji</Link></button>
            <p className="text-about-account">Nie posiadasz konta?</p><Link className="text-add-user" to="/registration">Zarejestruj się !</Link></>}
            </div>
        </div> 

        </>
    )

}
export default Cart;