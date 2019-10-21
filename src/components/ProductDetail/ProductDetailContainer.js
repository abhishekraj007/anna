import React, { Component } from "react";
import ProductGallery from "./ProductGallery";
import ProductDetailLeft from "./ProductDetailLeft";

export default class ProductDetail extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row pdp-container">
          <div className="col-md-4 pdp-left">
            <ProductDetailLeft />
          </div>

          <div className="col-md-8 pdp-right">
            <ProductGallery />
          </div>
        </div>
      </div>
    );
  }
}
