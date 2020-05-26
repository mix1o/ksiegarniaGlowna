import React,{useState} from "react"
import {useCartItems} from "../../hooks/cart"
import {Link} from "react-router-dom"

    function Item({id,cover,price,title,page_count,category,cover_type, quantity}){

    const [items, addItem, removeItem, updateItem] = useCartItems()



    const remove = () => {
        removeItem(id);   
    }

    return (
        <div className="item">
            <img className="item-cover" src={cover}/>
            <div className="item-details">
            <h3 className="heading-3">{title}</h3>
            <p className="item-price">{price}PLN</p>
            </div>
            <div className="item-actions">
            <Link to="/order" className="btn-act buy">Kupuję</Link>
            <button onClick={remove} className="btn-act remove">Usuń</button>
            </div>
            <div className="container-count">
            <label className="items-count">Ilość sztuk<input onChange={e=>updateItem({id,quantity:e.target.value})} className="input-count" value={quantity} type="number"/></label>
            </div>
        </div>
    )
}
export default Item;