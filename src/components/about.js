import React from "react";
import denver from "../assets/images/robert-denver.jpg";

function aboutMe() {
  return (
    <div id="about-me-container">
      <p>
        Hello I'm a florida native that has been in the Hospitality industry for
        over 20 years. I graduated from the State College of Florida in 2003.
        I'm currently pursing my dream to work as a Full Stack Web Developer
        with a great team that continues to exceed clients expectations.
      </p>
      <div className="aboutImg">
        <img src={denver} alt="robert in denver" className="image"></img>
      </div>
    </div>
  );
}

export default aboutMe;
