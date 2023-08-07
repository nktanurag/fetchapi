import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import "../index.css";

//excerpt(?)
export const Product = ({ product, excerpt }) => {
  //it is a hook that return a function &
  //helps in navigating programatically (?)
  const navigate = useNavigate();

  const manageClick = () => {
    navigate(`/products/${product.id}`);
  };
  // console.log(product,'llll')
  return (
    <div className="shop--cart">
      <img
        className="cart--image"
        src={product.thumbnail}
        alt={product.title}
        style={{ maxHeight: "100px" }}
      />
      <h1>{product.title}</h1>
      <div className="discount--price--text">
        <del>
          <span className="amount">${product.price}</span>
        </del>
        <ins>
          <span className="amount">
            $
            {Math.round(
              product.price - product.discountPercentage * 0.01 * product.price
            )}
          </span>
        </ins>
      </div>
      <h5>Discount - {product.discountPercentage} %</h5>
      {/* <h5>ProductId - {product.id} </h5> */}

      {/* <Rating defaultValue={product.rating} precision={0.01} readOnly /> */}
      <p>
        {product.description.length < 40
          ? product.description
          : product.description.substring(0, 37) + "..."}
      </p>
      <div style={{ justifyContent: "space-between" }}>
        {excerpt && (
          <Link to={`/products/${product.id}`} className="button">
            View Product
          </Link>
        )}
      </div>
    </div>
  );
};
