import React from "react";
import Profilepic from "../assets/images/Profilepic.jpeg";

function AboutMe() {
  return (
    <div id="about-me-container">
      <p>
        A DREAM written down with a date becomes a GOAL. A GOAL broken down into
        steps becomes a PLAN. A PLAN backed by ACTION becomes a REALITY!{" "}
      </p>
      <p>
        Hello I'm a florida native that has been in the Hospitality Industry for
        over 20 years. I graduated from the State College of Florida in 2003.
        I'm currently pursing my dream to work as a Full Stack Web Developer
        with a great team that continues to exceed clients expectations.
      </p>
      <div className="aboutImg">
        <img src={Profilepic} alt="James at beach" className="image"></img>
      </div>
    </div>
  );
}

export default AboutMe;
