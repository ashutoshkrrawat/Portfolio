import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ImageOff } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <Card className="group bg-theme-bg-primary/30 backdrop-blur-sm border-white/10 hover:border-theme-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-theme-primary/10 overflow-hidden flex flex-col h-full">
      
      {/* ========== IMAGE (only if exists) ========== */}
      {project.image ? (
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-theme-primary/10 to-theme-primary-light/5">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-theme-bg-primary via-transparent to-transparent opacity-60" />
        </div>
      ) : (
        /* Placeholder when no image */
        <div className="relative h-48 bg-gradient-to-br from-theme-primary/5 to-theme-primary-light/5 flex items-center justify-center border-b border-white/10">
          <ImageOff className="h-12 w-12 text-white/10" />
        </div>
      )}

      {/* ========== CONTENT ========== */}
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-theme-primary group-hover:to-theme-primary-light transition-all duration-300">
          {project.title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-400 line-clamp-3 leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col justify-between space-y-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:border-theme-primary/30 transition-all duration-300 text-xs"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.05}s backwards`
              }}
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-2 pt-2">
          {/* GitHub Button */}
          {project.github && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="flex-1 bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Github className="h-4 w-4" />
                Code
              </a>
            </Button>
          )}

          {/* Live Button - only if exists */}
          {project.live && (
            <Button
              asChild
              size="sm"
              className="flex-1 bg-theme-primary/10 border border-theme-primary/30 text-theme-primary hover:bg-theme-primary/20 hover:border-theme-primary/50 transition-all duration-300"
            >
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Live
              </a>
            </Button>
          )}
        </div>
      </CardContent>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Card>
  );
}