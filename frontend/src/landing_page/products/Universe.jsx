import React from "react";
import Otheruni from "./Otheruni";

const Universe = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <p className=" fw-1 fs-3 pb-5">
            Want to know more about our technology stack? Check out the
            Zerodha.tech blog.
          </p>
          <h4 className="fw-5 fs-4  pb-1 pt-5">The Zerodha Universe</h4>
          <p className="fw-1 fs-5">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>
      <div className="row p-5 ">
        <div className="col-4">
          <Otheruni
            image={"media/images/zerodhaFundhouse.png"}
            para={
              "Our asset management venture that is creating simple and transparent indexfunds to help you save for your goals"
            }
          />
        </div>
        <div className="col-4">
          <Otheruni
            image={"media/images/sensibullLogo.svg"}
            para={
              "Options trading platform that lets you create strategies, analyze positions, and examinedata points like open interest, FII/DII, and more."
            }
          />
        </div>
        <div className="col-4 ">
          <Otheruni
            image={"media/images/tijori-logo.png"}
            para={
              "Investment research platformthat offers detailed insights on stocks,sectors, supply chains, and more."
            }
          />
        </div>
      </div>
      <div className="row p-5 ">
        <div className="col-4">
          <Otheruni
            image={"media/images/streakLogo.png"}
            para={
              " Systematic trading platform that allows you to create and backtest strategies without coding"
            }
          />
        </div>
        <div className="col-4">
          <Otheruni
            image={"media/images/smallcaseLogo.png"}
            para={
              "the matic investing that help of your stok  basket of stocks Options trading platform that lets you create strategies, analyze positions, and examinedata points like open interest, FII/DII, and more."
            }
          />
        </div>
        <div className="col-4 ">
          <Otheruni
            image={"media/images/dittoLogo.png"}
            para={
              " nvestment research platformthat offers detailed insights on stocks,sectors, supply chains, and more.Investment"
            }
          />
        </div>
      </div>
      <div className="row text-center">
        <div className="col">
          <button className="btn btn-primary fs-5 px-4">Sign up for free </button>
        </div>
      </div>
    </div>
  );
};

export default Universe;
