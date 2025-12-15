import GithubContributions from "@/components/GithubContributions";
import SimpleRadarChart from "@/components/RadarCharts";
import PieChartWithPaddingAngle from "@/components/PieCharts";

function Skills() {
  return (
    <section className="space-y-12">
      {/* Your radar chart here */}
      {/* GitHub stats card here */}

      <GithubContributions />
        <SimpleRadarChart />
        <PieChartWithPaddingAngle />
    </section>
  );
}

export default Skills;
