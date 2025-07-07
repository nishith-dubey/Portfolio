import React from "react";

function Navbar() {
  return (
    <div className="footer flex flex-col items-start w-full">
      <div className="flex gap-7 bg-black bg-opacity-95 text-lg w-full pl-28 py-4 p-4">
        <a href="#home" id="home-link" className="footer-links active">
          HOME
        </a>
        <a href="#about" id="about-link" className="footer-links">
          ABOUT
        </a>
        <a href="#projects" id="projects-link" className="footer-links">
          PROJECTS
        </a>
        <a href="#contact" id="contact-link" className="footer-links">
          CONTACT
        </a>
        <a href="#contact" id="contact-link" className="footer-links">
          CONTACT
        </a>
      </div>
      <div className="w-full h-[2px] bg-cyan-400"></div>
    </div>
  );
}

export default Navbar;
