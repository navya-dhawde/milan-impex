import { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png"; // your logo

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="company-name">Milan Impex</span>
      </div>

      {/* Hamburger Icon */}
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
          <a href="#home" className="nav-btn" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#about" className="nav-btn" onClick={() => setMenuOpen(false)}>
            About Us
          </a>
          <a href="#products" className="nav-btn" onClick={() => setMenuOpen(false)}>
            Products
          </a>
          <a href="#footer" className="nav-btn" onClick={() => setMenuOpen(false)}>
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
