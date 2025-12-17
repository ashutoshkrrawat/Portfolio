import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Filter, X } from "lucide-react";

const ALL_TAGS = [
  "Nextjs",
  "AI",
  "MongoDB",
  "Prisma",
  "AuthJs",
  "Web3",
  "Convex",
  "WebSockets",
  "Redis",
  "Express",
];

export default function TechFilter({ selectedTags, toggleTag, clearFilters }) {
  return (
    <Card className="sticky top-28 bg-[#0d1321]/50 backdrop-blur-md border border-white/10">
      <CardContent className="p-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-[#10B9B7]" />
            <h3 className="text-lg font-semibold text-white">
              Filter by Tech
            </h3>
          </div>

          {selectedTags.length > 0 && (
            <button
              onClick={clearFilters}
              className="text-xs text-gray-400 hover:text-white flex items-center gap-1"
            >
              <X className="h-3 w-3" /> Clear
            </button>
          )}
        </div>

        {selectedTags.length > 0 && (
          <Badge className="mb-4 bg-[#10B9B7]/20 text-[#10B9B7] border border-[#10B9B7]/30">
            {selectedTags.length} selected
          </Badge>
        )}

        <Separator className="mb-4 bg-white/10" />

        <div className="space-y-3">
          {ALL_TAGS.map((tag) => (
            <label
              key={tag}
              className="flex items-center gap-3 text-sm text-gray-300 cursor-pointer hover:text-white"
            >
              <Checkbox
                checked={selectedTags.includes(tag)}
                onCheckedChange={() => toggleTag(tag)}
                className="border-white/20 data-[state=checked]:bg-[#10B9B7]"
              />
              {tag}
            </label>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
