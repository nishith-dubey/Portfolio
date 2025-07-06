import React, { useEffect, useState, useRef, lazy, Suspense } from "react";
import Footer from "./Footer";
import { GiHamburgerMenu } from "react-icons/gi";
import { AnimatedText } from "./AnimatedText";

const About = lazy(() => import("./About"));
const Projects = lazy(() => import("./Projects"));
const Contact = lazy(() => import("./Contact"));

const throttle = (func, limit) => {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

function LandingPage() {
  const [navClass, setNavClass] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!homeRef.current) return;

      const scrollY = window.scrollY;
      const homeHeight = homeRef.current.offsetHeight;
      if (scrollY > homeHeight - 79.5) {
        // Stick a little before the exact bottom
        setNavClass("navbar-sticky");
      } else {
        setNavClass("");
      }

      const sectionPositions = {
        home: homeRef.current.offsetTop,
        about: aboutRef.current.offsetTop,
        projects: projectsRef.current.offsetTop,
        contact: contactRef.current.offsetTop,
      };

      let currentSection = "home";
      // Check from bottom to top
      if (scrollY >= sectionPositions.contact - window.innerHeight / 10) {
        currentSection = "contact";
      } else if (
        scrollY >=
        sectionPositions.projects - window.innerHeight / 10
      ) {
        currentSection = "projects";
      } else if (scrollY >= sectionPositions.about - window.innerHeight / 10) {
        currentSection = "about";
      } else {
        currentSection = "home";
      }
      setActiveSection(currentSection);
    };

    // throttle interval in ms
    const throttledScrollHandler = throttle(handleScroll, 100);

    window.addEventListener("scroll", throttledScrollHandler);
    return () => window.removeEventListener("scroll", throttledScrollHandler);
  }, []);

  const navLinks = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "projects", label: "PROJECTS" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <>
      <div
        id="home"
        ref={homeRef}
        className="main-section w-full h-screen bg-[url('./assets/bg-real.webp')] bg-cover text-white flex flex-col justify-between items-center bg-black bg-fixed"
      >
        <div className="bg-black bg-opacity-80 w-full h-screen flex flex-col justify-center items-center relative">
          <div className="stars-container opacity-60 lg:opacity-70 ml-[300px] mt-[50px] md:ml-0 md:mt-0">
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
          </div>
          <div className="text-center flex flex-col justify-center items-center gap-12 leading-none px-2 sm:p-0 sm:max-w-[79vw] mt-8 z-[100]">
            <h1 className="flex flex-col sm:flex-row items-center justify-center flex-wrap">
              <span className="text-4xl sm:text-6xl sm:inline block">Hello, I'm</span>
              <AnimatedText
                text="Nishith Dubey"
                className="text-pink-500 font-semibold sm:ml-3 text-5xl sm:text-6xl py-2"
              />
            </h1>
            <h1 className="sm:text-center text-lg text-[#abbcc7] sm:text-xl flex flex-col items-center justify-center sm:p-0 max-w-[75vw]">
              I'm a Full Stack Developer with a serious passion for UI effects,
              animations and creating intuitive user experiences with highly
              scalable backend.
            </h1>
            <div className="checkout-btn border-white/50 border-solid border-2 bg-transparent transition-all ease-in-out duration-500 text-lg z-100 items-center">
              <a href="#projects" className="p-4 gap-3 flex items-center">
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
        </div>

        <div className={`w-full ${navClass}`}>
          <div className="flex flex-col items-start w-full max-w-[100vw]">
            <div className="flex gap-7 bg-black bg-opacity-90 text-lg w-full pl-10 md:pl-28 py-4 p-4 relative">
              <div
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="cursor-pointer sm:hidden text-white text-4xl z-20"
              >
                <GiHamburgerMenu />
              </div>

              {isMobileMenuOpen && (
                <div
                  className="md:hidden flex flex-col absolute bg-black/90 backdrop-blur-sm text-white w-40 py-2 rounded-md bottom-full left-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      className={`p-2 transition-colors ${
                        activeSection === link.id ? "text-pink-500" : ""
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}

              <div className="hidden sm:flex gap-7">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`footer-links ${
                      activeSection === link.id ? "active" : ""
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="w-full h-[2px] bg-cyan-400"></div>
          </div>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <div ref={aboutRef} id="about">
          <About />
        </div>
        <div ref={projectsRef} id="projects">
          <Projects />
        </div>
        <div ref={contactRef} id="contact">
          <Contact />
        </div>
      </Suspense>

      <Footer />
    </>
  );
}

export default LandingPage;
