import React from "react";
import "./Why.css";
import bg2 from "../../Asset/bg2.mp4";
import com from "../../Asset/COM.png";

const Why = () => {
  return (
    <div className="why-wrapper">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="whyBackgrondImg"
        style={{ width: "100%", height: "100vh", objectFit: "cover" }}
      >
        <source src={bg2}></source>
      </video>

      <div className="why-text" >
        <div className="why-Container">
          <div className="why-text-container">
          <h1>WHY CHOOSE US?</h1>
          <ul>
            <li>
              <i class="fa-regular fa-circle-check"></i> &nbsp; BEST WEB
              DEVELOPMENT COMPANY IN KOLKATA{" "}
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i> &nbsp; WE HAVE BEST
              DESIGNERS AND DEVELOPERS
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i> &nbsp; WE GIVE OUR BEST
              TO COMPLETE ANY PROJECT
            </li>
          </ul>
          </div>
          <div className="why-img-container">
          <img src={com} className="why-img" />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Why;
