import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center m-5 p-5 border-bottom">
          <h3 className="fw-4">Zerodha Products</h3>
          <h4 className="text-muted mt-3 fw-4">
            Sleek, modern, and intuitive trading platforms
          </h4>
          <p className="text-muted mt-3 pb-5">
            Check out our{" "}
            <Link to="#" style={{ textDecoration: "none" }}>
              investment offerings →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
