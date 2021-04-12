import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props);
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <br />
        <p>
          <small>by: {seller}</small>
          <p>${price}</p>

          <p>only: {stock} left in stock- Order soon</p>
          <button 
          className="main-botton"
          onClick={() => props.handleAddProduct(props.product)}

          >Add to cart</button>
        </p>
      </div>
    </div>
  );
};

export default Product;
