
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { IconBrandGithub, IconChartRadar, IconUser } from "@tabler/icons-react";

import SkillsRadar from "@/components/RadarCharts";
import GithubContributions from "@/components/GithubContributions";
import ContributionTrend from "@/components/GithubLineGraph";
import PieChartWithPaddingAngle from "@/components/PieCharts";

export default function PortfolioBento() {
  return (
    <BentoGrid className="max-w-7xl mx-auto ">
      
      {/* ================= ROW 1 ================= */}

      {/* GitHub Heatmap */}
      <BentoGridItem
        title=""
        description=""
        header={<GithubContributions />}
        icon={<IconBrandGithub className="h-4 w-4 text-[#14d6d2]" />}
        className="md:col-span-1 bg-transparent"
      />

      {/* Contribution Trend Line Graph */}
      <BentoGridItem
        title=""
        description=""
        header={<ContributionTrend />}
        icon={<IconChartRadar className="h-4 w-4 text-[#14d6d2]" />}
        className="md:col-span-2 bg-transparent"
      />

      {/* ================= ROW 2 ================= */}

      {/* Pie Chart */}
      <BentoGridItem
        title="Progress Breakdown"
        description=""
        header={<PieChartWithPaddingAngle />}
        icon={<IconUser className="h-4 w-4 text-[#14d6d2]" />}
        className="md:col-span-1 bg-transparent"
      />

      {/* Radar Chart */}
      <BentoGridItem
        title=""
        description=""
        header={<SkillsRadar />}
        icon={<IconChartRadar className="h-4 w-4 text-[#14d6d2]" />}
        className="md:col-span-1 bg-transparent"
      />

      {/* Projects Count */}
      <BentoGridItem
        title="Projects"
        description="Completed & deployed."
        header={
          <div className="flex items-center justify-center h-full">
            <span className="text-6xl font-bold text-[#14d6d2]">17</span>
          </div>
        }
        icon={<IconUser className="h-4 w-4 text-[#14d6d2]" />}
        className="md:col-span-1 bg-transparent"
      />
    </BentoGrid>
  );
}

