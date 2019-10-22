import React, { Component } from "react";
import Slider from "react-slick";
import Product from "../Product/Product";
import { PrevArrow, NextArrow } from "../Arrow/Arrow";
import "./RecommendedProducts.scss";
import loader from "../../assets/img/loader.gif";
export default class RecommendedProducts extends Component {
  state = {
    loading: true,
    loadingImage: true,
    baseUrl: "https://anatta-demo-app.herokuapp.com/api/products/",
    products: [],
    productsImages: {},
    isMobile: false
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

    console.log(this.state.isMobile);
  }

  render() {
    const { loading, products, productsImages } = this.state;
    const settings = {
      dots: false,
      infinite: false,
      // speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerPadding: "18px",
      // lazyLoad: true,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      draggable: false,

      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    };

    const showProducts = () => {
      if (loading) {
        return (
          <div className="loader">
            <img src={loader} alt="..."></img>;
          </div>
        );
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

    let showProductsType;
    if (window.screen.width < 768) {
      console.log("its mobile");
      showProductsType = () => {
        return showProducts();
        // <Slider className="recommended-products-slider" {...settings}>
        // </Slider>
      };
    } else {
      console.log("not mobile");
      showProductsType = () => {
        return (
          <Slider className="recommended-products-slider" {...settings}>
            {showProducts()}
          </Slider>
        );
      };
    }

    return (
      <section className="section recommended-section">
        <div className="container-fluid">
          <h2 className="h1 text-secondary section-title">You'll also like</h2>

          <div className="products-wrapper">{showProductsType()}</div>
        </div>
      </section>
    );
  }
}
