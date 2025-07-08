// src/pages/MachineLearningPage.jsx

import React from 'react';

// Import relevant icons from react-icons
import { FaPython, FaBrain, FaLayerGroup, FaEye } from 'react-icons/fa';
import { BsTable, BsGraphUp, BsCircleHalf, BsBullseye } from 'react-icons/bs';
import { SiTensorflow, SiPytorch, SiScikitlearn } from 'react-icons/si';

// Data for the Machine Learning topics
const mlTopics = [
  {
    id: 1,
    name: 'Python for ML',
    description: 'The core programming language for data science and machine learning.',
    icon: FaPython,
    color: 'text-yellow-400',
  },
  {
    id: 2,
    name: 'NumPy & Pandas',
    description: 'Essential libraries for numerical computation and data manipulation.',
    icon: BsTable,
    color: 'text-blue-400',
  },
  {
    id: 3,
    name: 'Supervised Learning',
    description: 'Training models on labeled data to make predictions (e.g., regression, classification).',
    icon: BsBullseye,
    color: 'text-green-400',
  },
  {
    id: 4,
    name: 'Unsupervised Learning',
    description: 'Finding patterns and structures in unlabeled data (e.g., clustering, dimensionality reduction).',
    icon: BsCircleHalf,
    color: 'text-orange-400',
  },
  {
    id: 5,
    name: 'Neural Networks',
    description: 'Models inspired by the human brain, forming the basis of deep learning.',
    icon: FaBrain,
    color: 'text-pink-400',
  },
  {
    id: 6,
    name: 'Deep Learning',
    description: 'Using deep neural networks with many layers to solve complex problems.',
    icon: FaLayerGroup,
    color: 'text-purple-400',
  },
  {
    id: 7,
    name: 'Scikit-learn',
    description: 'A simple and efficient tool for data mining and data analysis.',
    icon: SiScikitlearn,
    color: 'text-orange-500',
  },
  {
    id: 8,
    name: 'TensorFlow',
    description: 'An end-to-end open-source platform for machine learning from Google.',
    icon: SiTensorflow,
    color: 'text-amber-500',
  },
  {
    id: 9,
    name: 'PyTorch',
    description: 'An open-source ML library from Meta AI for deep learning and research.',
    icon: SiPytorch,
    color: 'text-red-500',
  },
  {
    id: 10,
    name: 'Natural Language Processing',
    description: 'Enabling computers to understand and process human language.',
    icon: BsGraphUp, // Represents text analysis
    color: 'text-teal-400',
  },
  {
    id: 11,
    name: 'Computer Vision',
    description: 'Teaching computers to interpret and understand the visual world.',
    icon: FaEye,
    color: 'text-cyan-400',
  },
];

// Main Component for the Machine Learning Page
function MLDL() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="text-center w-full max-w-6xl">
        {/* Header Section */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
            Machine Learning Concepts
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 mb-12">
          Explore the core concepts, models, and libraries driving AI today.
        </p>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {mlTopics.map((topic) => (
            <div
              key={topic.id}
              className="bg-slate-800 rounded-xl p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:bg-slate-700/50 border border-slate-700 hover:border-pink-400 shadow-lg"
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

export default MLDL;