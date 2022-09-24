import React from "react";
function Nav({ currentPage, setCurrentPage }) {
  return (
    <section id="JamesOBrien" className="name">
      <h1>James O'Brien</h1>
      <ul>
        <li onClick={() => console.log(currentPage)}>James O'Brien</li>
      </ul>
    </section>
  );
}
export default Nav;
