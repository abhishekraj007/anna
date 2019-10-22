import React from "react";
import "./Header.scss";
import logo from "../../assets/img/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const Header = props => {
  return (
    <header className="primary-header">
      <div className="header-top">
        <span className="header-top-text">Free Us shipping & return</span>
      </div>
      <div className="container-fluid">
        <div className="header-nav">
          <div className="nav-left">
            {/* <!-- Mobile navmenu toggler--> */}
            <div className="nav-toggler">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <ul className="nav-menu">
              <li className="nav-item">
                <a className="nav-link" href="#index">
                  Men
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#index">
                  Women
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- Logo--> */}
          <a className="header-logo" href="index.html">
            <img className="header-logo__img" src={logo} alt="logo" />
          </a>
          <div className="nav-right">
            <ul className="nav-menu">
              <li className="nav-item">
                <a className="nav-link" href="#index">
                  About
                </a>
              </li>
              <li className="nav-item show-mobile nav-icon-item">
                <a className="nav-link" href="#index">
                  <FontAwesomeIcon icon={faUser} />
                </a>
              </li>
              <li className="nav-item show-mobile nav-icon-item">
                <a className="nav-link" href="#index">
                  <FontAwesomeIcon icon={faShoppingBag} />
                  <span className="cart-added-count">2</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
