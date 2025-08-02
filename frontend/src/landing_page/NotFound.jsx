import React from "react";
import { Link } from "react-router-dom";
// import HomePage from "./Home/HomePage";

const NotFound = () => {
  return (
    <div style={{ padding: "100px", textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry! The page you are looking for doesn't exist.</p>
      <Link className="nav-link" to="/">
        Zerodha’s home page
        <br />
        <img
          src="media/images/logo.svg"
          alt="HomePage"
          style={{ width: "10rem" }}
        />
      </Link>
    </div>
  );
};

export default NotFound;
