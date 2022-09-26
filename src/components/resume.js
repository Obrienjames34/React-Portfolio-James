import React from "react";
import resume from "../assets/images/Resume 2022.pdf";
function Resume() {
  return (
    <div id="resume-section">
      <h2>Download My Resume Here!</h2>
      <br></br>
      <button type="button" className="submit-btn resume-btn">
        <a href={resume}>Download!</a>
      </button>
    </div>
  );
}

export default Resume;
