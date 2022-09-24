import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  const [currentPage, setCurrentPage] = useState(
    "Im the Goat Coder of all time!"
  );
  return <Nav setCurrentPage={setCurrentPage} currentPage={currentPage} />;
  <div className="app-container">
    <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
    <main className="main-container">
      {currentPage === "about" && <About />}
      {currentPage === "portfolio" && <Portfolio />}
      {currentPage === "resume" && <Resume />}
      {currentPage === "contact" && <Contact />}
    </main>
    <Footer />
  </div>;
}

export default App;
