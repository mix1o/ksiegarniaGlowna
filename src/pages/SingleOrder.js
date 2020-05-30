import React,{useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom"
import SingleUserOrder from "../Components/SingleUserOrder"
import OrderItem from "../Components/OrderItem";

function SingleOrder(){
    const {id} = useParams();
    
    const [order,setOrder] = useState({});
    const [loading, setLoading] = useState(true);
    const [items,setItems] = useState([]);


    useEffect(()=>{
        setLoading(true);
        fetch(`/api/orders/${id}`)
        .then(response => response.json())
        .then(response => {
            setLoading(false);
            setOrder(response);
            console.log(response)
            setItems(response.items)
        })
      },[id]);

      if(loading) {
          return <p className="loading">Loading</p>;
      }


      return (
          <>
            <Link to="/orders" className="sign"><i className="fas fa-arrow-left"></i>Powrót</Link>
          <div className="container-cart">
              <div className="container-items">
              <table className="table-order-single">

            <SingleUserOrder client_name={order.client_name} create_date={order.create_date} email={order.email} items={order.items}  total_amount={order.total_amount} total_items={order.total_items}/>

            {items.map(item => <OrderItem title={item.title} price={item.price} quantity={item.quantity} cover={item.cover}/>)}
            </table>
            </div>
          </div>
          </>
      )

}

export default SingleOrder;