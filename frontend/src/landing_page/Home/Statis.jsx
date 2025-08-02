import React from "react";

const Statis = () => {
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-6">
          <h2 className="pb-4">Trust with confidance</h2>

          <div>
            <h3 className="fw-normal">The Zerodha universe</h3>
            <p>
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>

          <div className="">
            <h3 className="fw-normal">Customer-first always</h3>
            <p>
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India
            </p>
          </div>
          <div className="">
            <h3 className="fw-normal">Do better with money</h3>
            <p>
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
          <div className="fw-normal">
            <h3 className="fw-normal">No spam or gimmicks</h3>
            <p>
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like. Our
              philosophies.
            </p>
          </div>
        </div>
        <div className="col-6">
          <img
            src="media\images\ecosystem.png"
            alt="ecosystem"
            style={{ width: "29rem" }}
          />
          <p className="text-center">
            <a href="#" className="text-decoration-none">
              Explore our products<i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#" className="text-decoration-none p-3 ">
              Try Kite demo<i class="fa-solid fa-arrow-right"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statis;
