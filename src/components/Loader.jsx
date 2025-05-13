import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa"; // You can install with `npm i react-icons`

const Loader = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-[9999] text-center px-4"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="text-6xl mb-6 text-pink-500"
        >
          <FaLaptopCode />
        </motion.div>
        <motion.h1
          className="text-2xl font-semibold animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Brewing some awesome pixels...
        </motion.h1>
        <p className="text-sm text-gray-400 mt-3 italic">
          (Even our bugs are taking a coffee break ☕)
        </p>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
