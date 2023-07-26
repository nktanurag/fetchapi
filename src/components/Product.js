import React from "react";
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom' 

import '../index.css'

//excerpt(?)
export const Product = ( {product, excerpt} ) => {
    //it is a hook that return a function & 
    //helps in navigating programatically (?)
    const navigate = useNavigate()
    
    const manageClick = () => {
        navigate(`/products/${product.id}`)  
    }
    // console.log(product,'llll')
    return (
        <div className="shop--cart">
            <img className="cart--image" src={product.thumbnail} alt={product.title} />
            <h1>{product.title}</h1>
            <div className="discount--price--text">
                <del>
                    <span className="amount">${product.price}</span>
                </del>
                <ins>
                    <span className="amount">${Math.round(product.price - product.discountPercentage*0.01*product.price)}</span>
                </ins>
            </div>
            <p>{product.description}</p>
            {excerpt && (
                <Link to={`/products/${product.id}`} className="button">
                   View Product
                </Link>
            )}
        </div>
    )
}