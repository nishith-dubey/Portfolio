import React from "react";
import About from "./About";
import Projects from "./Projects";

const firstSection = document.querySelector(".main-section");
document.addEventListener("scroll", () => {
    const footer = document.querySelector(".footer1");
    let y = firstSection.getBoundingClientRect().y;
    if(y < -590){
        footer.classList.add('scrolled');
        footer.classList.remove('footer-initial');
    }
    else {
        footer.classList.add('footer-initial');
        footer.classList.remove('scrolled');
    }
})
document.addEventListener('scroll', () => {
    const home = document.getElementById('home-link');
    const about = document.getElementById('about-link1');
    const projects = document.getElementById('projects-link1');
    const contact = document.getElementById('contact-link1');
    let y = firstSection.getBoundingClientRect().y;
    console.log(y);
    
    if(y > -590){
        home.classList.add('active');
        about.classList.remove('active');
        projects.classList.remove('active');
        contact.classList.remove('active');
    }
    else if(y < -590 && y >= -1578){
        about.classList.add('active');
        home.classList.remove('active');
        projects.classList.remove('active');
        contact.classList.remove('active');
    }
    else if(y < -1578) {
        about.classList.remove('active');
        home.classList.remove('active');
        projects.classList.add('active');
        contact.classList.remove('active');
    }
})

  

function LandingPage() {
  return (
    <>
      <div
  id="home"
  className="main-section w-full h-screen bg-[url('./assets/bg-real.jpg')] bg-cover text-white flex flex-col justify-between items-center"
>
  <div className="bg-black bg-opacity-80 w-full h-screen flex flex-col justify-center items-center">
    <div className="stars-container">
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
    </div>
    <div className="flex flex-col justify-center items-center gap-12 leading-none max-w-[65vw] mt-8">
      <h1 className="text-6xl">
        Hello, I'm
        <span className="text-pink-600 font-semibold ml-3">Nishith Dubey</span>
      </h1>
      <h1 className="text-xl flex flex-col items-center justify-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        corporis repellat, quibusdam .
        <span>Lorem ipsum dolor sit amet.</span>
      </h1>
      <a
        href="#projects"
        className="checkout-btn border-white/50 border-solid border-2 bg-transparent p-4 text-lg flex gap-3 z-100"
      >
        Check out my work
        <svg
          className="arrow h-8 w-8 text-white"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1="5" y1="12" x2="19" y2="12" />
          <line x1="13" y1="18" x2="19" y2="12" />
          <line x1="13" y1="6" x2="19" y2="12" />
        </svg>
      </a>
    </div>
  </div>
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
    </div>
    <div className="w-full h-[2px] bg-cyan-400"></div>
  </div>
</div>


      <About/>

      <Projects/>
    </>
  );
}

export default LandingPage;
