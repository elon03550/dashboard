import React from "react";
import "./singleProduct.css";
import Single from "../../components/single/Single";
import { singleProduct } from "../../data";

function SingleProduct() {
  return (
    <>
      <div className="singleProduct">
        <Single {...singleProduct} />
      </div>
    </>
  );
}

export default SingleProduct;
