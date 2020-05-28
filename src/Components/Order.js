import React from "react";
import {Link} from "react-router-dom";

function Order({id,client_name,email,total_amount,total_items,create_date}){

    let date = new Date(create_date);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    if(month < 10){
        month = `0${month}`
    }
    let day = date.getDate();
    return (
        
            <>
            <table className="table-order">
            <tr>
                <td className="td">Data zamówienia</td>
                <td className="td">{`${day}.${month}.${year}`}</td>
            </tr>
            <tr>
                <td className="td">Imie</td>
                <td className="td">{client_name}</td>
            </tr>
            <tr>
                <td className="td">E-mail</td>
                <td className="td">{email}</td>
            </tr>
            <tr>
                <td className="td">Całkowity koszt</td>
                <td className="td">{total_amount}.00 PLN</td>
            </tr>
            <tr>
                <td className="td">Ilość przedmiotów</td>
                <td className="td">{total_items}</td>
            </tr>
            </table>
            <Link to={`/orders/${id}`} className="details">Zobacz więcej <i className="fas fa-search"></i></Link>
            </>
        
    )
}
export default Order;