import React from "react";
function Nav() {
  return (
    <section id="JamesOBrien" className="name">
      <h1>James O'Brien</h1>
      <ul>
        <li onClick={() => console.log("Hello World")}>James O'Brien</li>
      </ul>
    </section>
  );
}
export default Nav;
