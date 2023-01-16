import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import me from "../assests/Raj.jpg";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="about"
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <div className="upper2">
        <img src={me} alt="Raj kumar ray" />
        <div className="text">
          I am Raj, A software developer based out of Odisha, India. I am
          pursuing my Bachelor's of Technology in Computer Science & Engineering
          from Dhaneswar Rath Institute of Engineering and Management Studies,
          Odisha. I have very keen interest in Machine Learning, Web
          Developement and Competitive Programming. Currently I am working as a
          Problem Setter Intern - Coding at ImochaWorks and also working as a
          Lead Doubt Solver at CodeChef (Unacademy).
          <div className="signature">
            <h3>Raj kumar ray</h3>
            <h5>Software Developer</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
