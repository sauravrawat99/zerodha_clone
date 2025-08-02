import React from "react";

const RightSection = ({
  image,
  Productdescription,
  Productname,
  learnmore,
}) => {
  return (
    <div className="container">
      <div className="row items-center align-items-center p-t">
        {/* Text Content */}
        <div className="col-md-5 text-start px-5">
          <h3 className="fw-bold fw-4">{Productname}</h3>
          <p className="text-muted mt-3">{Productdescription}</p>

          <div className="d-flex gap-4 mt-3">
            <a href={learnmore} className="text-primary text-decoration-none">
              {learnmore}
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        {/* Image Section */}
        <div className="col-md-7 text-center  ">
          <img
            src={image}
            alt={Productname}
            className="img-fluid"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
