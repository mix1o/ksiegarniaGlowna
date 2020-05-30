import React from "react";
import {Link} from "react-router-dom";
function SingleUserOrder({client_name,email,items,total_amount,total_items,create_date}){

    let date = new Date(create_date);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    if(month < 10){
        month = `0${month}`
    }
    let day = date.getDate();

    return (
        <>
       

            <tr>
                <td className="td bold" colSpan="3">Data zamówienia:</td>
                <td className="td">{`${day}.${month}.${year}`}</td>
            </tr>
            <tr>
                <td className="td bold" colSpan="3">Nazwa klienta:</td>
                <td className="td">{client_name}</td>
            </tr>
            <tr>
                <td className="td bold" colSpan="3">Email:</td>
                <td className="td">{email}</td>
            </tr>
            <tr>
                <td className="td bold" colSpan="3">Wartość zamówienia:</td>
                <td className="td">{total_amount}.00 PLN</td>
            </tr>
            <tr>
                <td className="td bold" colSpan="3">Ilość przedmiotów:</td>
                <td className="td">{total_items}</td>
            </tr>
            <tr>
                <td className="td your-books" colSpan="4">Twoje książki</td>
            </tr>
        </>
    )
}

export default SingleUserOrder;