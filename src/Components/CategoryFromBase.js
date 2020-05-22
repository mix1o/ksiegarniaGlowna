import React from "react";
import {Link} from "react-router-dom"

function CategoryFromBase({id,category}){
    return (
        <li><Link className="category-link" to={`/categories/${id}`}>{category}</Link></li>
    )
}
export default CategoryFromBase;