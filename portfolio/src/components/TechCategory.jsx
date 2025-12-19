import { Card, CardContent } from "@/components/ui/card";
import MagneticButton from "./MagneticButton";

export default function TechCategory({ title, items }) {
  return (
    <Card className="bg-[#0d1321]/40 border border-white/10 backdrop-blur-sm hover:border-[#10B9B7]/40 transition">
      <CardContent className="p-6 space-y-6">

        <h3 className="text-xl font-semibold text-white mb-2">
          {title}
        </h3>

        <div className="flex flex-wrap gap-3">
          {items.map((t) => (
            <MagneticButton key={t.name}>
              <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white/70 hover:bg-[#10B9B7]/10 hover:text-[#10B9B7] transition">
                <img src={t.icon} className="h-5 w-5" alt={t.name} />
                <span className="text-sm">{t.name}</span>
              </div>
            </MagneticButton>
          ))}
        </div>

      </CardContent>
    </Card>
  );
}
