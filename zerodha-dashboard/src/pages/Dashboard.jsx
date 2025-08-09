// import React from "react";

// const Dashboard = () => {
//   return (
//     <>
//       <h1>dashboardpage</h1>
//     </>
//   );
// };

// export default Dashboard;
import React from "react";

const Dashboard = () => {
  return (
    <div
      className="container"
      style={{ fontWeight: "lighter", textDecoration: "none" }}
    >
      <div className="row p-2 mb-5 " style={{ fontWeight: "lighter" }}>
        <h1 className="">Hi, Saurav</h1>
      </div>
      <div className="row m-5">
        <div className="col lh-1">
          <p className="mb-0 pb-0">
            <span className="me-2">
              <i className="fa-solid fa-chart-pie"></i>
            </span>
            Equity
          </p>
          <h1 className="display-1 fw-light mb-0">1L</h1>
          <p className="mb-0 pb-0 text-muted">margin available</p>
        </div>
        <div className="col">
          <p>Margins used 0</p>
          <p>Opening balance 1L</p>
          <a href="#" target="" style={{ textDecoration: "none" }}>
            {" "}
            View statement
          </a>
        </div>
        <div className="col lh-1">
          <p className="mb-0 pb-0">
            <span className="me-2">
              <i className="fa-solid fa-chart-pie"></i>
            </span>
            commodity
          </p>
          <h1 className="display-0.7 fw-light mb-0">50k </h1>
          <p className="mb-0 pb-0 text-muted">margin available</p>
        </div>{" "}
        <div className="col">
          <p>Margins used 0</p>
          <p>Opening balance 1L</p>
          <a href="#" target="" style={{ textDecoration: "none" }}>
            {" "}
            View statement
          </a>
        </div>{" "}
      </div>
      <div className="row m-5 py-5">
        <div className="col lh-1">
          <p className="mb-0 pb-0">
            <span className="me-2">
              <i className="fa-solid fa-chart-pie"></i>
            </span>
            Equity
          </p>
          <h1
            className="display-1 fw-light mb-0"
            style={{ color: "lightgreen" }}
          >
            2.2K <span style={{ fontSize: "10px" }}>+16.90%</span>
          </h1>
          <p className="mb-0 pb-0 text-muted">margin available</p>
        </div>{" "}
        <div className="col py-5">
          <p>Current value 15.46k</p>
          <p>Investment 13.23k</p>
        </div>
        <div className="col">
          <img
            src="\images\Screenshot (49).png"
            alt="refer"
            style={{ width: "200px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
