import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              Pratibha Shejwal
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/home" className="page-scroll">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="page-scroll">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="page-scroll">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="page-scroll">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="page-scroll">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/team" className="page-scroll">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="page-scroll">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
