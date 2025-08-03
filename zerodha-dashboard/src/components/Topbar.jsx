{/* <div className="topbar-container">
  <div className="indices-container">
    <div className="nifty">
      <p className="index">NIFTY 50</p>
      <p className="index-points">{100.2} </p>
      <p className="percent"> </p>
    </div>
    <div className="sensex">
      <p className="index">SENSEX</p>
      <p className="index-points">{100.2}</p>
      <p className="percent"></p>
    </div>
  </div>
</div>; */}

// components/Topbar.jsx
import React from "react";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar-container sticky-top">
      <div className="indices-container">
        <div className="index-block">
          <p className="index">NIFTY 50</p>
          <p className="index-points">18181.75</p>
          <p className="percent red">-0.57%</p>
        </div>
        <div className="index-block">
          <p className="index">SENSEX</p>
          <p className="index-points">61560.64</p>
          <p className="percent red">-0.60%</p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
