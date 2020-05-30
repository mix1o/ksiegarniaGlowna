import React from "react"

function OrderItem({title,price,quantity,cover}){
    return (
        <>
    <tr>
        <td className="td-2">
            <img className="order-img" src={cover}/>
        </td>
        <td className="td-2 order-title">{title}</td>   
        <td className="td-2">{price}.00 PLN</td>   
        <td className="td-2">Ilość: {quantity}</td>
    </tr>
    </>
    )
}
export default OrderItem;