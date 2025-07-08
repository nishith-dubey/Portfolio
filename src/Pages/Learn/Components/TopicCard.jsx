import { Link } from "react-router-dom";

export const TopicCard = ({ icon: Icon, title, description, href }) => {
  return (
    <Link
      to={href}
      className="
        group relative p-8 rounded-2xl bg-white/5 border border-white/10
        transform-gpu transition-all duration-300
        hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-900/50
      "
    >
      <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-tr from-blue-600/30 via-blue-900/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <div className="bg-blue-600/30 inline-block p-3 rounded-lg border border-blue-500/50 mb-6">
          <Icon className="text-blue-300" size={32} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      </div>
    </Link>
  );
};