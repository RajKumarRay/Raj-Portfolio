import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import react from "../assests/react.jpg";
import node from "../assests/node.png";
import mongo from "../assests/mongo.png";
import express from "../assests/express.png";
import python from "../assests/python.jpg";
import cplus from "../assests/cplus.png";
import ml from "../assests/ml.jpg";
import dl from "../assests/dl.jpg";
const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="skills"
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <h2>Things I know!</h2>
      <div className="skillupper">
        <div
          className="reactjs"
          data-aos="zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <img className="imgskill" src={react} alt="React" />
          <h4>React Js</h4>
        </div>
        <div
          className="reactjs"
          data-aos="zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <img className="imgskill" src={node} alt="node" />
          <h4>Node Js</h4>
        </div>
        <div
          className="reactjs"
          data-aos="zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <img className="imgskill" src={express} alt="Express" />
          <h4>Express Js</h4>
        </div>
        <div
          className="reactjs"
          data-aos="zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <img className="imgskill" src={ml} alt="ML" />
          <h4>Machine learning</h4>
        </div>
        <div
          className="reactjs"
          data-aos="zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <img className="imgskill" src={mongo} alt="mongo" />
          <h4>MongoDB</h4>
        </div>
        <div
          className="reactjs"
          data-aos="zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <img className="imgskill" src={python} alt="python" />
          <h4>Python</h4>
        </div>
        <div
          className="reactjs"
          data-aos="zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <img className="imgskill" src={cplus} alt="cplus" />
          <h4>C++</h4>
        </div>
        <div
          className="reactjs"
          data-aos="zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <img className="imgskill" src={dl} alt="dL" />
          <h4>Deep Learning</h4>
        </div>
      </div>
    </div>
  );
};

export default Skills;
