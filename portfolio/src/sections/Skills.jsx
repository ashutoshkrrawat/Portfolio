import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconBrandGithub,
  IconChartRadar,
  IconUser,
} from "@tabler/icons-react";

import SkillsRadar from "@/components/RadarCharts";
import GithubContributions from "@/components/GithubContributions";
import ContributionTrend from "@/components/GithubLineGraph";
import PieChartWithPaddingAngle from "@/components/PieCharts";

export default function PortfolioBento() {
  return (
    <section className="bg-black py-20">
      
      {/* ================= SKILLS HEADING ================= */}
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white flex justify-center">
          Skills
        </h2>
        <p className="mt-2 text-white/60 max-w-xl">
          A snapshot of my technical strengths, consistency, and progress over time.
        </p>
      </div>

      {/* ================= BENTO GRID ================= */}
      <BentoGrid className="max-w-7xl mx-auto px-4">
        
        {/* ================= ROW 1 ================= */}

        {/* GitHub Heatmap */}
        <BentoGridItem
          title="GitHub Contributions"
          description="Consistency in the last year"
          header={<GithubContributions />}
          icon={<IconBrandGithub className="h-4 w-4 text-[#14d6d2]" />}
          className="md:col-span-1 bg-transparent"
        />

        {/* Contribution Trend */}
        <BentoGridItem
          title="Contribution Trend"
          description="Daily activity pattern"
          header={<ContributionTrend />}
          icon={<IconChartRadar className="h-4 w-4 text-[#14d6d2]" />}
          className="md:col-span-2 bg-transparent"
        />

        {/* ================= ROW 2 ================= */}

        {/* Pie Chart */}
        <BentoGridItem
          title="Progress Breakdown"
          description="Skill distribution overview"
          header={<PieChartWithPaddingAngle />}
          icon={<IconUser className="h-4 w-4 text-[#14d6d2]" />}
          className="md:col-span-1 bg-transparent"
        />

        {/* Radar Chart */}
        <BentoGridItem
          title="Skill Overview"
          description="Self-assessment radar"
          header={<SkillsRadar />}
          icon={<IconChartRadar className="h-4 w-4 text-[#14d6d2]" />}
          className="md:col-span-1 bg-transparent"
        />

        {/* Projects Count */}
        <BentoGridItem
          title="Projects"
          description="Completed & deployed"
          header={
            <div className="flex items-center justify-center h-full">
              <span className="text-6xl font-bold text-[#14d6d2]">
                17
              </span>
            </div>
          }
          icon={<IconUser className="h-4 w-4 text-[#14d6d2]" />}
          className="md:col-span-1 bg-transparent"
        />
      </BentoGrid>
    </section>
  );
}
