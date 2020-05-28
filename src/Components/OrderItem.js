import React from "react"

function OrderItem({title,price,quantity}){
    return (
        <>
    <tr>
        <td>Tytuł książki</td>
        <td>{title}</td>   
    </tr>
    <tr>
        <td>Cena</td>
        <td>{price}</td>   
    </tr>
    <tr>
        <td>Ilosc</td>
    <td>{quantity}</td>
    </tr>
    </>
    )
}
export default OrderItem;