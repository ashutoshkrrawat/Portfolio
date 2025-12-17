export default function ProjectCard({ project }) {
  return (
    <div className="group rounded-xl bg-[#0d1321]/60 border border-white/10 overflow-hidden transition hover:border-[#10B9B7]/40 hover:shadow-lg hover:shadow-[#10B9B7]/10">
      
      <img
        src={project.image}
        alt={project.title}
        className="h-40 w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
      />

      <div className="p-4">
        <h4 className="text-lg font-semibold text-white">
          {project.title}
        </h4>

        <p className="text-sm text-white/60 mt-2 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
