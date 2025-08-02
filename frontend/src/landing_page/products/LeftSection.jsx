import React from "react";

const LeftSection = ({
  image,
  Productname,
  Productdescription,
  trydemo,
  learnmore,
  googleplay,
  appstore,
}) => {
  return (
    <div className="container">
      <div className="row align-items-center text-start py-5 ">
        {/* Image Section */}
        <div className="col-md-8 text-center text-md-left">
          <img
            src={image}
            alt={Productname}
            className="img-fluid"
            style={{ maxHeight: "400px" }}
          />
        </div>

        {/* Text Content */}
        <div className="col-md-4 text-md-left">
          <h3 className="fw-bold fw-4">{Productname}</h3>
          <p className="text-muted mt-3">{Productdescription}</p>

          <div className="d-flex gap-4 mt-3">
            <a href={trydemo} className="text-primary text-decoration-none">
              {trydemo}
              <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href={learnmore} className="text-primary text-decoration-none">
              {learnmore}
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="d-flex gap-3 mt-4">
            <a href={googleplay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                height="40"
              />
            </a>
            <a href={appstore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                height="40"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
