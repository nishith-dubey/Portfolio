import React, { useEffect, useState } from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
  

function LandingPage() {
  const [isSticky, setIsSticky] = useState('footer-initial');
  // const [isHomePage, setIsHomePage] = useState('footer-initial');
  const [isActive, setIsActive] = useState('home');
  // const [isAboutPage, setIsAboutPage] = useState('footer-initial');
  // const [isProjectPage, setIsProjectPage] = useState('footer-initial');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 590.5) {
        setIsSticky('scrolled');
        // setIsHomePage();
        // setIsAboutPage();
        // setIsProjectPage();
        setIsActive('about');
      } 
      else {
        setIsSticky('footer-initial');
        setIsHomePage();
        setIsAboutPage();
        setIsProjectPage();
      }
      if(window.scrollY > 1577){
        setIsActive('project');
      }
      if(window.scrollY > 2558){
        setIsActive('contact')
      }
      console.log(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div className="flex flex-col justify-center items-center gap-12 leading-none max-w-[79vw] mt-8">
      <h1 className="text-6xl">
        Hello, I'm
        <span className="text-pink-600 font-semibold ml-3">Nishith Dubey</span>
      </h1>
      <h1 className="text-xl flex flex-col items-center justify-center">
      I'm a Full Stack Developer with a serious passion for UI effects, animations and creating intuitive user experiences
        <span>with highly scalable backend.</span>
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


      <About isSticky={isSticky} isActive={isActive}/>

      <Projects/>

      <Contact/>
      <Footer/>
    </>
  );
}

export default LandingPage;
