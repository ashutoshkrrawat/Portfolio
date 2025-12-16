import { cn } from "@/lib/utils";

export function DotBackground({ className, children }) {
  return (
    <div className={cn("relative w-full h-full bg-black", className)}>
      
      {/* Dot pattern */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#ffffff_1px,transparent_1px)]",
          "opacity-20"
        )}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
