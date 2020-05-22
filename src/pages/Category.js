import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import SingleCategory from "../pages/SingleCategory";
import {Link} from "react-router-dom";

function Category(){

    const {id} = useParams();
    
    const [category,setCategory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true);
        fetch(`/api/books?categoryId=${id}`)
        .then(response => response.json())
        .then(response => {
            setLoading(false);
            setCategory(response)
        })
      },[id]);


    if(loading) {
        return <p className="loading">Loading...</p>;
    }

    return (
        <>
        <Link to="/books" className="sign"><i className="fas fa-arrow-left"></i>Powrót</Link>
        <div className="container-single-category">
        {category.map(category => <SingleCategory id={category.id} 
        key={category.id}
        title={category.title}
         price={category.price}
           year_published={category.year_published} 
           page_count={category.page_count} 
           category={category.category} 
           cover={category.cover}
            cover_type={category.cover_type}
            /> )}
        </div>
        </>
    )
}

export default Category;