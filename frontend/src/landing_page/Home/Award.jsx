import React from "react";

const Award = () => {
  return (
    <div className="container ">
      <div className="row ">
        <div className="col-6 mt-5 p-5">
          <img src="media/images/largestBroker.svg" alt="lagestBroker" />
        </div>
        <div className="col-6 mt-5 p-5">
          <h1 className="mt-3">Largest broker in India</h1>
          <p className="mb-5 mt-2">
            10+ million Zerodha client contribute to all over 15% value in India
            of trading and Investing
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Option</p>
                </li>
                <li>
                  <p>Comuvity darivative</p>
                </li>
                <li>
                  <p>Currently darivative</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Darictive mutual found</p>
                </li>
                <li>
                  <p>Bonds and goverment security</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="media\images\pressLogos.png"
            alt="presslogo"
            style={{ width: "90%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Award;
