import {
  Code,
  BrainCircuit,
  Database,
  Palette,
  LayoutTemplate,
  TerminalSquare,
  Framer,
  Cpu,
} from "lucide-react";

import { Navbar } from "./Components/Navbar.jsx"
import { TopicCard } from "./Components/TopicCard.jsx";

// Data for our learning topics
const topics = [
  {
    icon: LayoutTemplate,
    title: "Web Development",
    description: "HTML, CSS, JavaScript, and the fundamentals of the modern web.",
    href: "/learn/web-dev",
  },
  {
    icon: Code,
    title: "React & Next.js",
    description: "Build dynamic, high-performance web applications with the most popular frameworks.",
    href: "/learn/react",
  },
  {
    icon: Palette,
    title: "UI/UX & Libraries",
    description: "Master Tailwind CSS, Framer Motion, and other tools to create stunning user interfaces.",
    href: "/learn/ui-ux",
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description: "Dive into the world of artificial intelligence, from basic concepts to advanced models.",
    href: "/learn/ai-ml",
  },
  {
    icon: Database,
    title: "Data Structures & Algos",
    description: "Strengthen your problem-solving skills with essential computer science concepts.",
    href: "/learn/dsa",
  },
  {
    icon: TerminalSquare,
    title: "Other Resources",
    description: "Explore a curated list of tools, articles, and guides for continuous learning.",
    href: "/learn/resources",
  },
];

function Learn() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black font-sans text-white">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] sm:w-[80rem] sm:h-[80rem] bg-radial-gradient(circle, rgba(29, 78, 216, 0.15), transparent 60%) -z-0"></div>
      
      <Navbar />

      <main className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            <span className="text-gray-400">Welcome to the </span>
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Learn Hub.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            A curated collection of topics to help you master new technologies,
            improve your skills, and grow your knowledge.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <TopicCard
              key={topic.title}
              icon={topic.icon}
              title={topic.title}
              description={topic.description}
              href={topic.href}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Learn;