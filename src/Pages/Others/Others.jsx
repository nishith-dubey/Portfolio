// src/pages/TechnologiesPage.jsx

import React from 'react';
import { 
  FaLinux, FaWindows, FaApple, FaDatabase, FaGit, FaGithub, FaDocker, FaAws, FaCodeBranch 
} from 'react-icons/fa';
import { 
  BsCpu, BsShield, BsTerminal, BsTable, BsBox, BsCloud 
} from 'react-icons/bs';
import { 
  SiMysql, SiPostgresql, SiMongodb, SiKubernetes 
} from 'react-icons/si';

const techCategories = [
  {
    id: 'os',
    title: 'Operating Systems',
    color: 'from-blue-400 to-cyan-500',
    borderColor: 'hover:border-cyan-400',
    topics: [
      {
        id: 1,
        name: 'Process Management',
        description: 'Managing program execution, scheduling, and inter-process communication.',
        icon: BsCpu,
        color: 'text-blue-400',
      },
      {
        id: 2,
        name: 'Linux',
        description: 'Open-source Unix-like operating system kernel and distributions.',
        icon: FaLinux,
        color: 'text-yellow-500',
      },
      {
        id: 3,
        name: 'Windows',
        description: 'Microsoft\'s proprietary operating system for personal computers.',
        icon: FaWindows,
        color: 'text-blue-500',
      },
      {
        id: 4,
        name: 'macOS',
        description: 'Apple\'s Unix-based operating system for Mac computers.',
        icon: FaApple,
        color: 'text-gray-400',
      },
      {
        id: 5,
        name: 'Security & Protection',
        description: 'User authentication, access control, and system security measures.',
        icon: BsShield,
        color: 'text-red-400',
      },
      {
        id: 6,
        name: 'Command Line Interface',
        description: 'Text-based interface for system administration and automation.',
        icon: BsTerminal,
        color: 'text-orange-400',
      },
    ]
  },
  {
    id: 'dbms',
    title: 'Database Management',
    color: 'from-green-400 to-blue-500',
    borderColor: 'hover:border-green-400',
    topics: [
      {
        id: 7,
        name: 'Relational Model',
        description: 'Foundation of modern databases using tables, rows, and columns.',
        icon: BsTable, // FIXED ICON
        color: 'text-blue-400',
      },
      {
        id: 8,
        name: 'SQL Queries',
        description: 'Structured Query Language for data manipulation and retrieval.',
        icon: FaDatabase,
        color: 'text-green-400',
      },
      {
        id: 9,
        name: 'MySQL',
        description: 'Popular open-source relational database management system.',
        icon: SiMysql,
        color: 'text-blue-500',
      },
      {
        id: 10,
        name: 'PostgreSQL',
        description: 'Advanced open-source object-relational database system.',
        icon: SiPostgresql,
        color: 'text-blue-600',
      },
      {
        id: 11,
        name: 'MongoDB',
        description: 'Document-oriented NoSQL database for flexible data storage.',
        icon: SiMongodb,
        color: 'text-green-500',
      },
      {
        id: 12,
        name: 'Database Security',
        description: 'User authentication, authorization, and data protection.',
        icon: BsShield,
        color: 'text-pink-400',
      },
    ]
  },
  {
    id: 'git',
    title: 'Git & GitHub',
    color: 'from-orange-400 to-red-500',
    borderColor: 'hover:border-orange-400',
    topics: [
      {
        id: 13,
        name: 'Git Basics',
        description: 'Version control fundamentals: init, add, commit, and status.',
        icon: FaGit,
        color: 'text-orange-500',
      },
      {
        id: 14,
        name: 'GitHub',
        description: 'Cloud-based Git repository hosting and collaboration platform.',
        icon: FaGithub,
        color: 'text-gray-400',
      },
      {
        id: 15,
        name: 'Branching & Merging',
        description: 'Creating parallel development lines and combining changes.',
        icon: FaCodeBranch,
        color: 'text-purple-400',
      },
      {
        id: 16,
        name: 'Pull Requests',
        description: 'Code review mechanism for merging changes in collaborative projects.',
        icon: BsTerminal,
        color: 'text-cyan-400',
      },
    ]
  },
  {
    id: 'docker',
    title: 'Docker & Containers',
    color: 'from-blue-500 to-purple-600',
    borderColor: 'hover:border-blue-400',
    topics: [
      {
        id: 17,
        name: 'Docker Basics',
        description: 'Containerization fundamentals and Docker engine architecture.',
        icon: FaDocker,
        color: 'text-blue-500',
      },
      {
        id: 18,
        name: 'Containers',
        description: 'Lightweight, portable execution environments for applications.',
        icon: BsBox,
        color: 'text-green-400',
      },
      {
        id: 19,
        name: 'Kubernetes',
        description: 'Open-source platform for automating container deployment and management.',
        icon: SiKubernetes,
        color: 'text-blue-600',
      },
    ]
  },
  {
    id: 'aws',
    title: 'Amazon Web Services',
    color: 'from-yellow-400 to-orange-500',
    borderColor: 'hover:border-yellow-400',
    topics: [
      {
        id: 20,
        name: 'AWS Cloud',
        description: 'Comprehensive cloud computing platform and services.',
        icon: FaAws,
        color: 'text-yellow-500',
      },
      {
        id: 21,
        name: 'Cloud Computing',
        description: 'On-demand delivery of IT resources over the internet.',
        icon: BsCloud,
        color: 'text-cyan-400',
      },
      {
        id: 22,
        name: 'AWS Security',
        description: 'Identity management, encryption, and compliance in the cloud.',
        icon: BsShield,
        color: 'text-red-400',
      },
    ]
  },
];


function TechnologiesPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Core Technologies
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 mb-8">
            Master the essential technologies for modern software development
          </p>
        </div>

        {/* Technology Categories */}
        {techCategories.map((category) => (
          <div key={category.id} className="mb-16">
            {/* Category Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </span>
              </h2>
            </div>

            {/* Topics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.topics.map((topic) => (
                <div
                  key={topic.id}
                  className={`bg-slate-800 rounded-xl p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:bg-slate-700/50 border border-slate-700 ${category.borderColor} shadow-lg`}
                >
                  {/* Icon */}
                  <div className={`text-5xl mb-4 ${topic.color}`}>
                    <topic.icon />
                  </div>

                  {/* Topic Name */}
                  <h3 className="text-xl font-bold text-slate-200 mb-2">
                    {topic.name}
                  </h3>

                  {/* Topic Description */}
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-slate-700">
          <p className="text-slate-500">
            Continue learning and building with these fundamental technologies
          </p>
        </div>
      </div>
    </div>
  );
}

export default TechnologiesPage;
