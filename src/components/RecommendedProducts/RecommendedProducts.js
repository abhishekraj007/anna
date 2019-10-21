import React, { Component } from "react";
import Slider from "react-slick";
import Product from "../Product/Product";
import { PrevArrow, NextArrow } from "../Arrow/Arrow";
export default class RecommendedProducts extends Component {
  state = {
    loading: true,
    loadingImage: true,
    baseUrl: "https://anatta-demo-app.herokuapp.com/api/products/",
    products: [],
    productsImages: {}
  };

  async getAllProducts(url) {
    const respone = await fetch(url);
    const products = await respone.json();
    this.setState({
      products,
      loading: false
    });

    await this.getAllImages(products);
  }

  async getAllImages(products) {
    products.forEach((product, i) => {
      // console.log(i);
      this.getImage(product.id).then(res => {
        this.setState({
          productsImages: {
            ...this.state.productsImages,
            [product.id]: res
          }
        });
      });
    });
  }

  // Get Image for each product
  async getImage(id) {
    const response = await fetch(this.state.baseUrl + id + "/image");
    const responseJson = await response.json();
    return responseJson[0];
  }

  componentDidMount() {
    this.getAllProducts(this.state.baseUrl);
  }

  render() {
    const { loading, products, productsImages } = this.state;

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      lazyLoad: true,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />
    };

    const showProducts = () => {
      if (loading) {
        return <p>Loading...</p>;
      } else {
        const productItems = products.map(product => {
          return (
            <Product
              key={product.id}
              product={product}
              productsImages={productsImages}
            />
          );
        });
        return productItems;
      }
    };

    return (
      <div>
        <h2> You'll also like </h2>
        <Slider {...settings}>{showProducts()}</Slider>
      </div>
    );
  }
}
