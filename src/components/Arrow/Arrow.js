import React from "react";
import leftArrow from "../../assets/img/icon-arrow-left.svg";
import rightArrow from "../../assets/img/icon-arrow-right.svg";

const NextArrow = () => {
  return (
    <button type="button" className="slick-prev">
      <img src={leftArrow} alt="..."></img>
    </button>
  );
};

const PrevArrow = () => {
  return (
    <button type="button" className="slick-prev">
      <img src={rightArrow} alt="..."></img>
    </button>
  );
};

export { NextArrow, PrevArrow };
