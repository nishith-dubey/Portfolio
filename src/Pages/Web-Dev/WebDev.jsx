// src/App.jsx

import React from 'react';

// Import icons from react-icons
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaServer } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

// Data for the topics
const topics = [
  {
    id: 1,
    name: 'HTML5',
    description: 'The standard markup language for documents designed to be displayed in a web browser.',
    icon: FaHtml5,
    color: 'text-orange-500',
  },
  {
    id: 2,
    name: 'CSS3',
    description: 'A style sheet language used for describing the presentation of a document written in HTML.',
    icon: FaCss3Alt,
    color: 'text-blue-500',
  },
  {
    id: 3,
    name: 'Tailwind CSS',
    description: 'A utility-first CSS framework for rapidly building custom user interfaces.',
    icon: SiTailwindcss,
    color: 'text-cyan-400',
  },
  {
    id: 4,
    name: 'JavaScript',
    description: 'The programming language of the Web, enabling interactive and dynamic content.',
    icon: FaJsSquare,
    color: 'text-yellow-400',
  },
  {
    id: 5,
    name: 'React',
    description: 'A JavaScript library for building user interfaces, developed by Facebook.',
    icon: FaReact,
    color: 'text-sky-400',
  },
  {
    id: 6,
    name: 'Node.js',
    description: 'A back-end JavaScript runtime environment that executes JavaScript code outside a web browser.',
    icon: FaNodeJs,
    color: 'text-green-500',
  },
  {
    id: 7,
    name: 'Next.js',
    description: 'A React framework for production-grade applications with server-side rendering and more.',
    icon: SiNextdotjs,
    color: 'text-white', // Next.js icon is already black/white, so we can use a neutral color
  },
  {
    id: 8,
    name: 'Express.js',
    description: 'A minimal and flexible Node.js web application framework that provides a robust set of features.',
    icon: FaServer,
    color: 'text-gray-400',
  },
];

// Main App Component
function WebDev() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="text-center w-full max-w-4xl">
        {/* Header Section */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            Web Development Topics
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 mb-12">
          A curated list of essential technologies for modern web developers.
        </p>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="bg-slate-800 rounded-xl p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:bg-slate-700/50 border border-slate-700 hover:border-teal-400 shadow-lg"
            >
              {/* Icon */}
              <div className={`text-6xl mb-4 ${topic.color}`}>
                <topic.icon />
              </div>

              {/* Topic Name */}
              <h3 className="text-2xl font-bold text-slate-200 mb-2">
                {topic.name}
              </h3>

              {/* Topic Description */}
              <p className="text-slate-400 text-sm">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WebDev;