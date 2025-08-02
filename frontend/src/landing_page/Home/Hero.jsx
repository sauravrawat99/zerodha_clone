import React from "react";

const Hero = () => {
  return (
    <div className="container m-5">
      <div className="row text-center">
        <img src="media/images/homeHero.png" alt="homehero" className="mb-5" />

        <h1 className="mt-5">Investing is everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button
          className="btn btn-primary btn-hover"
          style={{
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            width: "fit-content",
            margin: "0 auto",
            fontSize: "20px",
          }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
