import React from "react";

const Product = (props) => {
  return (
    <div className="merchcontainer">
      <div className="merchcard">
        <img className="merchproduct--image" src={props.url} alt="svk-img" />
        <h2>{props.name}</h2>
        <p className="price">{props.price}</p>
        <p>{props.description}</p>
        <p>
          {/* <a target="_blank" className="merchbtn">Add to cart</a> */}
          <a href={props.link} target="_blank" className="merchbtn">
            Buy Now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Product;
