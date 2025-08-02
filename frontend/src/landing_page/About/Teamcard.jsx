import React, { useState } from "react";

const Teamcard = ({ name, role, bio, image }) => {
  const [showBio, setShowBio] = useState(false);

  return (
    <div className="col-6 p-5 text-center" style={{ width: "18rem" }}>
      <img
        src={image}
        alt={name}
        style={{
          borderRadius: "100%",
          width: "100%",
          objectFit: "cover",
        }}
      />
      <h3 className="Text-center fw-normal pt-3">{name}</h3>
      <p className="Text-center">{role}</p>

      <p
        onClick={() => setShowBio(!showBio)}
        style={{
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          color: "#565757ff", // blue color like Bootstrap
          fontWeight: "500",
        }}
      >
        <span>Bio</span>
        {showBio ? (
          <i className="fa-solid fa-angle-up"></i>
        ) : (
          <i className="fa-solid fa-angle-down"></i>
        )}
      </p>

      {showBio && <p className="text-center">{bio}</p>}
    </div>
  );
};

export default Teamcard;
