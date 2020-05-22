import React,{useState,useEffect} from "react";
import CategoryFromBase from "../Components/CategoryFromBase";

function CategoriesFromBase(){
    const [categories,setCategories] = useState([]);

    useEffect(()=>{
        fetch('/api/categories').then(response => response.json()).then(response => {
            setCategories(response)
        })
    },[])

    return (
        <ul className="menu-list">
        {categories.map(category => <CategoryFromBase key={category.id} id={category.id} category={category.category}/>)}
        </ul>
        
    )
}
export default CategoriesFromBase;