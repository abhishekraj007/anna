import React from "react";
import "./Footer.scss";
import iconSearch from "../../assets/img/icon-search.svg";
import iconInsta from "../../assets/img/icon-insta.svg";
import iconFacebook from "../../assets/img/icon-facebook.svg";

const Footer = props => {
  return (
    <footer class="section footer-main">
      <div class="container-fluid">
        <div class="row footer-top">
          <div class="col-lg-6">
            <div class="row">
              <div class="col-6 col-md-3">
                <h4 class="footer-title">Men</h4>
                <ul class="list footer-list">
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
              <div class="col-6 col-md-3">
                <h4 class="footer-title">Women</h4>
                <ul class="list footer-list">
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
              <div class="col-6 col-md-3">
                <h4 class="footer-title">Support</h4>
                <ul class="list footer-list">
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
              <div class="col-6 col-md-3">
                <h4 class="footer-title">About</h4>
                <ul class="list footer-list">
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
            </div>
          </div>
          <div class="col-lg-6">
            <div class="row">
              <div class="col-md-4">
                <h4 class="footer-title">POP UP STORES</h4>
                <ul class="list footer-list">
                  <li>
                    <a href="#index">Find near you</a>
                  </li>
                  <li>
                    <a href="#index">Register</a>
                  </li>
                  <div class="input-group mt-3">
                    <input
                      class="form-input italic transparent text-xs"
                      type="text"
                      placeholder="Find your sneakers here"
                    />
                    <div class="input-append">
                      <button class="button button-transparent" type="button">
                        <img src={iconSearch} alt="..." />
                      </button>
                    </div>
                  </div>
                </ul>
              </div>
              <div class="col-md-8">
                <h4 class="footer-title">Newsletter</h4>
                <div class="row input-group">
                  <div class="col-8 pr-0">
                    <input
                      class="form-input transparent"
                      type="text"
                      placeholder="Find your sneakers here"
                    />
                  </div>
                  <div class="col-4 pl-0">
                    <button class="button button-outline-black" type="button">
                      Join Us
                    </button>
                  </div>
                </div>
                <div class="footer-social">
                  <a class="footer-social-link" href="#index">
                    <img src={iconInsta} alt="..." />
                  </a>
                  <a class="footer-social-link" href="#index">
                    <img src={iconFacebook} alt="..." />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row footer-bottom">
          <div class="col-12 text-center">
            <p class="footer-secondary-text m-0">
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
