import React from "react";
import "./Who.css";
import bg2 from "../../Asset/bg2.mp4";
import glob from "../../Asset/glob.png";

const Who = () => {
  return (
    <>
      <div className="who-wrapper">
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        >
          <source src={bg2}></source>
        </video> */}
        <div className="who-content">
          <img src={glob} alt="Globe" className="img" />
          <div className="who-text">
            <h1>WHO WE ARE ?</h1>
            <h3>
              We are a global creative agency that combines design expertise
              with technology and intelligence to revolutionize your business.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Who;
