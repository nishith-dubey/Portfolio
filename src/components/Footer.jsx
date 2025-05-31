import React from "react";
import {
  mdiLinkedin,
  mdiInstagram,
  mdiGithub,
  mdiGmail,
} from "@mdi/js";
import Icon from "@mdi/react";
import { MdDoubleArrow } from "react-icons/md";

function Footer() {
  return (
    <div className="bg-black w-full h-[30vh] flex justify-center relative">
      <a
        href="#"
        className="w-10 flex justify-center items-center h-10 bg-transparent text-white text-[100px] -rotate-90 absolute -top-5 hover:scale-110 transition-all duration-200 hover:text-pink-500 ease-in-out"
      >
        <MdDoubleArrow />
      </a>
      <div className="mt-10 w-[35vw] mx-auto text-center text-white py-6 flex flex-col gap-5">
        <div className="flex justify-center space-x-8 mb-4">
          <a
            href={"https://www.linkedin.com/in/nishith-dubey-rbd"}
            className="w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-[#0E76A8]"
          >
            <Icon path={mdiLinkedin} size={1.2} className="text-white" />
          </a>
          <a
            href={"https://www.instagram.com/nishithrbd/"}
            className="w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-[#C13584]"
          >
            <Icon path={mdiInstagram} size={1.2} className="text-white" />
          </a>
          <a
            href={"https://github.com/nishith-dubey"}
            className="w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-[#211F1F]"
          >
            <Icon path={mdiGithub} size={1.2} className="text-white" />
          </a>
          <a
            href={"mailto: nishithrbd@gmail.com"}
            className="w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-red-600"
          >
            <Icon path={mdiGmail} size={1.2} className="text-white" />
          </a>
          <a
            href={"https://leetcode.com/nishithrbd"}
            className="w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-[#FEA116]"
          >
            <div className="leetcode">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                viewBox="0 0 24 24"
                id="leetcode"
                className="invert w-[25px]"
              >
                <path d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z"></path>
                <path d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z"></path>
              </svg>
            </div>
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          Nishith Dubey <span className="text-pink-700 ml-1">©2025</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;

{
  /* <Icon path={icon} size={1.2} className="text-white" /> */
}
