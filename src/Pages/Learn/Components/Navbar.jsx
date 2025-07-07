import { BookOpen, Moon, Sun } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <BookOpen className="text-blue-500" size={28} />
          <span className="text-xl font-bold text-white">LearnHub</span>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors">
            <Sun size={20} />
            {/* <Moon size={20} />  // Logic for theme toggle would go here */}
          </button>
        </div>
      </div>
    </nav>
  );
};