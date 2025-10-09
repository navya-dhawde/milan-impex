import React from "react";
import "../styles/Home.css";
import logo from "../assets/darklogo.png";
import insta from "../assets/insta.png";
import linkedin from "../assets/link.png";
import facebook from "../assets/face.png";
import twitter from "../assets/twit.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Left Section */}
        <div className="footer-left">
          <div className="footer-logo-section">
            <img src={logo} alt="Milan Impex" className="footer-logo" />
            {/* <h2>Milan Impex</h2>
            <p>Import · Manufacture · Innovate</p> */}
          </div>

<div className="footer-socials">
  <h4>Socials</h4>
  <div className="social-icons">
    <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
      <img src={insta} alt="Instagram" />
    </a>
    <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
      <img src={linkedin} alt="LinkedIn" />
    </a>
    <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
      <img src={facebook} alt="Facebook" />
    </a>
    <a href="https://www.twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
      <img src={twitter} alt="Twitter" />
    </a>
  </div>
</div>

        </div>

        {/* Right Section */}
<div className="footer-right">
  <h2 className="footer-heading">
    Do You Have Any Question? Please Contact Our Team
  </h2>

  <h4 className="footer-subheading">Contact Persons</h4>
  <ul className="contact-list">
    <li>
      <strong>Rajesh Agarwal</strong> — +91 9811035445 | rajesh@milanimpex.in
    </li>
    <li>
      <strong>Shalabh Golchha</strong> — +91 9873990851 | shalabh@milanimpex.in
    </li>
    <li>
      <strong>Anubhav Agarwal</strong> — +91 9899135445 | anubhav@milanimpex.in
    </li>
    <li>
      <strong>Tanuj Agarwal</strong> — +91 9971125445 | tanuj@milanimpex.in
    </li>
  </ul>

  <h4 className="footer-subheading">Address</h4>
  <div className="address-section">
    <p>
      <strong>Factory:</strong> Killa No. 75/8/2/9/1, Village Kamshpur, Sonipat 131001, Haryana, India
    </p>
    <p>
      <strong>Corporate Office:</strong> F-48, Sector-41, Noida 20103, Uttar Pradesh, India
    </p>
  </div>
</div>

      </div>

      {/* Divider and Bottom Section */}
      <div className="footer-divider"></div>
      <p className="footer-bottom-text">© 2025 Milan Impex. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
