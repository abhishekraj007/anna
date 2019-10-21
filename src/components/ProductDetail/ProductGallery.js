import React, { Component } from "react";
import Slider from "react-slick";
import "./ProductGallery.scss";
import { PrevArrow, NextArrow } from "../Arrow/Arrow";

export default class ProductGallery extends Component {
  state = {
    loading: true,
    loadingImage: true,
    baseUrl: "https://anatta-demo-app.herokuapp.com/api/products/1/image",
    productsImages: [],
    thumbNav: null,
    mainNav: null
  };

  async getProductImage(url) {
    const respone = await fetch(url);
    const productsImages = await respone.json();
    this.setState({
      productsImages,
      loading: false
    });
    console.log(this.state);
  }

  componentDidMount() {
    this.getProductImage(this.state.baseUrl);
    this.setState({
      thumbNav: this.navSlider,
      mainNav: this.mainSlider
    });
  }

  render() {
    const { loading, productsImages } = this.state;

    const pdpMainSliderSetting = {
      dots: false,
      // fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />
    };

    const pdpThumbSliderSetting = {
      dots: false,
      infinite: true,
      speed: 500,
      // slidesToShow: 3,
      slidesToScroll: 1,
      lazyLoad: true,
      centerMode: true,
      variableWidth: true,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />
    };

    const showProducts = () => {
      if (loading) {
        return <p>Loading...</p>;
      } else {
        const productItems = productsImages.map(image => {
          return (
            <div key={image.id} className="pdp-thumbanil">
              {image && (
                <img
                  className="pdp-thumbnail-image"
                  src={image.url}
                  alt="..."
                ></img>
              )}
            </div>
          );
        });
        return productItems;
      }
    };

    return (
      <div>
        <Slider
          className="pdp-main-slider"
          asNavFor={this.state.thumbNav}
          ref={slider => (this.mainSlider = slider)}
          {...pdpMainSliderSetting}
        >
          {showProducts()}
        </Slider>
        <Slider
          className="pdp-thumbnail-slider"
          asNavFor={this.state.mainNav}
          ref={slider => (this.navSlider = slider)}
          {...pdpThumbSliderSetting}
        >
          {showProducts()}
        </Slider>
      </div>
    );
  }
}
