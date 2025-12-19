import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { projects } from "@/data/Project";
import ProjectCard from "@/components/Projects/ProjectCard";
import TechFilter from "@/components/Projects/TechFilter";
import { WordRotate } from "@/components/WordRotate";

export default function ProjectsSection() {
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => setSelectedTags([]);

  const filteredProjects =
    selectedTags.length === 0
      ? projects
      : projects.filter((project) =>
          selectedTags.every((tag) => project.tags.includes(tag))
        );

  return (
    <section className="relative py-24 overflow-hidden bg-transparent">
      
      {/* ===== TOP BLEND ===== */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#060b12] to-transparent z-10" />

      {/* ===== DOT BACKGROUND ===== */}
      

      {/* ===== HEADER ===== */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 mb-20 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B9B7] to-[#6CF2F0]">
            <WordRotate
              words={["Projects", "Creations", "Works"]}
              className="font-doto text-6xl text-white"
            />
          </span>
        </h2>
        
        <div className="mt-8 h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#10B9B7] to-transparent rounded-full" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-20 max-w-7xl mx-auto px-6">

        {/* ===== FILTER ABOVE PROJECTS ===== */}
        <div className="mb-10 bg-[#0d1321]/40 border border-white/10 rounded-xl p-5">
          <TechFilter
            selectedTags={selectedTags}
            toggleTag={toggleTag}
            clearFilters={clearFilters}
          />

          {selectedTags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedTags.map((tag) => (
                <Badge
                  key={tag}
                  className="bg-[#10B9B7]/10 text-[#10B9B7] border border-[#10B9B7]/30 "
                >
                  {tag}
                  <button
                    onClick={() => toggleTag(tag)}
                    className="ml-2 hover:text-white"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* ===== PROJECT GRID ===== */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white">
              No projects found
            </h3>
            <p className="text-gray-400 mt-2 mb-4">
              Try adjusting your filters
            </p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 rounded-lg bg-[#10B9B7]/10 border border-[#10B9B7]/30 text-[#10B9B7] hover:bg-[#10B9B7]/20 transition"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#060b12]" />

    </section>
  );
}
