import React from "react";
import avtar from "./images/avataaars.svg";
import cabin from "./images/cabin.png";

const Header = () => {
  return (
    <header className="masthead bg-primary text-white text-center">
          <div className="container d-flex align-items-center flex-column">
        <img
          className="masthead-avatar mb-5"
          src={avtar}
          alt="..."
        />
        <h1 className="masthead-heading text-uppercase mb-0">
        Urmil Rupareliya
        </h1>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <p className="masthead-subheading font-weight-light mb-0">
          Fullstack JavaScript Web Developer
        </p>
      </div>
    </header>
  );
};

export default Header;
