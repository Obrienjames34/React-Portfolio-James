import React from "react";
import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/Githublogo.png";

function Footer() {
  return (
    <footer>
      <div className="footerDiv">
        <a href="http://www.linkedin.com/in/james-o-brien-3841a295/">
          <img
            src={linkedin}
            width="30px"
            height="30px"
            alt="Linkedin logo"
          ></img>
        </a>
        <a href="https://www.github.com/Obrienjames34/">
          <img src={github} width="30px" height="30px" alt="Github logo"></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
