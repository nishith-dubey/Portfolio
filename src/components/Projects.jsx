import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { BackgroundGradient } from "../lib/background-gradient";
import { cn } from "../lib/utils";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Projects() {
  const [isActive, setIsActive] = useState("all");

  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    rootMargin: "-35% 0px",
    threshold: 0,
  });

  const headingControls = useAnimation();

  useEffect(() => {
    if (headingInView) headingControls.start("visible");
  }, [headingInView]);

  const [underlineRef, underlineInView] = useInView({
    triggerOnce: true,
    rootMargin: "-35% 0px",
    threshold: 0,
  });
  const [cardsRef, cardsInView] = useInView({
    triggerOnce: true,
    rootMargin: "-35% 0px",
    threshold: 0,
  });

  const underlineControls = useAnimation();
  const cardControls = useAnimation();

  useEffect(() => {
    if (headingInView) headingControls.start("visible");
  }, [headingInView]);

  useEffect(() => {
    if (underlineInView) underlineControls.start("visible");
  }, [underlineInView]);

  useEffect(() => {
    if (cardsInView) cardControls.start("visible");
  }, [cardsInView]);

  return (
    <div
      id="projects"
      className="h-[140vh] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden w-full"
    >
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="w-full h-full bg-black bg-opacity-90 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center max-w-[75vw] z-40">
          <div
            id="section-1"
            className="p-4 flex flex-col justify-center items-center z-40"
          >
            <motion.h1
              ref={headingRef}
              initial="hidden"
              animate={headingControls}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="header text-4xl font-semibold text-white"
            >
              PROJECTS
            </motion.h1>
            <motion.div
              ref={underlineRef}
              initial="hidden"
              animate={underlineControls}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { ease: "easeOut", delay: 0.4 },
                },
              }}
              className="underline w-[200px] h-[3px] bg-white mt-3"
            ></motion.div>
          </div>
          <motion.div
            ref={cardsRef}
            initial="hidden"
            animate={cardControls}
            variants={{
              hidden: { opacity: 0, rotateY: 90 },
              visible: {
                opacity: 1,
                rotateY: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
            className="flex flex-col mt-16 mb-5"
          >
            <div className="text-xl text-[#b3b3b3] flex gap-[6vw] max-w-[100vw]">
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
          </motion.div>
          <motion.div
            ref={cardsRef}
            initial="hidden"
            animate={cardControls}
            variants={{
              hidden: { opacity: 0, rotateY: 90 },
              visible: {
                opacity: 1,
                rotateY: 0,
                transition: {
                  duration: 0.6,
                  delay: 1,
                  ease: "easeOut",
                },
              },
            }}
          
            className="flex w-[90vw] h-auto flex-wrap">
            <ProjectCard
              image={"/p1.png"}
              pName={"Portfolio | Nishith Dubey"}
              using={"React / Sass"}
              pLink={"https://nishith-dubey.vercel.app"}
            />
            <ProjectCard
              image={"/p2.png"}
              pName={"MachineYard"}
              using={"React / Node.js / Sass"}
              pLink={"https://machine-yard.vercel.app"}
            />

            <ProjectCard
              image={"/p3.png"}
              pName={"Modern_UI_Music-Academy"}
              using={"Nextjs / Accertinity UI"}
              pLink={
                "https://music-8sbi994m6-nishith-dubeys-projects.vercel.app/"
              }
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
