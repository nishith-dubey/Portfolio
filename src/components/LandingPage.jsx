import React, { useEffect, useState } from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { GiHamburgerMenu } from "react-icons/gi";

function LandingPage() {
  const [isSticky, setIsSticky] = useState("footer-initial");
  // const [isHomePage, setIsHomePage] = useState('footer-initial');
  const [isActive, setIsActive] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  // const [isAboutPage, setIsAboutPage] = useState('footer-initial');
  // const [isProjectPage, setIsProjectPage] = useState('footer-initial');
  const [visibleHamburgerMenu, setVisibleHamburgerMenu] = useState("hidden");
  useEffect(()=>{
    if(document.documentElement.clientWidth < 500){
      setIsMobile(true);
    }
  })
  useEffect(() => {
    const handleScroll = () => {
      let vh = document.documentElement.clientHeight;
      if(isMobile === true){
        vh = 286;
      }
      // console.log(window.scrollY);
      if (window.scrollY > 0.91*vh) {
        setIsSticky("scrolled");
        // setIsHomePage();
        // setIsAboutPage();
        // setIsProjectPage();
        setIsActive("about");
      } else {
        setIsSticky("footer-initial");
      }
      if (window.scrollY > 2.4*vh) {
        setIsActive("project");
      }
      if (window.scrollY > 3.9*vh) {
        setIsActive("contact");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        id="home"
        className="main-section w-full h-screen bg-[url('./assets/bg-real.jpg')] bg-cover text-white flex flex-col justify-between items-center"
      >
        <div className="bg-black bg-opacity-80 w-full h-screen flex flex-col justify-center items-center relative">
          <div className="stars-container opacity-70">
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
          </div>
          <div className="text-center flex flex-col justify-center items-center gap-12 leading-none px-2 sm:p-0  sm:max-w-[79vw] mt-8">
            <h1 className="text-5xl sm:text-6xl">
              Hello, I'm
              <span className="text-pink-500 font-semibold ml-3">
                Nishith Dubey
              </span>
            </h1>
            <h1 className="sm:text-center text-lg text-[#abbcc7] sm:text-xl flex flex-col items-center justify-center sm:p-0">
              I'm a Full Stack Developer with a serious passion for UI effects,
              animations and creating intuitive user experiences with highly
              scalable backend.
            </h1>
            <div className="checkout-btn border-white/50 border-solid border-2 bg-transparent transition-all ease-in-out duration-500 text-lg z-100">
            <a
              href="#projects"
              className="p-4 gap-3 flex"
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
        </div>
        <div className="footer flex flex-col items-start w-full max-w-[100vw]">
          <div className="flex gap-7 bg-black bg-opacity-95 text-lg w-full pl-4 md:pl-28 py-4 p-4 relative">
            <div
              className={`md:hidden ${visibleHamburgerMenu} flex-col pl-4 justify-center absolute bg-transparent/85 text-white w-32 h-40 bottom-[100%] left-0 transition-all duration-300 ease-in-out`}
            >
              <a href="#home" className="mb-2 border-b-[2px] border-pink-500  nk-500 w-14">HOME</a>
              <a href="#about" className="mb-2 border-b-[2px] border-pink-500 w-[58px]">ABOUT</a>
              <a href="#projects" className="mb-2 border-b-[2px] border-pink-500 w-[88px]">PROJECTS</a>
              <a href="#contact" className=" border-b-[2px] border-pink-500 w-[80px]">CONTACT</a>
            </div>
            <div
              onClick={() => {
                setVisibleHamburgerMenu((prev) =>
                  prev === "hidden" ? "flex" : "hidden"
                );
              }}
              className="cursor-pointer sm:hidden text-white text-4xl"
            >
              <GiHamburgerMenu />
            </div>
            <a
              href="#home"
              id="home-link"
              className="hidden sm:flex footer-links active"
            >
              HOME
            </a>
            <a
              href="#about"
              id="about-link"
              className="footer-links hidden sm:flex"
            >
              ABOUT
            </a>
            <a
              href="#projects"
              id="projects-link"
              className="footer-links hidden sm:flex"
            >
              PROJECTS
            </a>
            <a
              href="#contact"
              id="contact-link"
              className="footer-links hidden sm:flex"
            >
              CONTACT
            </a>
          </div>
          <div className="w-full h-[2px] bg-cyan-400"></div>
        </div>
      </div>

      <About isSticky={isSticky} isActive={isActive} isMobile={isMobile} />

      <Projects />

      <Contact />
      <Footer />
    </>
  );
}

export default LandingPage;
