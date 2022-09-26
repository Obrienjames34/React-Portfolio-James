import React from "react";
function Nav({ setCurrentPage }) {
  return (
    <header>
      <h1>James O'Brien</h1>
      <ul className="navList">
        <li onClick={() => setCurrentPage("about")}>About me</li>
        <li onClick={() => setCurrentPage("portfolio")}>Portfolio</li>
        <li onClick={() => setCurrentPage("resume")}>Resume</li>
        <li onClick={() => setCurrentPage("technologies")}>Technolgies</li>
      </ul>
    </header>
  );
}
export default Nav;
