// import React,{useEffect,useState} from 'react';
// import Book from "./Book";
// import "../App.css";
// import SingleBook from "../pages/SingleBook"

// function Allbooks(){

//     const [book,setBook] = useState([]);
    
//     useEffect(()=>{
//         fetch('/api/books')
//         .then(response => response.json())
//         .then(json => setBook(json))
//       },[]);



//       return (
//             <div className="container-books">
//           {/* {book.map(book => <Book id={book.id} title={book.title} price={book.price} key={book.id} year_published={book.year_published} page_count={book.page_count} category={book.category} cover={book.cover} cover_type={book.cover_type}/> )} */}
//             </div>
//           )
// }

// export default Allbooks;