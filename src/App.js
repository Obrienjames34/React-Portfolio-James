import "./App.css";
import React, { useState } from "react";
import logo from "./logo.svg";
import Nav from "./components/Nav";
import Portfolio from "./components/portfolio";
import Resume from "./components/resume";
import Footer from "./components/Footer";
import Technolgies from "./components/technolgies";
import AboutMe from "./components/about";

function App() {
  const [currentPage, setCurrentPage] = useState(
    "Im the Goat Coder of all time!"
  );
  return (
    <div className="app-container">
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-container">
        {currentPage === "about" && <AboutMe />}
        {currentPage === "portfolio" && <Portfolio />}
        {currentPage === "resume" && <Resume />}
        {currentPage === "technologies" && <Technolgies />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
