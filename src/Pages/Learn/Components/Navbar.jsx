import { BookOpen, Moon, Sun } from "lucide-react";

export const Navbar = ({ theme, setTheme }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 dark:bg-black/70 backdrop-blur-sm transition-colors px-6 sm:px-28">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center border-zinc-800 border mt-4 rounded-xl">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-white">
            &lt;LearnLog/&gt;
            </span>
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};
