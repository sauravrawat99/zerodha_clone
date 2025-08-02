import React from "react";

const Education = () => {
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col">
          <img
            src="media\images\education.svg"
            alt=""
            style={{ width: "70%" }}
          />
        </div>
        <div className="col pt-3">
          <h3>Free and open market education</h3>
          <p className="mt-3">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="pb-3">
            Varsity <i class="fa-solid fa-arrow-right"></i>
          </a>
          <p className="mt-3">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="">
            TradingQ&A <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
