import React from "react";

const Otheruni = ({ image, para }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 p-3">
      <img
        src={image}
        alt="product"
        style={{ width: "80%", maxWidth: "200px" }}
      />
      <p className="mt-3">{para}</p>
    </div>
  );
};

export default Otheruni;
