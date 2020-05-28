import React from "react";
import {Link} from "react-router-dom";
function SingleUserOrder({client_name,email,items,total_amount,total_items,create_date}){
    return (
        <>
        <Link to="/orders" className="sign"><i className="fas fa-arrow-left"></i>Powrót</Link>
        <div className="container-single-order">
        </div>

   
            <tr>
                <td>Nazwa klienta:</td>
                <td>{client_name}</td>
            </tr>
            <tr>
                <td>Email:</td>
                <td>{email}</td>
            </tr>
            <tr>
                <td>Wartość zamówienia:</td>
                <td>{total_amount}</td>
            </tr>
            <tr>
                <td>Ilość przedmiotów:</td>
                <td>{total_items}</td>
            </tr>
        </>
    )
}

export default SingleUserOrder;