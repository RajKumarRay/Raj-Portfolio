import React from "react";
import { SocialIcon } from "react-social-icons";
const Contact = () => {
  return (
    <div id="contact">
      <div className="uppercontact">
        <div className="names">
          <SocialIcon
            className="icons"
            style={{ height: 60, width: 60 }}
            fgColor="#fff"
            url="https://www.linkedin.com/in/raj2001/"
          />
          <div>Linkedin</div>
        </div>
        <div className="names">
          <SocialIcon
            className="icons"
            style={{ height: 60, width: 60 }}
            bgColor="#fff"
            fgColor="black"
            url="https://github.com/RajKumarRay"
          />
          <div>Github</div>
        </div>
        <a className="acontact" href="mailto:rray68896@gmail.com">
          EMAIL
        </a>
        <a className="acontact" href="tel:+91 637156197">
          Call Me
        </a>
      </div>
    </div>
  );
};

export default Contact;
