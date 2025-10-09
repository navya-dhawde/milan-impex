import { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    const section = document.querySelector(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="company-name">Milan Impex</span>
      </div>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
        <div className="nav-panel">
          <a href="#home" className="nav-btn" onClick={(e) => handleScroll(e, "#home")}>
            Home
          </a>
          <a href="#about" className="nav-btn" onClick={(e) => handleScroll(e, "#about")}>
            About Us
          </a>
          <a href="#products" className="nav-btn" onClick={(e) => handleScroll(e, "#products")}>
            Products
          </a>
          <a href="#contact" className="nav-btn" onClick={(e) => handleScroll(e, "#contact")}>
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
