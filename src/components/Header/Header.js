import React from "react";
import "./Header.scss";
import logo from "../../assets/img/logo.svg";
import accountIcon from "../../assets/img/icon-account.png";
import cartIcon from "../../assets/img/icon-cart.png";

const Header = props => {
  return (
    <header className="primary-header">
      <div className="header-top">
        <span className="header-top__text">Free Us shipping & return</span>
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
              <li className="nav-item show-mobile">
                <a className="nav-link" href="#index">
                  <img src={accountIcon} alt="..." />
                </a>
              </li>
              <li className="nav-item show-mobile">
                <a className="nav-link" href="#index">
                  <img src={cartIcon} alt="..." />
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
