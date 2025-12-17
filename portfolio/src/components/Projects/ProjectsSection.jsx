import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { projects } from "@/data/Project";
import ProjectCard from "./ProjectCard";
import TechFilter from "./TechFilter";

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
    <section className="relative py-24 overflow-hidden bg-black">
      
      {/* ===== TOP BLEND (IMPORTANT) ===== */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#060b12] to-transparent z-10" />

      {/* Subtle dotted background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* ===== HEADER ===== */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 mb-20 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B9B7] to-[#6CF2F0]">
            Projects
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A collection of my work showcasing various technologies and solutions
        </p>
        <div className="mt-6 h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#10B9B7] to-transparent rounded-full" />
      </div>

      {/* ===== CONTENT WRAPPER ===== */}
      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10">
          
          {/* LEFT — FILTER */}
          <TechFilter
            selectedTags={selectedTags}
            toggleTag={toggleTag}
            clearFilters={clearFilters}
          />

          {/* RIGHT — PROJECTS */}
          <div className="flex flex-col gap-6">
            
            {/* Result info */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-gray-400">
                Showing{" "}
                <span className="text-white font-semibold">
                  {filteredProjects.length}
                </span>{" "}
                projects
              </p>

              {selectedTags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {selectedTags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-[#10B9B7]/10 text-[#10B9B7] border border-[#10B9B7]/30"
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

            {/* Project Grid */}
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
        </div>
      </div>
    </section>
  );
}
