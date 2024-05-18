import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h2 className="logo">Your Website</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus ipsa tempore, maxime quo debitis ab illo velit
              laboriosam, doloribus quis adipisci corrupti optio quas minus
              dolorem dolorum sit placeat inventore?
            </p>
            <div className="contact">
              <span>Contact Us:</span>
              <p>Email: contact@example.com</p>
              <p>Phone: +1234567890</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Your Website. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
