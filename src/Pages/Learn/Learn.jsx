import {
  Code,
  BrainCircuit,
  Database,
  Palette,
  LayoutTemplate,
  TerminalSquare,
} from "lucide-react";

import { Navbar } from "./Components/Navbar.jsx";
import { TopicCard } from "./Components/TopicCard.jsx";
import { useEffect, useState } from "react";

const topics = [
  {
    icon: LayoutTemplate,
    title: "Web Development",
    description: "HTML, CSS, JavaScript, and the fundamentals of the modern web.",
    href: "/learn/web-dev",
  },
  {
    icon: Database,
    title: "Data Structures & Algos",
    description: "Strengthen your problem-solving skills with essential computer science concepts.",
    href: "/learn/dsa",
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description: "Dive into the world of artificial intelligence, from basic concepts to advanced models.",
    href: "/learn/ai-ml",
  },
  {
    icon: TerminalSquare,
    title: "Other Resources",
    description: "Explore a curated list of tools, articles, and guides for continuous learning.",
    href: "/learn/resources",
  },
];

function Learn() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") || "dark";
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      root.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white text-black dark:bg-black dark:text-white font-sans transition-colors duration-300 sm:px-28">
      {/* Gradient BG */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] sm:w-[80rem] sm:h-[80rem] bg-[radial-gradient(circle,rgba(29,78,216,0.15),transparent_60%)] -z-0"></div>

      <Navbar theme={theme} setTheme={setTheme} />

      <main className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            <span className="text-gray-600 dark:text-gray-400">Welcome to the </span>
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
             &lt;LearnLog/&gt;
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
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
