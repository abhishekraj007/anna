import React from "react";
import "./Footer.scss";
import iconSearch from "../../assets/img/icon-search.svg";
import iconInsta from "../../assets/img/icon-insta.svg";
import iconFacebook from "../../assets/img/icon-facebook.svg";

const Footer = props => {
  return (
    <footer className="footer-main">
      <div className="container-fluid">
        <div className="row footer-top">
          <div className="col-lg-6 footer-top-left">
            <div className="row">
              <div className="col-6 col-md-3 mb-3 mb-md-0 d-mobile-none">
                <h4 className="footer-title">Men</h4>
                <ul className="list footer-list">
                  <li>
                    <a href="#index">OCA Low</a>
                  </li>
                  <li>
                    <a href="#index">OCA High</a>
                  </li>
                  <li>
                    <a href="#index">CATIBA Low</a>
                  </li>
                  <li>
                    <a href="#index">CATIBA High</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3 mb-3 mb-md-0 d-mobile-none">
                <h4 className="footer-title">Women</h4>
                <ul className="list footer-list">
                  <li>
                    <a href="#index">OCA Low</a>
                  </li>
                  <li>
                    <a href="#index">OCA High</a>
                  </li>
                  <li>
                    <a href="#index">CATIBA Low</a>
                  </li>
                  <li>
                    <a href="#index">CATIBA High</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3 mb-3 mb-md-0">
                <h4 className="footer-title">Support</h4>
                <ul className="list footer-list">
                  <li>
                    <a href="#index">FAQ</a>
                  </li>
                  <li>
                    <a href="#index">Returns</a>
                  </li>
                  <li>
                    <a href="#index">Live Chat</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3 mb-3 mb-md-0">
                <h4 className="footer-title">About</h4>
                <ul className="list footer-list">
                  <li>
                    <a href="#index">Mission</a>
                  </li>
                  <li>
                    <a href="#index">Vision</a>
                  </li>
                  <li>
                    <a href="#index">Future</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 footer-top-right">
            <div className="row">
              <div className="col-md-4 mb-3 mb-md-0 d-mobile-none">
                <h4 className="footer-title">POP UP STORES</h4>
                <ul className="list footer-list">
                  <li>
                    <a href="#index">Find near you</a>
                  </li>
                  <li>
                    <a href="#index">Register</a>
                  </li>
                  <div className="input-group mt-3">
                    <input
                      className="form-input italic transparent text-xs"
                      type="text"
                      placeholder="Find your sneakers here"
                    />
                    <div className="input-append">
                      <button
                        className="button button-transparent p-0"
                        type="button"
                      >
                        <img src={iconSearch} alt="..." />
                      </button>
                    </div>
                  </div>
                </ul>
              </div>
              <div className="col-md-8 mb-3 mb-md-0">
                <h4 className="footer-title">Newsletter</h4>
                <div className="row input-group">
                  <div className="col-8 pr-0">
                    <input
                      className="form-input transparent newslater-input"
                      type="text"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="col-4 pl-1">
                    <button
                      className="button button-outline-black button-small"
                      type="button"
                    >
                      Join Us
                    </button>
                  </div>
                </div>
                <div className="footer-social">
                  <a className="footer-social-link" href="#index">
                    <img src={iconInsta} alt="..." />
                  </a>
                  <a className="footer-social-link" href="#index">
                    <img src={iconFacebook} alt="..." />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer-bottom">
          <div className="col-12 text-center">
            <p className="footer-secondary-text text-sm m-0">
              Copyright © 2019 CARIUMA. All Rights Reserved. Terms of Use |{" "}
              <a href="#index">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
