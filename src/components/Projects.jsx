import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard"; // Assuming ProjectCard is in a separate file
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// --- 1. Data-Driven Approach: Project data is now an array of objects ---
// This makes it easy to add, remove, or filter projects.
const projectsData = [
  {
    id: 1,
    image: "/p1.png",
    pName: "Portfolio | Nishith Dubey",
    using: "React",
    pLink: "https://nishith-dubey.vercel.app",
    isLive: true,
    category: "react",
  },
  {
    id: 2,
    image: "/p2.png",
    pName: "Machine Yard",
    using: "HTML / TailwindCSS / Node.js",
    pLink: "https://machine-yard.vercel.app",
    isLive: true,
    category: "node",
  },
  {
    id: 3,
    image: "/p3.png",
    pName: "Modern UI Music-Acad.",
    using: "Next.js / Aceternity UI",
    pLink: "https://music-8sbi994m6-nishith-dubeys-projects.vercel.app/",
    isLive: true,
    category: "react", // Next.js is a React framework
  },
  {
    id: 4,
    image: "/p4.png",
    pName: "SumAI",
    using: "Next.js / Saas AI",
    pLink: "https://sumai01.vercel.app",
    isLive: true,
    category: "aiml",
  },
  {
    id: 5,
    image: "/p5.png",
    pName: "imagyn",
    using: "React.js / Node.js / Saas AI",
    pLink: "https://imagyn.vercel.app",
    isLive: true,
    category: "aiml",
  },
  {
    id: 6,
    image: "/p6.png",
    pName: "Kabil - Job Portal",
    using: "MERN Stack",
    pLink: "https://kabil.vercel.app",
    isLive: false,
    category: "react", // MERN includes React
  },
  {
    id: 7,
    image: "/p7.png",
    pName: "Bookish - Book Review Platform",
    using: "MERN Stack",
    pLink: "https://bookish01.vercel.app",
    isLive: true,
    category: "node", // MERN includes Node.js
  },
];

// --- 2. Dynamic Filter Buttons: Makes adding/removing filters easier ---
const filterCategories = [
  { id: "all", label: "ALL" },
  { id: "react", label: "REACT" },
  { id: "node", label: "NODE.JS" },
  { id: "js", label: "JAVASCRIPT" },
  { id: "aiml", label: "AI/ML" },
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  // --- 3. Filter Implementation ---
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(projectsData);
    } else {
      const newFilteredProjects = projectsData.filter((project) =>
        project.category === activeCategory
      );
      setFilteredProjects(newFilteredProjects);
    }
  }, [activeCategory]);

  // --- 4. Simplified & Staggered Animations ---
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-200px 0px", // Trigger a bit earlier
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Each child will animate 0.2s after the previous one
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div
      id="projects"
      className="flex flex-col antialiased bg-[url('./assets/bg04.jpg')] bg-cover bg-fixed dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative w-full overflow-x-hidden"
    >
      <div className="w-full h-full bg-black/90 flex justify-center items-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="py-20 lg:py-32 flex flex-col justify-center items-center w-full max-w-6xl px-4 z-40"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="header text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
              PROJECTS
            </h2>
            <div className="underline w-36 lg:w-48 h-1 bg-pink-500 mt-3 mx-auto"></div>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mb-10"
          >
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm md:text-base font-medium rounded-md transition-all duration-300 ease-in-out
                  ${
                    activeCategory === category.id
                      ? "bg-[#e31b6d] text-white shadow-lg"
                      : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/70"
                  }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          <motion.div
            layout // This prop animates layout changes (like filtering)
            className="grid w-[90vw] h-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-4 place-items-center"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <ProjectCard
                    image={project.image}
                    pName={project.pName}
                    using={project.using}
                    pLink={project.pLink}
                    isLive={project.isLive}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;