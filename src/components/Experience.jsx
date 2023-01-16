import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import codechef from "../assests/codechef1.jpg";
import imocha from "../assests/imocha.png";
<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />;
// import Bounce from "react-reveal/Bounce";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="experience"
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <h2>Work Experience</h2>
      <div className="Expupper">
        {/* <Bounce left> */}
        <div className="firstexp" data-aos="fade-right">
          <div className="data">
            <div className="date">APRIL 2022 - PRESENT</div>
            <div className="headexp">
              Lead Doubt Solver in C, C++ <hr />
            </div>
            <div className="work">
              Solve the doubts of the users while solving beginner level to 3*
              level problems (0 - 1799) so that they are able to make a
              successful submission for the problem. Answer general queries from
              the users about how to improve their CodeChef / Competitive
              programming / Learning journeys.
            </div>
          </div>
          <img className="imgcc imgexp1" src={codechef} alt="codechef" />
        </div>
        {/* </Bounce> */}
        <div
          className="firstexp"
          data-aos="fade-left"
          // data-aos="fade-up"
          // data-aos-anchor-placement="top-center"
        >
          <img className="imgcc imgexp2" src={imocha} alt="imcoha" />
          <div className="data">
            <div className="date">SEPTEMBER 2022 - PRESENT</div>
            <div className="headexp hexp2">
              Problem setter Intern - Coding <hr />
            </div>
            <div className="work">
              Creating new DSA problems that imocha uses for its library and
              Hiring Challenges of various companies like Wipro, Capgemini,
              Ericson, etc. Implemented the entire problem setting cycle writing
              a well-defined problem statement, defining constraints, creating
              test cases along with working code for the problem.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
