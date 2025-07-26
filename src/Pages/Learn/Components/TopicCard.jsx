import { Link } from "react-router-dom";

export const TopicCard = ({ title, href, img }) => {
  return (
    <Link to={href} className="group relative block">
      {/* Main Card */}
      <div
        className="
        relative p-6 rounded-xl 
        bg-white/5 backdrop-blur-sm border border-white/10
        transition-all duration-500 ease-out
        hover:bg-white/10 hover:border-white/20
        hover:-translate-y-1 hover:scale-[1.02]
        hover:shadow-xl hover:shadow-blue-500/20
      "
      >
        {/* Subtle glow effect */}
        <div
          className="
          absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
          bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10
          transition-opacity duration-500
        "
        ></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center gap-4">
          <h3
            className="
            text-xl font-semibold text-white/90 group-hover:text-white
            transition-colors duration-300
            tracking-tight leading-snug
          "
          >
            {title}
          </h3>

          <img src={img} alt="" className="rounded-lg " />
        </div>
      </div>
    </Link>
  );
};
