import React, { useState } from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ProjectCard({ image, pName, using, pLink, isLive }) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <motion.div
        className="rounded-lg lg:w-[29vw] md:w-[40vw] w-[75vw] lg:h-[32vh] md:h-[28vh] h-[40vh] mt-4 md:mt-0 relative bg-gray-800 text-white overflow-hidden cursor-pointer flex justify-center"
        initial="initial"
        whileHover="hover"
      >
        {!isLoaded && (
          <Skeleton
            className="absolute w-full h-full"
            baseColor="#2e2e2e"
            highlightColor="#444"
          />
        )}
        <img
          src={`${image}`}
          className="absolute w-full h-full"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />
        {/* Cover Overlay */}
        <motion.div
          className="border-[2px] rounded-lg absolute inset-0 bg-black/85"
          variants={{
            initial: { opacity: 0 },
            hover: { opacity: 1 },
          }}
        ></motion.div>

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

        {isLive ? (
          <motion.a
            href={`${pLink}`}
            className="absolute bottom-5 border bg-pink-600 hover:bg-pink-500 text-white py-2 px-4 rounded-md text-sm"
            variants={{
              initial: { y: 20, opacity: 0 },
              hover: { y: 0, opacity: 1 },
            }}
            target="_blank" rel="noopener noreferrer"
          >
            Visit
          </motion.a>
        ) : (
          <motion.div
            className="absolute bottom-5 border bg-pink-600 hover:bg-pink-500 text-white py-2 px-4 rounded-md text-sm"
            variants={{
              initial: { y: 20, opacity: 0 },
              hover: { y: 0, opacity: 1 },
            }}
          >
            Not live
          </motion.div>
        )}
      </motion.div>
    </>
  );
}

export default ProjectCard;
