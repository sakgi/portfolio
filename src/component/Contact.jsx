import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          
          <a href="https://www.linkedin.com/in/sakshi-rajurkar-7a1105253/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          
          <a href="https://github.com/sakgi" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
         <a
  href="mailto:srajurkar614@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="items"
>
  <SiGmail className="icons" />
</a>


        </div>
      </div>
    </>
  );
};

export default Contact;