import React from "react";
import "./Product.scss";

const Product = props => {
  return (
    <>
      <a href="#index" className="product-item">
        <div className="product-thumbanil">
          <span className="product-tag">Los Angeles Favorite</span>

          {props.productsImages[props.product.id] && (
            <img
              className="product-image img-fluid"
              src={props.productsImages[props.product.id].url}
              alt="..."
            ></img>
          )}
        </div>
        <div className="product-item-info">
          <h2 className="product-name">{props.product.name}</h2>
          <span className="product-price">${props.product.price}</span>
        </div>
      </a>
    </>
  );
};

export default Product;
