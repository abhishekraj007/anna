import React, { Component } from "react";
import { ColorCheckbox } from "../UI/Checkbox";
import { RadioButton } from "../UI/Radio";
import { Tabs, Tab } from "../UI/Tabs";
import reviewIcon from "../../assets/img/icon-review.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import "./ProductDetailLeft.scss";
export default class ProductDetailLeft extends Component {
  state = {
    colors: [
      {
        name: "blue",
        value: "#072348"
      },
      {
        name: "white-gray",
        value: "#f7f7f7"
      },
      {
        name: "black",
        value: "#000000"
      },
      {
        name: "red",
        value: "#b5222e"
      },
      {
        name: "yellow",
        value: "#ffcf60"
      },
      {
        name: "grey",
        value: "#4e4e4e"
      },
      {
        name: "green",
        value: "#129f7d"
      },
      {
        name: "grey-light",
        value: "#c69f97"
      },
      {
        name: "black-light",
        value: "#333333"
      },
      {
        name: "blue-light",
        value: "#215297"
      },
      {
        name: "black-dark",
        value: "#555555"
      }
    ],
    sizes: [
      {
        name: "5",
        value: "5"
      },
      {
        name: "5.5",
        value: "5.5"
      },
      {
        name: "6",
        value: "6",
        disabled: true
      },
      {
        name: "6.5",
        value: "6.5"
      },
      {
        name: "7",
        value: "7"
      },
      {
        name: "7.5",
        value: "7.5",
        disabled: true
      },
      {
        name: "8",
        value: "8",
        checked: true
      },
      {
        name: "8.5",
        value: "8.5"
      },
      {
        name: "9",
        value: "9.5"
      },
      {
        name: "10",
        value: "10"
      },
      {
        name: "10.5",
        value: "10.5"
      },
      {
        name: "11",
        value: "11"
      },
      {
        name: "11.5",
        value: "11.5"
      },
      {
        name: "12",
        value: "12"
      },
      {
        name: "12.5",
        value: "12.5"
      },
      {
        name: "13",
        value: "13"
      }
    ]
  };

  render() {
    const { colors, sizes } = this.state;
    // console.log(colors);

    return (
      <div>
        <div className="left-info">
          <a
            href="#index"
            className="pdp-back-btn text-xs text-uppercase text-primary"
          >
            <FontAwesomeIcon icon={faAngleLeft} className="mr-2" />
            <span>Men</span>
          </a>

          <div className="center-xy-between">
            <h1 className="m-0">Red Canvas</h1>
            <h2 className="text-secondary">$79 USD</h2>
          </div>
          <div className="center-xy-between mb-3">
            <span className="text-sm text-secondary text-uppercase">
              OCA LOW
            </span>
            <a href="#index" className="text-sm text-secondary">
              <img src={reviewIcon} className="pdp-review mr-2" alt="..."></img>
              <span>154 Reviews</span>
            </a>
          </div>

          <Tabs defaultIndex={0}>
            <Tab label="Men">
              <div className="tab-body">
                {/* Show Color */}
                <p className="text-uppercase text-xs mb-3">Select Color</p>
                {colors.map(color => {
                  return <ColorCheckbox key={color.value} color={color} />;
                })}

                {/* Show Sizes */}
                <div className="center-xy-between mb-3 mt-4">
                  <p className="text-uppercase text-xs">Select Size</p>
                  <a
                    href="#index"
                    className="text-sm text-primary text-underline"
                  >
                    _Size & Fit Guide
                  </a>
                </div>
                {sizes.map(size => {
                  return (
                    <RadioButton key={size.value} name="size" size={size} />
                  );
                })}
              </div>

              {/* Show Button */}

              <button className="button button-primary button-block">
                ADD TO BAG
              </button>
            </Tab>
            <Tab label="Women">
              <div className="tab-body">
                {/* Show Color */}
                <p className="text-uppercase text-xs mb-3">Select Color</p>
                {colors.map(color => {
                  return <ColorCheckbox key={color.value} color={color} />;
                })}

                {/* Show Sizes */}
                <div className="center-xy-between mb-3 mt-4">
                  <p className="text-uppercase text-xs">Select Size</p>
                  <a
                    href="#index"
                    className="text-sm text-primary text-underline"
                  >
                    _Size & Fit Guide
                  </a>
                </div>
                {sizes.map(size => {
                  return (
                    <RadioButton key={size.value} name="size" size={size} />
                  );
                })}
              </div>
              <button className="button button-primary button-block">
                ADD TO BAG
              </button>
            </Tab>
          </Tabs>

          <div className="text-center text-sm mt-3">
            <span>Worldwide Shipping + Free Returns</span>
          </div>
        </div>
      </div>
    );
  }
}
