import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Hero from "./Hero";
import Otheruni from "./Otheruni";

const Productpage = () => {
  return (
    <>
      <Hero />

      <LeftSection
        image="media/images/kite.png"
        Productname="Kite"
        Productdescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        trydemo="Try demo "
        learnmore="Learn more"
        googleplay="media/images/googlePlayBadge.svg"
        appstore="media/images/appstoreBadge.svg"
      />

      <RightSection
        image={"media/images/console.png"}
        Productname={"console"}
        Productdescription={
          "The central dashboard for your Zerodha account.Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        learnmore={"Learn more"}
      />
      <LeftSection
        image={"media/images/coin.png"}
        Productname={"Coin"}
        Productdescription={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        }
        trydemo={"Coin"}
      />
      <RightSection
        image={"media/images/kiteconnect.png"}
        Productname={"Kite Connect API"}
        Productdescription={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
        learnmore={"Kite Connect"}
      />
      <LeftSection
        image={"media/images/varsity.png"}
        Productname={"Varsity mobile"}
        Productdescription={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
      />
      <Universe />
    </>
  );
};

export default Productpage;
