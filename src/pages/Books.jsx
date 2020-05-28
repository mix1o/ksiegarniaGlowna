import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import BookCard from '../Components/BookCard';
import CategoriesFromBase from "../Components/CategoriesFromBase";
import CategoryFromBase from "../Components/CategoryFromBase";
import Item from "../Components/cart/Item";
import {useCookies} from 'react-cookie';


const Books = () => {
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);
    const [category,setCategory] = useState([]);

    const {id} = useParams();

    const [cookies] = useCookies({});
  const {user} = cookies;
   



    useEffect(() => {
        setLoading(true);
        fetch(`/api/books${id ? `?categoryId=${id}` : ''}`)
        .then(response => response.json())
        .then(response => {
            setLoading(false);
            setBooks(response);
        })
    }, [id]);

    if(loading) {
        return <p className="loading">Loading...</p>;
    }
    

    return (
        <>
        <Link to="/cart" className="showCart">Koszyk<i className="fas fa-shopping-cart"></i></Link>
        <Link to="/" className="sign"><i className="fas fa-arrow-left"></i>Powrót</Link>
        {user && <Link to="/userpanel" className="sign">Panel</Link>}
            <CategoriesFromBase/>
        
      
        <div className="container-books">
            {books.map(book => <BookCard id={book.id} 
        key={book.id}
        title={book.title}
         price={book.price}
           year_published={book.year_published} 
           page_count={book.page_count} 
           category={book.category} 
           cover={book.cover}
            cover_type={book.cover_type}
            /> )}
        </div>
        </>
      );

}

export default Books;