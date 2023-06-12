import React from "react";
import "../styles/Photo.css";

import myPhoto from "../assets/images/My-photo.png";

function Photo() {
  return (
    <div className="photo-container">
      <img src={myPhoto} alt="My photo" />
    </div>
  );
}

export default Photo;
