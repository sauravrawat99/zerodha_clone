import React from "react";

const Openaccount = () => {
  return (
    <div className="container m-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
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
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Openaccount;
