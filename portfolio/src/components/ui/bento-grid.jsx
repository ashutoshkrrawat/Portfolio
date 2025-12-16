import { cn } from "@/lib/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        `
        mx-auto
        grid
        max-w-6xl
        grid-cols-1
        gap-6
        md:grid-cols-3
        md:auto-rows-[20rem]
        `,
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
  className={cn(
    `
    group/bento
    row-span-1
    flex flex-col
    rounded-xl
    border border-white/20
    bg-black/50
    p-4
    overflow-hidden
    transition
    duration-200
    hover:shadow-[0_0_40px_rgba(20,214,210,0.12)]
    `,
    className
  )}
>

      {/* Header / Chart / Graph */}
      <div className="flex-1 min-h-0 overflow-hidden">
  {header}
</div>


      {/* Footer */}
      <div className="mt-4 transition-all duration-300 group-hover/bento:translate-x-1">
        {icon && <div className="mb-2">{icon}</div>}

        {title && (
          <div className="text-sm font-semibold text-[#e5e7eb]">
            {title}
          </div>
        )}

        {description && (
          <div className="mt-1 text-xs text-[#94a3b8] leading-relaxed">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};
