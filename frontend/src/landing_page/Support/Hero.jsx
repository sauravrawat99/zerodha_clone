import React from "react";

const Hero = () => {
  return (
    <div
      className="w-100"
      style={{ backgroundColor: "#f7f7f7", padding: "40px 0", marginBottom:"2%"}}
    >
      <div className="container px-4">
        <div className="d-flex justify-content-between align-items-center mb-4  flex-wrap gap-3">
          <h1 className="fw-bold m-0">Support Portal</h1>
          <button className="btn btn-primary px-4 py-2 fw-semibold">
            My tickets
          </button>
        </div>

        <div className="input-group shadow-sm rounded">
          <span className="input-group-text bg-white border-end-0">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Eg: How do I open my account, How do I activate F&O..."
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
