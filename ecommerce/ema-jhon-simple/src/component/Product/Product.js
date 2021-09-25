import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  //console.log(props);
  const { name, img, seller, price, stock, star } = props.product;
  const elementIcon = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div className="product">
      <div className="product-thumb">
        <img src={img} alt={name} />
      </div>
      <div className="product-info">
        <h4 className="prodcut-head">{name}</h4>
        <div className="product-item">
          <div className="item-description">
            <div className="left-info">
              <small>By: {seller}</small>
              <p>
                <strong>Price: $</strong>
                {price}
              </p>
              <p>
                <small>only {stock} left in stock - order soon</small>
              </p>
              <button
                onClick={() => props.handleAddToCart(props.product)}
                className="btn-add"
              >
                {elementIcon}Add to Cart
              </button>
            </div>
            <div className="right-info">
              <h4>Features</h4>
              <p>{star}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
