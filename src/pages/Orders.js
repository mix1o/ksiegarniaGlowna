import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom"
import Order from "../Components/Order"

function Orders(){


    const [orders,setOrders] = useState([]);

    const [loading,setLoading] = useState(true)

    useEffect(() => {
        setLoading(true);
        fetch(`/api/orders/`)
        .then(response => response.json())
        .then(response => {
            setOrders(response)
            setLoading(false)
        })
    }, []);

    if(loading) {
        return <p className="loading">Loading...</p>;
    }

    return (
        <>
        <Link to="/userpanel" className="sign">Panel</Link>

        <div className="container-cart">
        <h3 className="heading-3">Twoje zamówienia</h3>
            <div className="container-items">
                {orders.map(order => <Order key={order.id} id={order.id} client_name={order.client_name} email={order.email} total_amount={order.total_amount} total_items={order.total_items} create_date={order.create_date}/>)}
            </div>
            
           
        </div> 

        </>
    )
}
export default Orders;