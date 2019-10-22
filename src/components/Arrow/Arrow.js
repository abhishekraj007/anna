import React from "react";
import leftArrow from "../../assets/img/icon-arrow-left.svg";
import rightArrow from "../../assets/img/icon-arrow-right.svg";

const NextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      <img src={rightArrow} alt="..."></img>
    </button>
  );
};

const PrevArrow = props => {
  const { className, style, onClick } = props;

  return (
    <button
      type="button"
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      <img src={leftArrow} alt="..."></img>
    </button>
  );
};

export { NextArrow, PrevArrow };
