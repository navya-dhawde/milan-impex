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
              <img src={insta} alt="Instagram" />
              <img src={linkedin} alt="LinkedIn" />
              <img src={facebook} alt="Facebook" />
              <img src={twitter} alt="Twitter" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h2 className="footer-heading">Do You Have Any Question? Please Contact 
Our Team</h2>

          <h4 className="footer-subheading">Contact Persons</h4>
          <ul className="contact-list">
            <li><strong>Mr. Rajesh Milan</strong> — +91 98765 43210 | rajesh@milanimpex.com</li>
            <li><strong>Ms. Priya Shah</strong> — +91 99887 66554 | priya@milanimpex.com</li>
            <li><strong>Mr. Amit Patel</strong> — +91 87654 32109 | amit@milanimpex.com</li>
            <li><strong>Ms. Neha Verma</strong> — +91 99000 11223 | neha@milanimpex.com</li>
          </ul>

          <h4 className="footer-subheading">Address</h4>
          <div className="address-section">
            <p><strong>Factory:</strong> GIDC Industrial Estate, Ahmedabad, Gujarat, India</p>
            <p><strong>Office:</strong> 4th Floor, Milan Impex House, CG Road, Ahmedabad, Gujarat</p>
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
