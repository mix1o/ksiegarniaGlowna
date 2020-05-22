import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import Title from "../Components/Book/Title"


function SingleBook(){
   
    const {id} = useParams();
    
    const [singleBook,setSingleBook] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true);
        fetch(`/api/books/${id}`)
        .then(response => response.json())
        .then(response => {
            setLoading(false);
            setSingleBook(response);
        })
      },[id]);

      if(loading) {
          return <p className="loading">Loading</p>;
      }

      return(
          <div className="container-single-book-t">
              <Title title={singleBook.title} year_published={singleBook.year_published} price={singleBook.price} page_count={singleBook.page_count} category={singleBook.category} cover={singleBook.cover} cover_type={singleBook.cover_type} />
          </div>
        
    )
}
export default SingleBook;