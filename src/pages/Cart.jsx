import React, { useEffect, useState } from "react";
import Item from "../Components/cart/Item";
import {useCartItems} from "../hooks/cart";
import {Link} from "react-router-dom";


function Cart(){



    const [items, addItem, removeItem, updateItem] = useCartItems()


    const addOrder = () => {
        fetch(`/api/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({data: items.map(item => ({id: item.id, quantity: item.quantity}))})
        })
        .then(response => response.json())
        .then(response => console.log(response))
    }




    return(
        <>
        <Link to="/userpanel" className="sign">Panel</Link>
        <Link to="/books" className="sign">Książki</Link>
        <div className="container-cart">
        <h3 className="heading-3">Koszyk</h3>
            <div className="container-items">
                {items.map(item => <Item key={item.id} quantity={item.quantity} id={item.id} price={item.price} title={item.title} cover={item.cover}/>)}
            </div>
            <button onClick={() => addOrder()}>kupuje</button>
        </div> 

        </>
    )

}
export default Cart;