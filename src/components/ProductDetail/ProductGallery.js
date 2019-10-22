import React, { Component } from "react";
import Slider from "react-slick";
import "./ProductGallery.scss";
import { PrevArrow, NextArrow } from "../Arrow/Arrow";

export default class ProductGallery extends Component {
  state = {
    productsImages: [
      { id: 1, url: "https://picsum.photos/id/244/880/530" },
      { id: 2, url: "https://picsum.photos/id/238/880/530" },
      { id: 3, url: "https://picsum.photos/id/239/880/530" },
      { id: 4, url: "https://picsum.photos/id/240/880/530" },
      { id: 5, url: "https://picsum.photos/id/241/880/530" },
      { id: 6, url: "https://picsum.photos/id/242/880/530" },
      { id: 7, url: "https://picsum.photos/id/243/880/530" },
      { id: 8, url: "https://picsum.photos/id/244/880/530" }
    ],
    thumbNav: null,
    mainNav: null
  };

  // async getProductImage(url) {
  //   const respone = await fetch(url);
  //   const productsImages = await respone.json();
  //   this.setState({
  //     productsImages,
  //     loading: false
  //   });
  //   // console.log(this.state);
  //   console.log(productsImages);
  // }

  componentDidMount() {
    // this.getProductImage(this.state.baseUrl);
    this.setState({
      thumbNav: this.navSlider,
      mainNav: this.mainSlider
    });
  }

  render() {
    const { productsImages } = this.state;

    // Main image slider setting
    const pdpMainSliderSetting = {
      dots: false,
      // fade: true,
      // infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      prevArrow: <PrevArrow className="slick-prev slick-arrow" />,
      nextArrow: <NextArrow className="slick-next slick-arrow" />,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            draggable: true
          }
        }
      ]
    };

    // Thumbnail Slider setting

    const pdpThumbSliderSetting = {
      dots: false,
      // infinite: true,
      // speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      // lazyLoad: true,
      // centerMode: true,
      // variableWidth: true,
      draggable: false,
      prevArrow: <PrevArrow className="slick-prev slick-arrow" />,
      nextArrow: <NextArrow className="slick-next slick-arrow" />,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 6,
            draggable: true
          }
        }
      ]
    };

    const showProducts = () => {
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
          focusOnSelect={true}
          ref={slider => (this.navSlider = slider)}
          {...pdpThumbSliderSetting}
        >
          {showProducts()}
        </Slider>
      </div>
    );
  }
}
