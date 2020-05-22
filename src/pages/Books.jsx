import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import BookCard from '../Components/BookCard';
import CategoriesFromBase from "../Components/CategoriesFromBase";
import CategoryFromBase from "../Components/CategoryFromBase";

const Books = () => {
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);

    

    useEffect(() => {
        setLoading(true);
        fetch('/api/books').then(response => response.json()).then(response => {
            setLoading(false);
            setBooks(response);
        })
    }, []);

  

    if(loading) {
        return <p className="loading">Loading...</p>;
    }
    

    return (
        <>
        <Link to="/" className="sign"><i className="fas fa-arrow-left"></i>Powrót</Link>
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
      )


    
}

export default Books;