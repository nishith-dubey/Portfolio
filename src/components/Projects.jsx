import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [isActive, setIsActive] = useState("all");

  return (
    <div
      id="projects"
      className="second-section w-full h-[150vh] bg-[url('./assets/bg04.jpg')] bg-cover bg-fixed text-white flex flex-col justify-center items-center"
    >
      <div className="w-full h-full bg-black bg-opacity-90 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center max-w-[75vw]">
          <div
            id="section-1"
            className="p-4 flex flex-col justify-center items-center"
          >
            <h1 className="header text-4xl font-semibold">PROJECTS</h1>
            <div className="underline w-[200px] h-[3px] bg-white mt-3"></div>
          </div>
          <div className="flex flex-col mt-16 mb-5">
            <div className="text-xl text-[#b3b3b3] flex gap-[6vw]">
              <button
                onClick={() => setIsActive("all")}
                className={`${
                  isActive === "all" &&
                  "bg-[#e31b6d] text-white transition duration-200 ease-in-out"
                } px-4 py-1`}
              >
                ALL
              </button>
              <button
                onClick={() => setIsActive("node")}
                className={`${
                  isActive === "node" &&
                  "bg-[#e31b6d] text-white transition duration-200 ease-in-out"
                } px-4 py-1`}
              >
                NODE.JS
              </button>
              <button
                onClick={() => setIsActive("react")}
                className={`${
                  isActive === "react" &&
                  "bg-[#e31b6d] text-white transition duration-200 ease-in-out"
                } px-4 py-1`}
              >
                REACT-JS
              </button>
              <button
                onClick={() => setIsActive("js")}
                className={`${
                  isActive === "js" &&
                  "bg-[#e31b6d] text-white transition duration-200 ease-in-out"
                } px-4 py-1`}
              >
                JAVASCRIPT
              </button>
              <button
                onClick={() => setIsActive("aiml")}
                className={`${
                  isActive === "aiml" &&
                  "bg-[#e31b6d] text-white transition duration-200 ease-in-out"
                } px-4 py-1`}
              >
                AI/ML
              </button>
            </div>
          </div>
            <div className="flex w-[90vw] h-auto flex-wrap">
                <ProjectCard image={'../src/assets/p1.png'} pName={"Portfolio | Nishith Dubey"} using={"React / Sass"} pLink={"nishith-dubey.vercel.app"}/>
                <ProjectCard image={'../src/assets/p2.png'} pName={"MachineYard"} using={"React / Node.js / Sass"} pLink={"machineyard.vercel.app"}/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
              
            </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
