import React from "react";
import Carousel from "react-bootstrap/Carousel";
import code1 from "../../Asset/Fut.mp4";
import exp from "../../Asset/experience.png";
import ImprationImg1 from "../../Asset/ustify Imges/image.png";
import ImprationImg2 from "../../Asset/ustify Imges/image 2.png";
import ImprationImg3 from "../../Asset/ustify Imges/image 3.png";
import "./Main.css";

const Main = () => {
  return (
    <>
      <div className="car-wrapper">
        <Carousel indicatorLabels={false} indicators={false}>
          <Carousel.Item>
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%", height: "100vh", objectFit: "cover" }}
            >
              <source src="https://luckytiwary.in/wp-content/uploads/2022/10/vecteezy_circuit-board-with-a-central-computer-processors-cpu-a_7237672_216.mp4"></source>
            </video>
          </Carousel.Item>
          <Carousel.Item>
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%", height: "100vh", objectFit: "cover" }}
            >
              <source src={code1}></source>
            </video>
          </Carousel.Item>
          <Carousel.Item>
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%", height: "100vh", objectFit: "cover" }}
            >
              <source src={code1}></source>
            </video>
          </Carousel.Item>
        </Carousel>
        <div className="back"></div>
        <div className="top-hading-wraper">
        <div className="main-text">
          <h1>Get Your Creative</h1>
        </div>
        <div className="main-text-animate">
          <div className="text-animate">
            <h2>website desgin</h2>
            <h2>UX UI desgin</h2>
            <h2>Application</h2>
          </div>
        </div>
        <div className="Imprasion">
          <div className="Impration-Image">
            <img src={ImprationImg1} alt="Impration Image 1" />
            <img src={ImprationImg2} alt="Impration Image 2" />
            <img src={ImprationImg3} alt="Impration Image 3" />
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Main;
