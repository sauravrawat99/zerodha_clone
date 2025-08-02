import React, { useState } from "react";

const CreatTicket = ({ logo, title, links }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 border p-3 mb-4 bg-white rounded start-left">
          <div
            className="d-flex justify-content-between align-items-center"
            onClick={() => setOpen(!open)}
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex align-items-center gap-2">
              <span className="bg-light">{logo}</span>
              <h5 className="m-0">{title}</h5>
            </div>

            <div>
              {open ? (
                <i className="fa-solid fa-angle-up"></i>
              ) : (
                <i className="fa-solid fa-angle-down"></i>
              )}
            </div>
          </div>

          {open && (
            <ul className="mt-3" style={{ color: "blue" }}>
              {links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-decoration-none hover-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatTicket;
