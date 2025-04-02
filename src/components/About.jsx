import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function About({ isSticky, isActive, isMobile }) {
  const [visibleHamburgerMenu, setVisibleHamburgerMenu] = useState("hidden");

  return (
    <div
      id="about"
      className="second-section w-full h-[150vh] bg-[url('./assets/bg2.jpg')] bg-cover bg-fixed text-white flex flex-col justify-center items-center"
    >
      <div className={`footer1 fixed ${isSticky} top-0`}>
        <div className="flex relative z-50 gap-7 bg-black bg-opacity-95 text-lg w-full pl-28 py-4 p-4">
          <div
            className={`md:hidden ${visibleHamburgerMenu} flex-col pl-5 justify-center absolute bg-transparent/85 text-white w-32 h-40 top-[100%] left-50 transition-all duration-300 ease-in-out z-40`}
          >
            <a
              href="#home"
              className="mb-2 border-b-[2px] border-pink-500  nk-500 w-14"
            >
              HOME
            </a>
            <a
              href="#about"
              className="mb-2 border-b-[2px] border-pink-500 w-[58px]"
            >
              ABOUT
            </a>
            <a
              href="#projects"
              className="mb-2 border-b-[2px] border-pink-500 w-[88px]"
            >
              PROJECTS
            </a>
            <a
              href="#contact"
              className=" border-b-[2px] border-pink-500 w-[80px]"
            >
              CONTACT
            </a>
          </div>
          <div
            onClick={() => {
              setVisibleHamburgerMenu((prev) =>
                prev === "hidden" ? "flex" : "hidden"
              );
            }}
            className="cursor-pointer sm:hidden text-white text-4xl pl-5"
          >
            <GiHamburgerMenu />
          </div>
          <a
            href="#home"
            id="home-link"
            className="hidden sm:flex footer-links"
          >
            HOME
          </a>
          <a
            href="#about"
            id="about-link1"
            className={`hidden sm:flex footer-links ${
              isActive == "about" && "active"
            }`}
          >
            ABOUT
          </a>
          <a
            href="#projects"
            id="projects-link1"
            className={`hidden sm:flex footer-links ${
              isActive == "project" && "active"
            }`}
          >
            PROJECTS
          </a>
          <a
            href="#contact"
            id="contact-link1"
            className={`hidden sm:flex footer-links ${
              isActive == "contact" && "active"
            }`}
          >
            CONTACT
          </a>
        </div>
        <div className="w-full h-[2px] bg-cyan-400"></div>
      </div>
      <div className="w-full h-full bg-black bg-opacity-85 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-16 max-w-[75vw]">
          <div
            id="section-1"
            className="p-4 flex flex-col justify-center items-center"
          >
            <h1 className="header text-5xl font-semibold">My Websites are</h1>
            <div className="underline w-[210px] h-[4px] bg-white mt-3"></div>
          </div>
          <div id="section-2" className="flex w-[80vw] justify-between">
            <div className="flex flex-col items-center justify-between gap-3">
              <div className="hexagon">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/159/159085.png"
                  className="icon absolute z-30 "
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-1 max-w-80">
                <h1 className="text-2xl font-semibold">Fast</h1>
                <h3 className="text-gray-400 text-center">
                  Fast load times and lag free interaction, my highest priority.
                </h3>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="hexagon">
                <img
                  src="https://www.svgrepo.com/show/21810/tablet-and-laptop.svg"
                  className="icon absolute z-30 text-white"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-1 max-w-80">
                <h1 className="text-2xl font-semibold">Responsive</h1>
                <h3 className="text-gray-400 text-center">
                  My layouts will work on any device, big or small.
                </h3>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="hexagon">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3355/3355192.png"
                  className="icon absolute z-30 "
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-1 max-w-80">
                <h1 className="text-2xl font-semibold">Intuitive</h1>
                <h3 className="text-gray-400 text-center">
                  Strong preference for easy to use, intuitive UX/UI
                </h3>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="hexagon">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/7837/7837411.png"
                  className="icon absolute z-30 "
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-1 max-w-72">
                <h1 className="text-2xl font-semibold">Dynamic</h1>
                <h3 className="text-gray-400 text-center">
                  Websites don't have to be static, I love making pages come to
                  life.
                </h3>
              </div>
            </div>
          </div>
          <div id="section-3" className="flex justify-end">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="flex flex-col justify-center items-center text-center gap-3 max-w-[500px]">
                <h1 className="font-bold text-3xl text-fuchsia-600">
                  More about myself
                </h1>
                <h2>
                  I'm an undergraduate in B-Tech Computer Science and
                  Engineering from Shri GS Institute of Technology & Science,
                  Indore. Currently I'm working on MERN stack and Django but
                  also want to explore my potential in Machine Learning and
                  Artificial Intelligence.
                </h2>
              </div>
              <div className="flex flex-col justify-center items-center text-center gap-3 max-w-[500px]">
                <h1 className="font-bold text-3xl text-pink-500">
                  Work Experience
                </h1>
                <h2>
                  I am a Frontend Development Intern at Beiyo.in, where I
                  specialize in UI layout and enhancing user experience. Beiyo
                  is dedicated to making urban living more affordable,
                  comfortable, and community-driven.
                  <br /> Previously, I interned at E-Notebook, contributing to a
                  platform that helps pharmacy students systematically track
                  chemical reactions, supporting research and drug discovery.
                </h2>
              </div>
            </div>
            <div className="flex ml-40 mt-10 flex-col gap-4 w-[550px]">
              <div className="flex justify-start gap-3">
                <h1 className="w-20">HTML5</h1>
                <div className="bar w-[255px]">85%</div>
              </div>
              <div className="flex justify-start gap-3">
                <h1 className="w-20">CSS</h1>
                <div className="bar w-[255px]">85%</div>
              </div>
              <div className="flex justify-start gap-3">
                <h1 className="w-20">JS</h1>
                <div className="bar w-[225px]">75%</div>
              </div>
              <div className="flex justify-start gap-3">
                <h1 className="w-20">Java</h1>
                <div className="bar w-[180px]">60%</div>
              </div>
              <div className="flex justify-start gap-3">
                <h1 className="w-20">C++</h1>
                <div className="bar w-[150px]">50%</div>
              </div>
              <div className="flex justify-start gap-3">
                <h1 className="w-20">React</h1>
                <div className="bar w-[150px]">50%</div>
              </div>
              <div className="flex justify-start gap-3">
                <h1 className="w-20">Node.js</h1>
                <div className="bar w-[150px]">50%</div>
              </div>
              <div className="flex justify-start gap-3">
                <h1 className="w-20">MongoDB</h1>
                <div className="bar w-[120px]">40%</div>
              </div>
              <div className="flex justify-start gap-3">
                <h1 className="w-20">Django</h1>
                <div className="bar w-[60px]">20%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
