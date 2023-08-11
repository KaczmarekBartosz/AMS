import React, { useState } from "react";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";

import "./Header.css";

function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const handleNavLinkClick = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <header
      id="header"
      className={`fixed-top ${isMobileNavOpen ? "navbar-mobile" : ""}`}
    >
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <a href="index.html">AMS</a>
        </h1>
        <nav
          id="navbar"
          className={`navbar ${isMobileNavOpen ? "navbar-mobile" : ""}`}
        >
          <ul>
            <li>
              <a
                className="nav-link scrollto active"
                href="#hero"
                onClick={handleNavLinkClick}
              >
                Strona główna
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="#about"
                onClick={handleNavLinkClick}
              >
                O warsztacie
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="#services"
                onClick={handleNavLinkClick}
              >
                Usługi
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="#contact"
                onClick={handleNavLinkClick}
              >
                Umów wizytę
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="#contact"
                onClick={handleNavLinkClick}
              >
                Kontakt
              </a>
            </li>
          </ul>
          <i
            className={`mobile-nav-toggle ${
              isMobileNavOpen ? "close-icon" : "menu-icon"
            }`}
            onClick={handleMobileNavToggle}
          >
            {isMobileNavOpen ? <IoCloseSharp /> : <IoMenuSharp />}
          </i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
