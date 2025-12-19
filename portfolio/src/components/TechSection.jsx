import MagneticButton from "./MagneticButton";

export default function TechSection({ title, techs, delay }) {
  return (
    <div 
      className="flex flex-col md:flex-row gap-8 md:gap-16 py-12 border-b border-white/10 last:border-b-0"
      style={{
        animation: `fadeInUp 0.8s ease-out ${delay}s backwards`
      }}
    >
      {/* Left - Category Title */}
      <div className="md:w-1/4">
        <h3 className="text-5xl md:text-6xl font-black text-white/50 uppercase tracking-tight">
          {title}
        </h3>
      </div>

      {/* Right - Tech Items */}
      <div className="md:w-3/4 flex flex-wrap gap-x-12 gap-y-12">
        {techs.map((tech, index) => (
          <div
            key={tech.name}
            style={{
              animation: `fadeInUp 0.6s ease-out ${delay + (index * 0.1)}s backwards`
            }}
          >
            <MagneticButton tech={tech} />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
