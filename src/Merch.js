import React from "react";
import "./css/Merch.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";

import URLS from "./urls.json";
import { productData, responsive } from "./merchdata";

const Merch = (_, ref) => {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
      link={item.url1}
    />
  ));

  return (
    <>
      <div className="Header_container">
        <span className="AbtHeader">Merchandise</span>
      </div>
      <div className="scroll-container">
        <div className="scroll-text">Use SVK420 to get discount </div>
      </div>
      <div>
        <Carousel showDots={true} responsive={responsive}>
          {product}
        </Carousel>
      </div>
    </>
  );
};

export default React.forwardRef(Merch);
