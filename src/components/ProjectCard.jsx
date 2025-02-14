import React, { useState } from "react";
import { motion } from "framer-motion";

function ProjectCard({image, pName, using, pLink}) {
  return (
    <>
    <motion.div
      className="m-[1px] w-[29vw] h-[30vh] relative bg-gray-800 text-white overflow-hidden cursor-pointer flex justify-center"
      initial="initial"
      whileHover="hover"
    >
      <img 
        src={`../src/assets/${image}`}
        alt="Coveaar" 
        className="absolute w-full h-full"
      />
      {/* Cover Overlay */}
      <motion.div
        className="border-[2px] absolute inset-0 bg-black/85"
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 1 },
        }}
      ></motion.div>

      {/* Title Animation */}
      <motion.h2
        className="absolute text-center w-full mt-10"
        variants={{
          initial: { y: -20, opacity: 0 },
          hover: { y: 0, opacity: 1 },
        }}
      >
        <div className="text-white font-semibold text-3xl">{pName}</div>
        <div className="text-[#e31b6d] text-xl">{using}</div>
      </motion.h2>

      {/* Visit Button Animation */}
      <motion.a
        href={`https://${pLink}`}
        className="absolute bottom-5 border border-pink-500 text-pink-500 py-2 px-4 rounded-md text-sm"
        variants={{
          initial: { y: 20, opacity: 0 },
          hover: { y: 0, opacity: 1 },
        }}
      >
        Visit
      </motion.a>
    </motion.div>
    </>
  );
}

export default ProjectCard;
