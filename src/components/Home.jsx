import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import me from "../assests/Raj.jpg";

const Home = () => {
  const animations = {
    div: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        {/* <div> */}
        <motion.div {...animations.div} className="heading">
          Hi, I Am <br /> Raj Kumar Ray.
          <hr />
        </motion.div>

        <Typewriter
          options={{
            strings: [
              "Machine Learning Engineer",
              "Web Developer",
              "Competitive Programmer",
            ],
            autoStart: true,
            loop: true,
            cursor: "",
            wrapperClassName: "typewriterpara",
          }}
        />
        {/* </div> */}
      </section>
      <section>
        <img className="img1" src={me} alt="Raj kumar ray" />
      </section>
    </div>
  );
};

export default Home;
