// src/pages/DSA.jsx

import React from 'react';
// Import icons from react-icons to match the WebDev page style
// Bootstrap Icons (Bs)
import {
  BsGrid3X3,        // Arrays
  BsBodyText,       // Strings
  BsLink45Deg,      // Linked List
  BsStack,          // Stack & Queue
  BsShareFill,      // Graphs
  BsTreeFill        // Trees
} from 'react-icons/bs';

// Font Awesome Icons (Fa)
import {
  FaBrain,          // Algorithm Basics & DP
  FaInfinity,       // Maths
  FaRandom          // Divide & Conquer
} from 'react-icons/fa';

// Optional replacement for Sliding Window (from Heroicons or Lucide style)
import { HiArrowsExpand } from 'react-icons/hi'; // Heroicons
// OR if using Lucide-react:
// import { MoveHorizontal } from 'lucide-react';


// Data for the DSA topics
const dsaTopics = [
  {
    id: 1,
    name: 'Arrays',
    description: 'Fundamental contiguous data structure.',
    icon: BsGrid3X3,
    color: 'text-green-400',
  },
  {
    id: 2,
    name: 'Strings',
    description: 'Sequences of characters, a core data type.',
    icon: BsBodyText,
    color: 'text-sky-400',
  },
  {
    id: 3,
    name: 'Linked List',
    description: 'Nodes connected in a linear sequence.',
    icon: BsLink45Deg,
    color: 'text-blue-500',
  },
  {
    id: 4,
    name: 'Stack & Queue',
    description: 'LIFO and FIFO data management structures.',
    icon: BsStack,
    color: 'text-orange-400',
  },
  {
    id: 5,
    name: 'Graphs',
    description: 'Representing networks of nodes and edges.',
    icon: BsShareFill,
    color: 'text-purple-400',
  },
  {
    id: 6,
    name: 'Trees',
    description: 'Hierarchical structures with a root and nodes.',
    icon: BsTreeFill,
    color: 'text-emerald-500',
  },
  {
    id: 7,
    name: 'Dynamic Programming',
    description: 'Solving complex problems by breaking them down.',
    icon: FaBrain,
    color: 'text-pink-400',
  },
  {
    id: 8,
    name: 'Sliding Window',
    description: 'A technique for problems on arrays/strings.',
    icon: HiArrowsExpand,
    color: 'text-indigo-400',
  },
  {
    id: 9,
    name: 'Divide & Conquer',
    description: 'Recursive problem-solving strategy.',
    icon: FaRandom,
    color: 'text-rose-400',
  },
  {
    id: 10,
    name: 'Algorithm Basics',
    description: 'Concepts like complexity and sorting.',
    icon: FaBrain,
    color: 'text-amber-500',
  },
  {
    id: 11,
    name: 'Maths for DSA',
    description: 'Essential math concepts for algorithms.',
    icon: FaInfinity,
    color: 'text-fuchsia-400',
  },
];

// DSA Main Component, styled like the WebDev page
function DSA() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="text-center w-full max-w-5xl">
        {/* Header Section */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            Data Structures & Algorithms
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 mb-12">
          Build a strong foundation in computer science with these core concepts.
        </p>

        {/* Topics Grid - Identical styling to WebDev page */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {dsaTopics.map((topic) => (
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

export default DSA;